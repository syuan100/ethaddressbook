var ethAddressBook = (function () {
  'use strict';

  // WebCrypto Encryption API: https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/decrypt

  const encryptText = async function(plainText, password) {
    const ptUtf8 = new TextEncoder().encode(plainText);
    const pwUtf8 = new TextEncoder().encode(password);
    const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8); 
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const alg = { name: 'AES-GCM', iv: iv };
    const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['encrypt']);
    return { iv, encBuffer: await crypto.subtle.encrypt(alg, key, ptUtf8) };
  };

  const decryptText = async function(ctBuffer, iv, password) {
    const pwUtf8 = new TextEncoder().encode(password);
    const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);
    const alg = { name: 'AES-GCM', iv: iv };
    const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['decrypt']);
    const ptBuffer = await crypto.subtle.decrypt(alg, key, ctBuffer);
    const plaintext = new TextDecoder().decode(ptBuffer);
    return plaintext;
  };

  // Conversion methods for array buffers to Swarm storable strings: https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String 
  // TODO: Investigate if this is too limited

  const ab2str = function(buf) {
    return String.fromCharCode.apply(null, new Uint8Array(buf));
  };

  const str2ab = function(str) {
    const buf = new ArrayBuffer(str.length);
    let bufView = new Uint8Array(buf);
    for (var i=0, strLen=str.length; i < strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  };

  const Web3 = require('web3');
  const web3 = new Web3('ws://localhost:8546');

  const eab = {};

  // TODO:
  //  - Add support for IPFS
  //  - Deploy swarm contract to other testnets
  const swarmHashJsonInterfaceVYPER = [{"name": "store_swarm_hash", "outputs": [], "inputs": [{"type": "bytes32", "name": "inputPt1"}, {"type": "bytes32", "name": "inputPt2"}], "constant": false, "payable": false, "type": "function", "gas": 70682}, {"name": "get_swarm_hash", "outputs": [{"type": "bytes32[2]", "name": "out"}], "inputs": [{"type": "address", "name": "_address"}], "constant": true, "payable": false, "type": "function", "gas": 1294}, {"name": "swarmHash__pt1", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [{"type": "address", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 787}, {"name": "swarmHash__pt2", "outputs": [{"type": "bytes32", "name": "out"}], "inputs": [{"type": "address", "name": "arg0"}], "constant": true, "payable": false, "type": "function", "gas": 823}];

  const swarmHashAddressRopstenVYPER = "0xe330529D363cBa6f1C1b7A81287026Fe93741736";
  const swarmHashAddressRinkebySOLIDITY = "0x95275693aF9E7b20F8Dbb7466Bb1652510d93359";

  var CURRENT_SWARM_HASH_INTERFACE = swarmHashJsonInterfaceVYPER;
  var CURRENT_SWARM_HASH_ADDRESS;
  var swarmHashContractInstance;
  const PUBLIC_SWARM_URL = "https://swarm-gateways.net/";

  // TODO: Provide error response message if Swarm gateway cannot be reached
  var CURRENT_GATEWAY_URL = PUBLIC_SWARM_URL;

  eab.setNetwork = async function(networkId) {
    if (networkId === "3") {
      CURRENT_SWARM_HASH_ADDRESS = swarmHashAddressRopstenVYPER;
    } else if (networkId === "4") {
      CURRENT_SWARM_HASH_ADDRESS = swarmHashAddressRinkebySOLIDITY;
    }
    swarmHashContractInstance = web3.eth.contract(CURRENT_SWARM_HASH_INTERFACE).at(CURRENT_SWARM_HASH_ADDRESS);
  };

  eab.getBook = function(swarmHash, password) {
    return fetch(CURRENT_GATEWAY_URL + "bzz:/" + swarmHash, { method: "GET" }).then( response => {
      return response.text()
    }).then( responseText => {
      let addressBookObject = JSON.parse(responseText);
      if (addressBookObject.encrypted === true) {
        return decryptAddressBook(responseText, password)
      } else {
        return addressBookObject.addressBook
      }
    })
  };

  eab.storeBook = async function(address, addressBook, password) {
    if (verifyAddressBook(addressBook)) {
      let encrypted = false;
      if (password) {
        encrypted = true;
        addressBook = await encryptAddressBook(addressBook, password);
      }
      const swarmObject = {
        encrypted: encrypted,
        addressBook: addressBook
      };
      fetch(CURRENT_GATEWAY_URL + "bzz:/", {
        method: "POST",
        body: JSON.stringify(swarmObject)
      }).then( response => {
        if (response.ok) {
          return response.text()
        }
      }).then( storedSwarmHash => {
        // Split the hash into two 32-byte strings to save space
        // https://solidity.readthedocs.io/en/v0.4.25/types.html?highlight=bytes32#dynamically-sized-byte-array
        const hashFront = storedSwarmHash.substr(0, 32);
        const hashBack = storedSwarmHash.substr(32);
        return storeHash(address, hashFront, hashBack)
      });
    } else {
      throw new Error("Cannot store address book. Please see errors above.")
    }
  };

  eab.getHash = async function(address) {
    return new Promise((resolve, reject) => swarmHashContractInstance.get_swarm_hash(address, {
      from: address
    }, function(error, result) {
      if (error){        
        return reject(error)
      }
      if (result){
        let hashString = web3.toAscii(result[0]) + web3.toAscii(result[1]);
        return resolve(hashString)
      }
    }))
  };

  async function storeHash(sendingAddress, hashPt1, hashPt2) {
    return new Promise((resolve, reject) => swarmHashContractInstance.store_swarm_hash(hashPt1, hashPt2, {
      from: sendingAddress
    }, function(error, result){
      if (error) 
        return reject(error)
      if (result)
        return resolve(result)
    }))
  }

  async function encryptAddressBook(addressBook, password) {
    let encryptedAddressBook = await encryptText(addressBook, password);
    let transformedAddressBook = {
      iv: JSON.parse('[' + encryptedAddressBook.iv.toString() + ']'),
      encBuffer: encodeURIComponent(ab2str(encryptedAddressBook.encBuffer))
    };
    return transformedAddressBook
  }

  async function decryptAddressBook(rawAddressBook, password){
    let addressBookObject = JSON.parse(rawAddressBook);
    if (addressBookObject.encrypted === true) {
      if (!password) {
        return new Error("Cannot decrypt addressbook - No password supplied for encrypted address book object.")
      } else {
        let iv = new Uint8Array(addressBookObject.addressBook.iv);
        let buff = str2ab(decodeURIComponent(addressBookObject.addressBook.encBuffer));
        try {
          var decodedAddressBook = await decryptText(buff, iv, password);
        } catch(e) {
          return new Error("Unable to decrypt address book due to either a wrong password or a corrupted address book.")
        }
        return decodedAddressBook
      }
    } else {
      return addressBookObject.addressBook
    }
  }

  // verifyAddressBook TODOs:
  // - Restrict # of entries (10?)
  // - Restrict bytes per entry
  // - Reference model structure in error

  function verifyAddressBook(addressBook) {
    try {
      var parsedAddressBook = JSON.parse(addressBook);
    } catch(e) {
      console.error("Address books must be JSON.stringified() objects.");
      return false
    }
    if (!Array.isArray(parsedAddressBook.addresses)) {
      console.error("Address books must have a key named 'addresses' corresponding to an array of address entries.");
      return false
    } else if (!parsedAddressBook.addresses.every(function(entry) {
      return typeof entry.label === "string"
    })) {
      console.error("Each address entry must be an object that contains a key named 'label' corresponding to a string.");
      return false
    } else if (!parsedAddressBook.addresses.every(function(entry) {
      return web3.isAddress(entry.address)
    })) {
      console.error("Each address entry must be an object that contains a key named 'address' corresponding to a valid eth address.");
      return false
    } else {
      return true
    }
  }

  return eab;

}());

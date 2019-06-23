window.addEventListener('load', async() => {

  let providerEnabled = false

  /*
   * Set latest web3 provider via MetaMask
   * https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8 
   */

  if (window.ethereum) {
      window.web3 = new Web3(ethereum);
      try {
          // Request account access if needed
          await ethereum.enable();
          providerEnabled = true
          console.log("Connected to MetaMask web3 provider.")
      } catch (error) {
          // User denied account access...
          console.log("MetaMask access request denied. Please try again.")
      }
  }

  else if (window.web3) {
      window.web3 = new Web3(web3.currentProvider);
      providerEnabled = true
      console.log("Connected to Legacy web3 provider.")
      // Acccounts always exposed
  }
  // Non-dapp browsers...
  else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
  }

  if (providerEnabled) {
    web3.version.getNetwork((err, netId) => {
      switch (netId) {
        case "1":
          console.log('mainnet')
          break
        case "2":
          console.log('On the deprecated Morden test network.')
          break
        case "3":
          console.log('On the ropsten test network.')
          ethAddressBook.setNetwork(netId)
          break
        case "4":
          console.log('On the Rinkeby test network.')
          ethAddressBook.setNetwork(netId)
          break
        case "42":
          console.log('On the Kovan test network.')
          break
        default:
          console.log('On an unknown network.')
      }
      init()
    })
  }

})

function init() {

  async function updateInterface(account) {
    document.getElementById("current-address").innerHTML = account
    document.getElementById("hash-for-address").innerHTML = await ethAddressBook.getHash(account)
  }

  var account = web3.eth.accounts[0]

  var accountInterval = setInterval(function() {
    if (web3.eth.accounts[0] !== account) {
      account = web3.eth.accounts[0]
      updateInterface(account)
    }
  }, 100)

  if (account) {
    updateInterface(account)
  }

  document.querySelector("#encrypt").addEventListener("click", async function(e){
    e.preventDefault()
    var payload = document.querySelector("#data-to-encrypt").value
    var password = document.querySelector("#encrypt-password").value
    ethAddressBook.storeBook(account, payload, password)
  })

  document.querySelector("#get-address-book").addEventListener("click", async function(){   
    let currentHash = document.getElementById("hash-for-address").innerHTML
    let password = document.querySelector("#decrypt-password").value
    console.log("awaiting response from Swarm...")
    let addressBook = await ethAddressBook.getBook(currentHash, password)
    console.log("Swarm responded.")
    document.querySelector("#stored-text-box").value = addressBook
  })

  // TODO
  // - After storing addressbook, show client waiting for transaction to confirm 
  // - Show client waiting for response from storage (Swarm / IPFS)

}

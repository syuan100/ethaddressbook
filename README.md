# ethaddressbook
Personal reference for commonly used addresses encrypted and stored on decentralized solutions (swarm, ipfs... soon) and accessed using web3.js

#### :warning: Warning: Work In Progress
This is largely a project born out of personal curiosity and may or may not be maintained. There are no guarantees that the data that you store on the blockchain will persist. Currently, the only contracts deployed are on the Ropsten and Rinkeby testnets. Please utilize this project with caution.

If you would like to contribute, please [click here](#contributing) to see instructions for setup.

## Static `<script>` Tag Usage
Include `ethaddressbook.js` or `ethaddressbook.min.js` in a tag at the top of your page. You will also need `web3.js` for this to work. [Get the file here](https://github.com/ethereum/web3.js/releases/tag/v0.20.6) or use the one included in the `example` folder.
<pre><script src="web3.min.js"></script>
<script src="ethaddressbook.min.js"></script></pre>

## Node.js usage
(WIP)

## The `addressBook` Data Structure
The `addressBook` JSON formatted object is the central data structre that this library uses. All address books must be formatted properly in order to be read coherently in and out of storage. An example:
<pre>{
  "addresses" : [{
    "label" : "This is a label",
    "address" : "0x1f3fAf73952F22444B2643A9280F9cA423B41681"
  },
  ...
  ]
}</pre>

All `addressBook` objects must follow this structure:
- Parent key named `addresses` with an `Array` as the value
- The `Array` must contain a series of objects with a `label` key-value pair and an `address` key-value pair
- The address must be a properly formatted Ethereum address

TODO:
- [ ] Max # of addresses
- [ ] Max label length

The `verifyAddressBook()` function below is used to verify any data trying to pass ass an address book.

## Public Methods
#### `ethAddressBook.setNetwork(networkId)`
- Instantiates the correct ethereum smart contract depending on the network specified.

> *Parameters:*
> - `networkId` `string` (Refer to this [link](https://github.com/ethereumbook/ethereumbook/issues/110) to see which id's refer to which networks)
> 
> *Returns:*
> - None

#### `ethAddressBook.getBook(swarmHash, password)`
- Retrieves the stored `addressBook` object from Swarm and optionally decrypts it if it is encrypted.

> *Parameters:*
> - `swarmHash` `string` String representation of a 64-byte hash referring to the stored `addressBook` object
> - `password` `string` (Optional) If the `addressBook` is encrypted
> 
> *Returns:*
> - `decryptAddressBook()` Returns function call
> - OR `addressBook` `JSON` Returns an Object

#### `ethAddressBook.storeBook(address, addressBook, password)`
- Encrypts and stores the `addressBook` object in Swarm. (`addressBook` must match parameters to pass the `verifyAddressBook` check).

> *Parameters:*
> - `address` `string` Valid Ethereum address to correlate the addresbook to
> - `addressBook` `string` Stringified JSON Object representing the addressbook that passes the `verifyAddressBook` check
> - `password` `string` (Optional) Included if addressbook is to be encrypted
> 
> *Returns:*
> - `storeHash()` Returns a function call

#### `ethAddressBook.getHash(address)`
- Retrieves the Swarm hash related to the ethereum address passed into the function

> *Parameters:*
> - `address` `string` Valid Ethereum address that you wish to find the corresponding Swarm hash to
> 
> *Returns:*
> - `Promise` `reject(error)` Returns an error statement
> - OR `Promise` `resolve(hashString)` Returns a string representation of the 64-byte Swarm file hash

## Private Methods (Reference only)

#### `storeHash(address, hashPartA, hashPartB)`
- Function that interacts with the smart contract code to actually map an ethereum address to the Swarm hash and store it in the blockchain

> *Parameters:*
> - `address` `string` Valid Ethereum address that you wish to map to a Swarm hash
> - `hashPartA` `string` 32-byte string referring to the first half of the 64-byte Swarm hash
> - `hashPartB` `string` 32-byte string referring to the second half of the 64-byte Swarm hash
> 
> *Returns:*
> - `Promise` `reject(error)` Returns an error statement
> - OR `Promise` `resolve(result)` Returns a success statement

#### `encryptAddressBook(addressBook, password)`
- Helper function to encrypt an `addressBook` object using the WebCrypto API

> *Parameters:*
> - `addressBook` `string` Stringified JSON Object representing the addressbook that passes the `verifyAddressBook` check
> - `password` `string` (Optional) Included if addressbook is to be encrypted
> 
> *Returns:*
> - `transformedAddressBook` JSON Object containing the result of the encryption: a WebCrypto initialization vector and the encrypted object

#### `decryptAddressBook(rawAddressBook, password)`
- Helper function to decrypt an encrypted `addressBook` object using the WebCrypto API

> *Parameters:*
> - `rawAddressBook` `string` Stringified JSON Object representing the encrypted `addressBook` object
> - `password` `string` The password that was used to encrypt the `addressBook` object
> 
> *Returns:*
> - `decodedAddressBook` JSON Object representing the addressbook that passes the `verifyAddressBook` check
> - OR `addressBook` If no password was specified assume the rawAddressBook is not an encrypted object, so return the addressBook reference within it


#### `verifyAddressBook(addressBook)`
- Verification function to ensure that an `addressBook` object is formatted properly for storage and use

> *Parameters:*
> - `addressBook` `string` Stringified JSON Object representing the addressbook to be verified.
> 
> *Returns:*
> - `decodedAddressBook` JSON Object representing the addressbook that passes the `verifyAddressBook` check
> - OR `addressBook` If no password was specified assume the rawAddressBook is not an encrypted object, so return the addressBook reference within it


## Contributing
Thank you for contribting to the project! Please make changes on your own fork of this repo and make a pull request when you wish to merge your changes.

### ethaddressbook.js
We're using [Rollup.js](https://rollupjs.org) to build our files and minify them. If you are making changes to the library please only make changes to files in the `src` folder.

First, make sure you have [node and npm installed](https://nodejs.org/en/download/). Then install the dependencies:
<pre>npm install</pre>

Then run a the rollup command:
<pre>npm run rollup</pre>

You should see a success message saying that files were created in the `dist` folder. If that's looking good then you're all setup!

#### TODOs:
- [ ] Implement unit testing and code coverage
- [ ] Implement ESLint
- [ ] Test if Commonjs output file (ethaddressbook-cjs.js) actually works as a node import

### Setting Up The Testing Environment
To test your changes, you can use the rudimentary demo setup in the `example` directory. To get started:
<pre>cd example</pre>

Install dependencies (may take a minute to install the [Next.js](https://nextjs.org/) server):
<pre>npm install</pre>

Spin up the local dev server:
<pre>npm run dev</pre>

Navigate to `localhost:3000` in your favorite browser (preferably [Brave](https://brave.com/) or Chrome) and you should see a very basic interface for storing text and setting a password.

### Setting up MetaMask
To get the crypto part of this working, we need a Brave/Chrome extension called MetaMask. If you don't have it yet [install it here](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn). Follow the instructions to setup a wallet.

Next we'll need to get some play money! For now, the supported testnets are Ropsten and Rinkeby. Here are a few "faucets" where you can get free test ether to develop with:
- https://faucet.metamask.io/
- https://faucet.ropsten.be/
- https://faucet.rinkeby.io/

I would recommend that you have at least 0.1 ETH in your MetaMask wallet to make sure transactions will go through. (As of today, the contract consumes very little gas)

If you are confused by anything that was just said, I would highly recommend you read a primer on Ethereum, smart contracts, and gas. [This is a pretty good one.](https://blockgeeks.com/guides/ethereum-gas-step-by-step-guide/)

### Testing Procedure (version 0)
1. Make sure you switch your wallet to one of the testnets (Ropsten in this case).
<img src="https://imgur.com/PPSfUk5.jpg" height="25%" width="25%" />

2. In the textbox labeled "Text to store" enter a JSON formatted object like so (optionally you can add as many entries into the `addresses` array as you wish as long as they contain the `"address"` key-pair):
<pre>{
  "addresses" : [{
    "label" : "This is a label",
    "address" : "0x1f3fAf73952F22444B2643A9280F9cA423B41681"
  }]
}</pre>

3. (Optional) Enter a password to encrypt your addressbook before you store it on swarm.

4. Click the "Encrypt Book" button to store your book. You should see a MetaMask confirmation window pop-up. Feel free to adjust the gas values to make the transaction go faster. FYI: Ropsten is generally has a faster time to confirmation.
<img src="https://i.imgur.com/N0W3m4n.png" height="50%" width="50%" />

5. After confirming the transaction, wait a few moments until your transaction is confirmed. Then you can check that the addressbook was stored properly. Refresh the page manually (TODO: Auto-refresh example after transaction confirmation) and make sure you see something under "Current Hash for Address"

6. Type in your password in the lower password field and click "Get Book" and you should see the text you stored from step 4. (It may take a while for Swarm to respond if you are using the public gateway).

#### TODOs:
- [ ] UI Theme
- [ ] Abstract JSON object and show UI for labels + addresses
- [ ] Setting max storage elements

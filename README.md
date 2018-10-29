# ethaddressbook
Personal reference for commonly used addresses encrypted and stored on decentralized solutions (swarm, ipfs... soon) and accessed using web3.js

#### :warning: Warning: Work In Progress
This is largely a project born out of personal curiosity and may or may not be maintained. There are no guarantees that the data that you store on the blockchain will persist. Currently, the only contracts deployed are on the Ropsten and Rinkeby testnets. Please utilize this project with caution.

If you would like to contribute, please [click here](#contributing) to see instructions for setup.

## Contributing
Thank you for contribting to the project! Please make changes on your own fork of this repo and make a pull request when you wish to merge your changes.

### lib.ethaddressbook.js
We're using [Rollup.js](https://rollupjs.org) to build our files and minify them. If you are making changes to the library please only make changes to files in the `src` folder.

First, make sure you have [node and npm installed](https://nodejs.org/en/download/). Then install the dependencies:
<pre>npm install</pre>

Then run a the rollup command:
<pre>npm run rollup</pre>

You should see a success message saying that files were created in the `dist` folder. If that's looking good then you're all setup!

#### TODOs:
- [ ] Implement unit testing and code coverage
- [ ] Implement ESLint
- [ ] Test if Commonjs output file (lib.ethaddressbook-cjs.js) actually works as a node import

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
    "address" : "0x557ea34F90467d41444A83677B5bc2AD84551f69"
  }]
}</pre>

3. (Optional) Enter a password to encrypt your addressbook before you store it on swarm.

// web3 API implementations:
// web3.js
// ethers.js

export const contract = function(api, abi, address, network){
  var contractInstance

  switch (api) {
    case "web3":
      contractInstance = web3.eth.contract(abi).at(address)
      break
    case "ethers":
      switch (network){
        case "3":
          contractInstance = new ethers.Contract(address, abi, ethers.getDefaultProvider('ropsten'))
          break
        case "4":
          contractInstance = new ethers.Contract(address, abi, ethers.getDefaultProvider('rinkeby'))
          break
        default:
          contractInstance = new ethers.Contract(address, abi, ethers.getDefaultProvider())
          break
      }
      break
  }

  return contractInstance
}
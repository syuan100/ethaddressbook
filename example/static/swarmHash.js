window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof web3 !== 'undefined') {

    // Use the browser's ethereum provider
    var provider = web3.currentProvider
    console.log("Connected to web3 provider.")
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
          break
        case "4":
          console.log('On the Rinkeby test network.')
          break
        case "42":
          console.log('On the Kovan test network.')
          break
        default:
          console.log('On an unknown network.')
      }
    })

    init()

  } else {
    console.log('No web3? You should consider trying MetaMask!')
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
    let addressBook = await ethAddressBook.getBook(currentHash, password)
    document.querySelector("#encrypted-text-box").value = addressBook
  })

}

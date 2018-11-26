window.addEventListener('load', function() {

  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
  if (typeof ethers !== 'undefined') {
    ethAddressBook.setNetwork("3")
  }

})

function init() {

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

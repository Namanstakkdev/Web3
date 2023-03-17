// Connection to the Blockchain
const url = "https://mainnet.infura.io/v3/4c4d861a45894f80a2eab84689d39215";
const Web3 = require("web3");

// // Connection a Particular account to fetch their Data.
const address = "0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8";
const web3 = new Web3(url);

// Console Log the Functions for Working with Data in Web3.js
// console.log(web3);

// Getting Balance using getBalance Function.
web3.eth.getBalance(address, (err, bal) => {
  var balance = web3.utils.fromWei(bal, "ether");
  console.log(balance);
});


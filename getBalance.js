// Connection to the Blockchain
const Tx = require("ethereumjs-tx").Transaction;
const Web3 = require("web3");

// // Connection a Particular account to fetch their Data.
const web3 = new Web3(
  "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
);

// Console Log the Functions for Working with Data in Web3.js
// console.log(web3);
const from = "0x2153ebdce9c187cF84C59e9035f46d44761e7287";
const to = "0xD3633dE55b5bd2a73d6064519EA4Da263763394B";

web3.eth.getBalance(from, (err, bal) => {
  var balance = web3.utils.fromWei(bal, "ether");
  console.log("First Account Balance");
  console.log(balance);
});

web3.eth.getBalance(to, (err, bal) => {
  var balance = web3.utils.fromWei(bal, "ether");
  console.log("Second Account Balance");
  console.log(balance);
});

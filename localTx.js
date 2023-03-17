// Creating Transaction on Ethereum using BlockChain

// install- npm i ethereumjs-tx

// const url = "https://mainnet.infura.io/v3/4c4d861a45894f80a2eab84689d39215";
// const Web3 = require("web3");

// WE ARE USING LOCAL SERVER(Ganache) for Simulation Transactions
// const url = "HTTP://127.0.0.1:7545";
// const web3 = new Web3(url);
// require("dotenv").config();

// const acct1 = web3.eth.accounts.create();
// console.log(acct1);
// const acct2 = web3.eth.accounts.create();
// console.log(acct2);

//   {
//     address: '0x61CA3ce7634CCCFc6765Fe7E1D1Dbf33aa9756f1',
//     privateKey: '0x9614f2438609ca32537da3ffc37c064d6fcb2aa520e8b8bfbd63c09f90d04173',
//     signTransaction: [Function: signTransaction],
//     sign: [Function: sign],
//     encrypt: [Function: encrypt]
//   }
//   {
//     address: '0xC1C46c7C973175E6D5278B345CB7E7C137CF8C93',
//     privateKey: '0xa64823d51547369d3f24b0484125e34cd947dd742c3d7db6146996784dcfc982',
//     signTransaction: [Function: signTransaction],
//     sign: [Function: sign],
//     encrypt: [Function: encrypt]
//   }

const account1 = "0x1EAA47AC58B73FF0c841456A0415aA4fabaD539e";
const account2 = "0x9AD90E609380ad2C1859237eE7187Db4aA9A4c39";

const privateKey1 = process.env.PRIVATE_KEY_1;
const privateKey2 = process.env.PRIVATE_KEY_2;

web3.eth.getBalance(account1, (err, bal) => {
  var balance = web3.utils.fromWei(bal, "ether");
  console.log("First Account Balance");
  console.log(balance);
});

web3.eth.getBalance(account2, (err, bal) => {
  var balance = web3.utils.fromWei(bal, "ether");
  console.log("Second Account Balance");
  console.log(balance);
});

console.log("Doing Transaction ...");

web3.eth.sendTransaction({
  from: account1,
  to: account2,
  value: web3.utils.toWei("1", "ether"),
});

console.log("Checking Balance Again ...");

web3.eth.getBalance(account1, (err, bal) => {
  var balance = web3.utils.fromWei(bal, "ether");
  console.log("First Account Balance");
  console.log(balance);
});

web3.eth.getBalance(account2, (err, bal) => {
  var balance = web3.utils.fromWei(bal, "ether");
  console.log("Second Account Balance");
  console.log(balance);
});

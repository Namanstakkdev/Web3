// Creating Transaction on Ethereum using BlockChain

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

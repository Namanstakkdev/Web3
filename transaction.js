const Tx = require("ethereumjs-tx").Transaction;
const Web3 = require("web3");
const web3 = new Web3(
  "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
);

const account1 = "0x7cFccD057b9A0606E258a8b99969bF68d13a45E1";
const account2 = "0xdac1BE02f9277a684b7C7080CD0a58696342881A";

const privateKey1 =
  "c8ec4a8049448d17ad6d8437b4f5920ffa8205e3e2d3e5befa8df58b3f46d8dc";

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

web3.eth.getTransactionCount(account1, (err, txCount) => {
  // Build the transaction
  const txObject = {
    nonce: txCount,
    to: account2,
    value: web3.utils.toWei("0.1", "ether"),
    gasLimit: 21000,
    // gasPrice: web3.utils.toWei("10", "gwei"),
    data: "0x",
  };
  

  // Sign the transaction
  const tx = new Tx(txObject);
  tx.sign(privateKey1);

  const serializedTx = tx.serialize();
  const raw = "0x" + serializedTx.toString("hex");

  // Broadcast the transaction
  web3.eth.sendSignedTransaction(raw, (err, txHash) => {
    console.log("txHash:", txHash);
  });
});



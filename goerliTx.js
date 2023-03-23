const Tx = require("ethereumjs-tx").Transaction;
const Web3 = require("web3");
const web3 = new Web3(
  "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
);

const from = "0x2153ebdce9c187cF84C59e9035f46d44761e7287";
const to = "0xD3633dE55b5bd2a73d6064519EA4Da263763394B";

const privatekey =
  "e4dcf5629ee44132634b718279911da18a9ca9b928d47c498b7934eaa48b4d81";

async function sendTransaction() {
  const value = web3.utils.toWei("0.1", "ether");
  const SignedTransaction = await web3.eth.accounts.signTransaction(
    {
      to,
      value,
      gas: 2000000,
    },
    privatekey
  );
  web3.eth
    .sendSignedTransaction(SignedTransaction.rawTransaction)
    .then((reciept) => {
      console.log(reciept);
      console.log("Contract Deployed At:", reciept.contractAddress);
    });
}

sendTransaction();

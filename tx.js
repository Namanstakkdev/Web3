var Tx = require("ethereumjs-tx").Transaction;
var privateKey = Buffer.from(
  "c8ec4a8049448d17ad6d8437b4f5920ffa8205e3e2d3e5befa8df58b3f46d8dc",
  "hex"
);
const Web3 = require("web3");

const web3 = new Web3(
  "https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"
);

// const txObject = {
//   nonce: txCount,
//   to: account2,
//   value: web3.utils.toWei("0.1", "ether"),
//   gasLimit: 21000,
//   gasPrice: web3.utils.toWei("10", "gwei"),
//   data: "0x",
// };

var rawTx = {
  nonce: "0x00",
  gasPrice: "250000000",
  gasLimit: "0x2710",
  to: "0xdac1BE02f9277a684b7C7080CD0a58696342881A",
  value: "0x00",
  data: "0x7f7465737432000000000000000000000000000000000000000000000000000000600057",
};

var tx = new Tx(rawTx, { chain: "goerli" });
tx.sign(privateKey);

var serializedTx = tx.serialize();

// console.log(serializedTx.toString('hex'));
// 0xf889808609184e72a00082271094000000000000000000000000000000000000000080a47f74657374320000000000000000000000000000000000000000000000000000006000571ca08a8bbf888cfa37bbf0bb965423625641fc956967b81d12e23709cead01446075a01ce999b56a8a88504be365442ea61239198e23d1fce7d00fcfc5cd3b44b7215f

web3.eth
  .sendSignedTransaction("0x" + serializedTx.toString("hex"))
  .on("receipt", console.log);

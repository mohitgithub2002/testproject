export const ContractAddress = "0x88cA02A16E98182FCeE19d550Dbd28355ae61779";
export const ABI = [
  {
    inputs: [{ internalType: "uint256", name: "_newNumber", type: "uint256" }],
    name: "changeNumber",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumber",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { INiftyswapFactory20 } from "../INiftyswapFactory20";

export class INiftyswapFactory20__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INiftyswapFactory20 {
    return new Contract(address, _abi, signerOrProvider) as INiftyswapFactory20;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "exchange",
        type: "address",
      },
    ],
    name: "NewExchange",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_instance",
        type: "uint256",
      },
    ],
    name: "createExchange",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_currency",
        type: "address",
      },
    ],
    name: "getPairExchanges",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_instance",
        type: "uint256",
      },
    ],
    name: "tokensToExchange",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

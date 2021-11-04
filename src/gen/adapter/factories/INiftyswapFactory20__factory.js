"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.INiftyswapFactory20__factory = void 0;
var ethers_1 = require("ethers");
var INiftyswapFactory20__factory = /** @class */ (function () {
    function INiftyswapFactory20__factory() {
    }
    INiftyswapFactory20__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return INiftyswapFactory20__factory;
}());
exports.INiftyswapFactory20__factory = INiftyswapFactory20__factory;
var _abi = [
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "address",
                name: "token",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "currency",
                type: "address"
            },
            {
                indexed: true,
                internalType: "uint256",
                name: "salt",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "address",
                name: "exchange",
                type: "address"
            },
        ],
        name: "NewExchange",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address"
            },
            {
                internalType: "address",
                name: "_currency",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_instance",
                type: "uint256"
            },
        ],
        name: "createExchange",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address"
            },
            {
                internalType: "address",
                name: "_currency",
                type: "address"
            },
        ],
        name: "getPairExchanges",
        outputs: [
            {
                internalType: "address[]",
                name: "",
                type: "address[]"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_token",
                type: "address"
            },
            {
                internalType: "address",
                name: "_currency",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_instance",
                type: "uint256"
            },
        ],
        name: "tokensToExchange",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
];

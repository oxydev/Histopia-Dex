/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface IERC20WrapperInterface extends ethers.utils.Interface {
  functions: {
    "balanceOf(address,uint256)": FunctionFragment;
    "balanceOfBatch(address[],uint256[])": FunctionFragment;
    "deposit(address,address,uint256)": FunctionFragment;
    "getIdAddress(uint256)": FunctionFragment;
    "getNTokens()": FunctionFragment;
    "getTokenID(address)": FunctionFragment;
    "isApprovedForAll(address,address)": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "safeTransferFrom(address,address,uint256,uint256,bytes)": FunctionFragment;
    "setApprovalForAll(address,bool)": FunctionFragment;
    "withdraw(address,address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOfBatch",
    values: [string[], BigNumberish[]]
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getIdAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getNTokens",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getTokenID", values: [string]): string;
  encodeFunctionData(
    functionFragment: "isApprovedForAll",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeBatchTransferFrom",
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "safeTransferFrom",
    values: [string, string, BigNumberish, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovalForAll",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [string, string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "balanceOfBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getIdAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNTokens", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getTokenID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isApprovedForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeBatchTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "safeTransferFrom",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovalForAll",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {
    "ApprovalForAll(address,address,bool)": EventFragment;
    "TransferBatch(address,address,address,uint256[],uint256[])": EventFragment;
    "TransferSingle(address,address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ApprovalForAll"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferBatch"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferSingle"): EventFragment;
}

export class IERC20Wrapper extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IERC20WrapperInterface;

  functions: {
    balanceOf(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceOf(address,uint256)"(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    "balanceOfBatch(address[],uint256[])"(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    deposit(
      _token: string,
      _recipient: string,
      _value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "deposit(address,address,uint256)"(
      _token: string,
      _recipient: string,
      _value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    getIdAddress(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { token: string }>;

    "getIdAddress(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { token: string }>;

    getNTokens(overrides?: CallOverrides): Promise<[void]>;

    "getNTokens()"(overrides?: CallOverrides): Promise<[void]>;

    getTokenID(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { tokenID: BigNumber }>;

    "getTokenID(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { tokenID: BigNumber }>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isOperator: boolean }>;

    "isApprovedForAll(address,address)"(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<[boolean] & { isOperator: boolean }>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setApprovalForAll(address,bool)"(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    withdraw(
      _token: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "withdraw(address,address,uint256)"(
      _token: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  balanceOf(
    _owner: string,
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "balanceOf(address,uint256)"(
    _owner: string,
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOfBatch(
    _owners: string[],
    _ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  "balanceOfBatch(address[],uint256[])"(
    _owners: string[],
    _ids: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  deposit(
    _token: string,
    _recipient: string,
    _value: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "deposit(address,address,uint256)"(
    _token: string,
    _recipient: string,
    _value: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  getIdAddress(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "getIdAddress(uint256)"(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getNTokens(overrides?: CallOverrides): Promise<void>;

  "getNTokens()"(overrides?: CallOverrides): Promise<void>;

  getTokenID(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getTokenID(address)"(
    _token: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  isApprovedForAll(
    _owner: string,
    _operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isApprovedForAll(address,address)"(
    _owner: string,
    _operator: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  onERC1155BatchReceived(
    _operator: string,
    _from: string,
    _ids: BigNumberish[],
    _values: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
    _operator: string,
    _from: string,
    _ids: BigNumberish[],
    _values: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  onERC1155Received(
    _operator: string,
    _from: string,
    _id: BigNumberish,
    _value: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "onERC1155Received(address,address,uint256,uint256,bytes)"(
    _operator: string,
    _from: string,
    _id: BigNumberish,
    _value: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  safeBatchTransferFrom(
    _from: string,
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
    _from: string,
    _to: string,
    _ids: BigNumberish[],
    _amounts: BigNumberish[],
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "safeTransferFrom(address,address,uint256,uint256,bytes)"(
    _from: string,
    _to: string,
    _id: BigNumberish,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    _operator: string,
    _approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setApprovalForAll(address,bool)"(
    _operator: string,
    _approved: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  withdraw(
    _token: string,
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "withdraw(address,address,uint256)"(
    _token: string,
    _to: string,
    _value: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceOf(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address,uint256)"(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "balanceOfBatch(address[],uint256[])"(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    deposit(
      _token: string,
      _recipient: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "deposit(address,address,uint256)"(
      _token: string,
      _recipient: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    getIdAddress(_id: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "getIdAddress(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getNTokens(overrides?: CallOverrides): Promise<void>;

    "getNTokens()"(overrides?: CallOverrides): Promise<void>;

    getTokenID(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getTokenID(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isApprovedForAll(address,address)"(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "setApprovalForAll(address,bool)"(
      _operator: string,
      _approved: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      _token: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "withdraw(address,address,uint256)"(
      _token: string,
      _to: string,
      _value: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    ApprovalForAll(
      _owner: string | null,
      _operator: string | null,
      _approved: null
    ): EventFilter;

    TransferBatch(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _ids: null,
      _amounts: null
    ): EventFilter;

    TransferSingle(
      _operator: string | null,
      _from: string | null,
      _to: string | null,
      _id: null,
      _amount: null
    ): EventFilter;
  };

  estimateGas: {
    balanceOf(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOf(address,uint256)"(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceOfBatch(address[],uint256[])"(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    deposit(
      _token: string,
      _recipient: string,
      _value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "deposit(address,address,uint256)"(
      _token: string,
      _recipient: string,
      _value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    getIdAddress(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getIdAddress(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getNTokens(overrides?: CallOverrides): Promise<BigNumber>;

    "getNTokens()"(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenID(_token: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getTokenID(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isApprovedForAll(address,address)"(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setApprovalForAll(address,bool)"(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    withdraw(
      _token: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "withdraw(address,address,uint256)"(
      _token: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOf(address,uint256)"(
      _owner: string,
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOfBatch(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceOfBatch(address[],uint256[])"(
      _owners: string[],
      _ids: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    deposit(
      _token: string,
      _recipient: string,
      _value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "deposit(address,address,uint256)"(
      _token: string,
      _recipient: string,
      _value: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    getIdAddress(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getIdAddress(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNTokens(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getNTokens()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenID(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTokenID(address)"(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isApprovedForAll(address,address)"(
      _owner: string,
      _operator: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"(
      _operator: string,
      _from: string,
      _ids: BigNumberish[],
      _values: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "onERC1155Received(address,address,uint256,uint256,bytes)"(
      _operator: string,
      _from: string,
      _id: BigNumberish,
      _value: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    safeBatchTransferFrom(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)"(
      _from: string,
      _to: string,
      _ids: BigNumberish[],
      _amounts: BigNumberish[],
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "safeTransferFrom(address,address,uint256,uint256,bytes)"(
      _from: string,
      _to: string,
      _id: BigNumberish,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setApprovalForAll(address,bool)"(
      _operator: string,
      _approved: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    withdraw(
      _token: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "withdraw(address,address,uint256)"(
      _token: string,
      _to: string,
      _value: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
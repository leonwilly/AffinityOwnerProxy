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
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface OwnerProxyInterface extends ethers.utils.Interface {
  functions: {
    "OP_EXTERNAL_PERMISSION()": FunctionFragment;
    "OP_OWNER_PERMISSION()": FunctionFragment;
    "WETH()": FunctionFragment;
    "getAmountsOut(uint256,address[])": FunctionFragment;
    "getOwnerProxyPermissions(address)": FunctionFragment;
    "getOwnerProxyTokenAddress()": FunctionFragment;
    "getOwnerProxyUniswapV2Router02Address()": FunctionFragment;
    "modifyOwnerProxyPermission(address,uint256,uint256)": FunctionFragment;
    "setOwnerProxyPermission(address,uint256)": FunctionFragment;
    "setOwnerProxyTokenAddress(address)": FunctionFragment;
    "setOwnerProxyUniswapV2Router02(address)": FunctionFragment;
    "swapExactETHForTokens(uint256,address[],address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "OP_EXTERNAL_PERMISSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OP_OWNER_PERMISSION",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getAmountsOut",
    values: [BigNumberish, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnerProxyPermissions",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnerProxyTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnerProxyUniswapV2Router02Address",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "modifyOwnerProxyPermission",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwnerProxyPermission",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwnerProxyTokenAddress",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwnerProxyUniswapV2Router02",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "swapExactETHForTokens",
    values: [BigNumberish, string[], string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "OP_EXTERNAL_PERMISSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "OP_OWNER_PERMISSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getAmountsOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerProxyPermissions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerProxyTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerProxyUniswapV2Router02Address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyOwnerProxyPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOwnerProxyPermission",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOwnerProxyTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setOwnerProxyUniswapV2Router02",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapExactETHForTokens",
    data: BytesLike
  ): Result;

  events: {};
}

export class OwnerProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: OwnerProxyInterface;

  functions: {
    OP_EXTERNAL_PERMISSION(overrides?: CallOverrides): Promise<[BigNumber]>;

    OP_OWNER_PERMISSION(overrides?: CallOverrides): Promise<[BigNumber]>;

    WETH(overrides?: CallOverrides): Promise<[string]>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { amounts: BigNumber[] }>;

    getOwnerProxyPermissions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getOwnerProxyTokenAddress(overrides?: CallOverrides): Promise<[string]>;

    getOwnerProxyUniswapV2Router02Address(
      overrides?: CallOverrides
    ): Promise<[string]>;

    modifyOwnerProxyPermission(
      account: string,
      permissionsToBeAdded: BigNumberish,
      permissionsToBeRemoved: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwnerProxyPermission(
      account: string,
      permission: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwnerProxyTokenAddress(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setOwnerProxyUniswapV2Router02(
      uniswapV2Router02Address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapExactETHForTokens(
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  OP_EXTERNAL_PERMISSION(overrides?: CallOverrides): Promise<BigNumber>;

  OP_OWNER_PERMISSION(overrides?: CallOverrides): Promise<BigNumber>;

  WETH(overrides?: CallOverrides): Promise<string>;

  getAmountsOut(
    amountIn: BigNumberish,
    path: string[],
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  getOwnerProxyPermissions(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getOwnerProxyTokenAddress(overrides?: CallOverrides): Promise<string>;

  getOwnerProxyUniswapV2Router02Address(
    overrides?: CallOverrides
  ): Promise<string>;

  modifyOwnerProxyPermission(
    account: string,
    permissionsToBeAdded: BigNumberish,
    permissionsToBeRemoved: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwnerProxyPermission(
    account: string,
    permission: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwnerProxyTokenAddress(
    tokenAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setOwnerProxyUniswapV2Router02(
    uniswapV2Router02Address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapExactETHForTokens(
    amountOutMin: BigNumberish,
    path: string[],
    to: string,
    deadline: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    OP_EXTERNAL_PERMISSION(overrides?: CallOverrides): Promise<BigNumber>;

    OP_OWNER_PERMISSION(overrides?: CallOverrides): Promise<BigNumber>;

    WETH(overrides?: CallOverrides): Promise<string>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getOwnerProxyPermissions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwnerProxyTokenAddress(overrides?: CallOverrides): Promise<string>;

    getOwnerProxyUniswapV2Router02Address(
      overrides?: CallOverrides
    ): Promise<string>;

    modifyOwnerProxyPermission(
      account: string,
      permissionsToBeAdded: BigNumberish,
      permissionsToBeRemoved: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwnerProxyPermission(
      account: string,
      permission: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwnerProxyTokenAddress(
      tokenAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setOwnerProxyUniswapV2Router02(
      uniswapV2Router02Address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    swapExactETHForTokens(
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    OP_EXTERNAL_PERMISSION(overrides?: CallOverrides): Promise<BigNumber>;

    OP_OWNER_PERMISSION(overrides?: CallOverrides): Promise<BigNumber>;

    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwnerProxyPermissions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwnerProxyTokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getOwnerProxyUniswapV2Router02Address(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    modifyOwnerProxyPermission(
      account: string,
      permissionsToBeAdded: BigNumberish,
      permissionsToBeRemoved: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwnerProxyPermission(
      account: string,
      permission: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwnerProxyTokenAddress(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setOwnerProxyUniswapV2Router02(
      uniswapV2Router02Address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapExactETHForTokens(
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    OP_EXTERNAL_PERMISSION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    OP_OWNER_PERMISSION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getAmountsOut(
      amountIn: BigNumberish,
      path: string[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwnerProxyPermissions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwnerProxyTokenAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwnerProxyUniswapV2Router02Address(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    modifyOwnerProxyPermission(
      account: string,
      permissionsToBeAdded: BigNumberish,
      permissionsToBeRemoved: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwnerProxyPermission(
      account: string,
      permission: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwnerProxyTokenAddress(
      tokenAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setOwnerProxyUniswapV2Router02(
      uniswapV2Router02Address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapExactETHForTokens(
      amountOutMin: BigNumberish,
      path: string[],
      to: string,
      deadline: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}

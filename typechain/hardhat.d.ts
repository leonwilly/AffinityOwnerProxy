/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "Ownable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ownable__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IUniswapV2Factory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Factory__factory>;
    getContractFactory(
      name: "IUniswapV2Pair",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Pair__factory>;
    getContractFactory(
      name: "IUniswapV2Router01",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router01__factory>;
    getContractFactory(
      name: "IUniswapV2Router02",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IUniswapV2Router02__factory>;
    getContractFactory(
      name: "IAffinity",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAffinity__factory>;
    getContractFactory(
      name: "AffinityDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.AffinityDistributor__factory>;
    getContractFactory(
      name: "Auth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Auth__factory>;
    getContractFactory(
      name: "IAffinityDistributor",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAffinityDistributor__factory>;
    getContractFactory(
      name: "SafeAffinity",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeAffinity__factory>;
    getContractFactory(
      name: "SafeMaster",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeMaster__factory>;
    getContractFactory(
      name: "ShillXProgram",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ShillXProgram__factory>;
    getContractFactory(
      name: "OwnerForwarder",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.OwnerForwarder__factory>;

    getContractAt(
      name: "Ownable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ownable>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IUniswapV2Factory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Factory>;
    getContractAt(
      name: "IUniswapV2Pair",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Pair>;
    getContractAt(
      name: "IUniswapV2Router01",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router01>;
    getContractAt(
      name: "IUniswapV2Router02",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IUniswapV2Router02>;
    getContractAt(
      name: "IAffinity",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAffinity>;
    getContractAt(
      name: "AffinityDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.AffinityDistributor>;
    getContractAt(
      name: "Auth",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Auth>;
    getContractAt(
      name: "IAffinityDistributor",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAffinityDistributor>;
    getContractAt(
      name: "SafeAffinity",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeAffinity>;
    getContractAt(
      name: "SafeMaster",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeMaster>;
    getContractAt(
      name: "ShillXProgram",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ShillXProgram>;
    getContractAt(
      name: "OwnerForwarder",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.OwnerForwarder>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}

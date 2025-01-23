import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import dotenv from "dotenv";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xf2554f0416dcd829a7cb4512c96fc325e98831ac33c9c12d00f9a0a225fcb01a";

const config: HardhatUserConfig = {
  networks: {
    "80002": {
      url: "https://rpc-amoy.polygon.technology",
      accounts: [PRIVATE_KEY],
      chainId: 80002,
    }
  },
  solidity: "0.8.24",
  // With AnyFlow no configuration is needed, just click 'deploy'!
  // learn more here: https://docs.anyflow.pro/docs/how_it_works/
};

export default config;

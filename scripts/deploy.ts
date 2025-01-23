import hre from "hardhat";
import { PK1 } from "../hardhat.anyflow.config";

export async function main() {
    console.log('Deploying SimpleOwnable...');

    const ownerAddress = "0xE7796aE4C33669447d12f01bD09cB2a6f0bfdFfC";
    const contract = await hre.viem.deployContract("SimpleOwnable", [ownerAddress]);

    const hash = await contract.write.transferOwnership(["0x0C86714619Ee1Ba9C4164cAAC7988d02538A6264"], {
        account: "0xE7796aE4C33669447d12f01bD09cB2a6f0bfdFfC",
    });

    console.log(`Transaction hash: ${hash}`);
    console.log(`Contract SimpleOwnable deployed to: ${contract.address}`);
}

main()
    .then(() => process.exit(0));

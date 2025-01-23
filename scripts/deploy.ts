import hre from "hardhat";
import { PK1 } from "../hardhat.anyflow.config";

export async function main() {
    console.log('Deploying SimpleOwnable...');

    const contract = await hre.viem.deployContract("SimpleOwnable");

    await contract.write.transferOwnership(["0x0C86714619Ee1Ba9C4164cAAC7988d02538A6264"]);

    console.log(`Contract SimpleOwnable deployed to: ${contract.address}`);
}

main()
    .then(() => process.exit(0));

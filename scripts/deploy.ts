import hre from "hardhat";

export async function main() {
    console.log('Deploying SimpleOwnable...');

    const ownerAddress = "0xE7796aE4C33669447d12f01bD09cB2a6f0bfdFfC";
    const contract = await hre.viem.deployContract("SimpleOwnable", [ownerAddress]);

    const hash = await contract.write.transferOwnership(["0x0C86714619Ee1Ba9C4164cAAC7988d02538A6264"], {
        account: "0xf2554f0416dcd829a7cb4512c96fc325e98831ac33c9c12d00f9a0a225fcb01a",
    });

    console.log(`Transaction hash: ${hash}`);
    console.log(`Contract SimpleOwnable deployed to: ${contract.address}`);
}

main()
    .then(() => process.exit(0));

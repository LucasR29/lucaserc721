import hre from "hardhat";
import { privateKeyToAccount } from "viem/accounts";
import { createWalletClient, http } from 'viem';
import { hardhat, polygonAmoy } from 'viem/chains';

export async function main() {
    console.log('Deploying SimpleOwnable...');

    const PRIVATE_KEY = "0xf2554f0416dcd829a7cb4512c96fc325e98831ac33c9c12d00f9a0a225fcb01a";
    const account = privateKeyToAccount(PRIVATE_KEY);
    
    const walletClient = createWalletClient({
        account,
        chain: polygonAmoy,
        transport: http("https://rpc-amoy.polygon.technology")
    });

    const contract = await hre.viem.deployContract("SimpleOwnable", ["0xE7796aE4C33669447d12f01bD09cB2a6f0bfdFfC"]);

    console.log(`Contract SimpleOwnable deployed to: ${contract.address}`);

    const hash = await walletClient.writeContract({
        address: contract.address,
        abi: contract.abi,
        functionName: 'setMessage',
        args: ['Hello World']
    });

    console.log(`Transaction hash: ${hash}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

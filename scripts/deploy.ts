import hre from "hardhat";
import { ethers } from "ethers";

export async function main() {
    console.log('Deploying SimpleOwnable...');

    const PRIVATE_KEY = "0xf2554f0416dcd829a7cb4512c96fc325e98831ac33c9c12d00f9a0a225fcb01a";
    
    const provider = new ethers.JsonRpcProvider("https://rpc-amoy.polygon.technology");
    const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

    const SimpleOwnable = await hre.artifacts.readArtifact("SimpleOwnable");
    const factory = new ethers.ContractFactory(
        SimpleOwnable.abi,
        SimpleOwnable.bytecode,
        wallet
    );

    const contract = await factory.deploy("0xE7796aE4C33669447d12f01bD09cB2a6f0bfdFfC") as any;
    const deployTxHash = contract.deploymentTransaction()?.hash;
    console.log(`Deploy transaction hash: ${deployTxHash}`);

    await contract.waitForDeployment();
    const contractAddress = await contract.getAddress();

    const t = "blebas"; 
    const tx = await contract.setMessage(t);
    console.log(t);
    const txHash = tx.hash;
    console.log(`Transaction hash: ${txHash}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    }); 

// import hre from "hardhat";
// import { privateKeyToAccount } from "viem/accounts";
// import { createWalletClient, http, createPublicClient } from 'viem';
// import { polygonAmoy } from 'viem/chains';

// export async function main() {
//     console.log('Deploying SimpleOwnable...');

//     const PRIVATE_KEY = "0xf2554f0416dcd829a7cb4512c96fc325e98831ac33c9c12d00f9a0a225fcb01a";
//     const account = privateKeyToAccount(PRIVATE_KEY);
    
//     console.log('Deploying SimpleOwnable...');

//     const walletClient = createWalletClient({
//         account,
//         chain: polygonAmoy,
//         transport: http("https://rpc-amoy.polygon.technology")
//     });

//     const publicClient = createPublicClient({
//         chain: polygonAmoy,
//         transport: http("https://rpc-amoy.polygon.technology")
//     });

//     const bytecode = await hre.artifacts.readArtifact("SimpleOwnable")
//         .then(artifact => artifact.bytecode);
//     const abi = await hre.artifacts.readArtifact("SimpleOwnable")
//         .then(artifact => artifact.abi);

//     const hash = await walletClient.deployContract({
//         abi,
//         bytecode,
//         args: ["0xE7796aE4C33669447d12f01bD09cB2a6f0bfdFfC"]
//     });

//     console.log(`Deploy transaction hash: ${hash}`);
    
//     const receipt = await publicClient.waitForTransactionReceipt({ hash });
//     const contractAddress = receipt.contractAddress;

//     await walletClient.writeContract({
//         address: contractAddress as `0x${string}`,
//         abi,
//         functionName: 'setMessage',
//         args: ['Hello World']
//     });

//     console.log(`Transaction hash: ${hash}`);
// }

// main()
//     .then(() => process.exit(0))
//     .catch((error) => {
//         console.error(error);
//         process.exit(1);
//     });

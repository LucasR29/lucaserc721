import hre from "hardhat";
import { privateKeyToAccount } from "viem/accounts";
import { createWalletClient, http } from 'viem';
import { hardhat } from 'viem/chains';

export async function main() {
    console.log('Deploying SimpleOwnable...');

    // Criar wallet client
    const walletClient = createWalletClient({
        chain: hardhat,
        transport: http()
    });

    const ownerAddress = "0xE7796aE4C33669447d12f01bD09cB2a6f0bfdFfC";
    const contract = await hre.viem.deployContract("SimpleOwnable", ["0xE7796aE4C33669447d12f01bD09cB2a6f0bfdFfC"]);

    console.log(`Contract SimpleOwnable deployed to: ${contract.address}`);

    const message = await contract.write.setMessage(
        ["Hello World"],
        {
            account: privateKeyToAccount("0xf2554f0416dcd829a7cb4512c96fc325e98831ac33c9c12d00f9a0a225fcb01a"),
        }
    );
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });

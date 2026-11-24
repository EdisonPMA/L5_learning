
import { network } from "hardhat";

async function main() {

    // Create an Ethers connection
    const { ethers } = await network.create();

    // 1. Deploy the bank contract
    const bank = await ethers.deployContract("bank");

    await bank.waitForDeployment();

    console.log("Bank contract deployed!");
    console.log("Contract address:", await bank.getAddress());

    // 2. Test deposite()
    console.log("\n--- TESTING DEPOSIT ---");

    await (await bank.deposite(100)).wait();

    let balance = await bank.balance();

    console.log("Deposited: 100");
    console.log("Current balance:", balance.toString());

    // 3. Test add()
    console.log("\n--- TESTING ADDITION ---");

    await (await bank.add(20, 30)).wait();

    let sum = await bank.sum();

    console.log("20 + 30 =", sum.toString());

    // 4. Test subst()
    console.log("\n--- TESTING SUBTRACTION ---");

    await (await bank.subst(50, 20)).wait();

    let sub = await bank.sub();

    console.log("50 - 20 =", sub.toString());

    console.log("\nAll tests completed!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

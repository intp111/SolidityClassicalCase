// const { ethers, upgrades } = require("hardhat");

// async function main() {
//     const CrowdfundingPlatform = await ethers.getContractFactory("CrowdfundingPlatform");
//     const platform = await upgrades.deployProxy(CrowdfundingPlatform, [], { initializer: "initialize" });

//     await platform.waitForDeployment();
//     console.log("CrowdfundingPlatform deployed to:", platform.target);

//     // await platform.deployed();
//     // console.log("CrowdfundingPlatform deployed to:", platform.address);
// }

// main();

const { ethers, upgrades } = require("hardhat");

async function main() {
    const CrowdfundingPlatform = await ethers.getContractFactory("CrowdfundingPlatform");
    const owner = (await ethers.getSigners())[0].address; // 使用第一个 signer 作为合约所有者
    const platform = await upgrades.deployProxy(CrowdfundingPlatform, [owner], { initializer: "initialize" });

    await platform.waitForDeployment();
    console.log("CrowdfundingPlatform deployed to:", platform.target);
}

main();
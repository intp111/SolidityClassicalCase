const { ethers, upgrades } = require("hardhat");

async function main() {
    const CrowdfundingPlatform = await ethers.getContractFactory("CrowdfundingPlatform");
    const platform = await upgrades.deployProxy(CrowdfundingPlatform, [], { initializer: "initialize" });

    // await platform.waitForDeployment();
    // console.log("CrowdfundingPlatform deployed to:", platform.target);

    await platform.deployed();
    console.log("CrowdfundingPlatform deployed to:", platform.address);
}

main();
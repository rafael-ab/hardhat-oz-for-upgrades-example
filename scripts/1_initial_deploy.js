async function main() {
    const contract = await ethers.getContractFactory("Contract");
    console.log("Deploying Contract...");
    const instance = await upgrades.deployProxy(contract);
    console.log("Contract deployed to:", instance.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
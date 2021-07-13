async function main() {
  const proxyAddress = "0x000...";

  try {
    const Contract = await ethers.getContractFactory("Contract");
    console.log("Preparing upgrade...");
    const ContractAddress = await upgrades.prepareUpgrade(
      proxyAddress,
      Contract
    );
    console.log("Contract upgraded to: ", ContractAddress);
  } catch (err) {
    console.log("err :>> ", err);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

async function main() {
  const proxyAddress = "0x000...";

  try {
    const contract = await ethers.getContractFactory("ContractV2");
    const upgraded = await upgrades.upgradeProxy(proxyAddress, contract);
    console.log("Contract Upgraded:", upgraded);
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

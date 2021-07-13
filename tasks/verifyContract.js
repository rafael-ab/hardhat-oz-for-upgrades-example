task("verify-contract", "Task to verify a contract on Etherscan")
  .addParam("address", "Contract address to verify")
  .setAction(async (args) => {
    await hre.run("verify:verify", {
      address: args.address,
    });
  });

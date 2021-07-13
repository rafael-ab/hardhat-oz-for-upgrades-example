const { assert, web3 } = require("hardhat");
const ContractV2 = artifacts.require("ContractV2");

contract("ContractV2", ([owner, ...accounts]) => {
  let contract;

  beforeEach(async () => {
    contract = await ContractV2.new();
    await contract.initialize();
  });

  it("deploys a contract", () => {
    assert.ok(contract.address);
  });

  it("initializes a contract", async () => {
    assert.equal("Test contract upgradeables", await contract.name());
  });

  it("sets a contract name", async () => {
      await contract.setName("New name");
    assert.equal("New name", await contract.name());
  });
});
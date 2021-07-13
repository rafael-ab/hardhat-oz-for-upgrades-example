const { assert, upgrades, ethers } = require("hardhat");

contract("ContractV2 (Proxy)", ([admin]) => {
  let instance, upgraded, adminSigner, proxyAdmin;;

  before(async () => {

    adminSigner = await ethers.getSigner(admin);
    const Contract = await ethers.getContractFactory("Contract", adminSigner);
    const ContractV2 = await ethers.getContractFactory("ContractV2", adminSigner);

    instance = await upgrades.deployProxy(Contract, []);
    upgraded = await upgrades.upgradeProxy(instance.address, ContractV2);
    proxyAdmin = await upgrades.admin.getInstance();
  });

  it("upgraded contract should be initialized", async () => {
    assert.equal("Test contract upgradeables", await upgraded.name());
  });

  it("proxy admin should be the admin", async () => {
    assert.equal(admin, await proxyAdmin.owner());
  });
});
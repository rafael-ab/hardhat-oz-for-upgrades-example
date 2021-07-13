const { assert, upgrades, ethers } = require("hardhat");

contract("Contract (Proxy)", ([admin]) => {
  let contract, adminSigner, proxyAdmin;

  before(async () => {
    adminSigner = await ethers.getSigner(admin);

    contract = await ethers.getContractFactory("Contract", adminSigner);
    instance = await upgrades.deployProxy(contract, []);

    proxyAdmin = await upgrades.admin.getInstance();
  });

  it("contract should initialize", async () => {
    assert.equal("Test contract upgradeables", await instance.name());
  });

  it("proxy admin should be the admin signer", async () => {
    assert.equal(admin, await proxyAdmin.owner());
  });
});

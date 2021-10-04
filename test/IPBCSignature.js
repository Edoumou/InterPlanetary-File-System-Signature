const IPBCSignature = artifacts.require("./IPBCSignature.sol");

contract("IPBCSignature", accounts => {
  let contract;

  beforeEach(async () => {
    contract = await IPBCSignature.deployed();
  });

  it("should check the contract ha an address", async () => {
    let addr = contract.address;
    assert.notEqual(addr, "", "Contract address not found");
  });
});

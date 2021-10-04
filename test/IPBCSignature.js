const IPBCSignature = artifacts.require("./IPBCSignature.sol");

contract("IPBCSignature", accounts => {
  it("...should store the value 89.", async () => {
    const ipbc = await IPBCSignature.deployed();

    // Set value of 89
    await ipbc.set(89, { from: accounts[0] });

    // Get stored value
    const storedData = await ipbc.get.call();

    assert.equal(storedData, 89, "The value 89 was not stored.");
  });
});

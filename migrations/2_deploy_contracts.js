var IPBCSignature = artifacts.require("./IPBCSignature.sol");

module.exports = function (deployer) {
  deployer.deploy(IPBCSignature);
};

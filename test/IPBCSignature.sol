pragma solidity 0.8.9;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/IPBCSignature.sol";

contract IPBCSignature {
    function testItStoresAValue() public {
        IPBCSignature ipbc = IPBCSignature(DeployedAddresses.IPBCSignature());

        ipbc.set(89);

        uint256 expected = 89;

        Assert.equal(ipbc.get(), expected, "It should store the value 89.");
    }
}

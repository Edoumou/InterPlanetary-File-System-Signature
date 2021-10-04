import IPBCSignature from "./contracts/IPBCSignature.json";

const IPBCSignatureContract = async (web3) => {
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = IPBCSignature.networks[networkId];

    console.log("Contract address:", deployedNetwork.address);

    return new web3.eth.Contract(
        IPBCSignature.abi,
        deployedNetwork && deployedNetwork.address
    );
}

export default IPBCSignatureContract;
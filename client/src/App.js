import React, { Component } from "react";
import web3Connection from "./web3Connection";
import IPBCSignatureContract from "./IPBCSignatureContract";

import "./App.css";

class App extends Component {
  state = {
    storageValue: 0,
    web3: null,
    account: null,
    IPBCcontract: null
  };

  componentDidMount = async () => {
    try {
      //================= connect to web3 =================
      let web3 = await web3Connection();
      //===================================================

      //=================== Get contracts =================
      let IPBCcontract = await IPBCSignatureContract(web3);
      //===================================================

      //============== get the user account ===============
      const accounts = await web3.eth.getAccounts();
      let account = accounts[0];
      //===================================================

      //================= update states ===================
      this.setState(
        {
          web3,
          account,
          IPBCcontract
        },
        this.runExample
      );
      //===================================================
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { account, IPBCcontract } = this.state;
    console.log("Contract:", IPBCcontract);

    // Stores a given value, 5 by default.
    await IPBCcontract.methods.set(5).send({ from: account });

    // Get the value from the contract to prove it worked.
    const response = await IPBCcontract.methods.get().call();

    // Update state with the result.
    this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <p>Your Truffle Box is installed and ready.</p>
        <h2>Smart Contract Example</h2>
        <p>
          If your contracts compiled and migrated successfully, below will show
          a stored value of 5 (by default).
        </p>
        <p>
          Try changing the value stored on <strong>line 42</strong> of App.js.
        </p>
        <div>The stored value is: {this.state.storageValue}</div>
      </div>
    );
  }
}

export default App;

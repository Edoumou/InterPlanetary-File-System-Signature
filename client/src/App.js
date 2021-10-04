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
        `Failed to load web3, accounts, or contract..`
      );
      console.error(error);
    }
  };

  runExample = async () => {
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Let's Go!</h1>
      </div>
    );
  }
}

export default App;

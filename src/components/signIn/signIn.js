import React from 'react';
import './signIn.scss';
import walletImage from '../common/assets/images/wallet1.svg';
import ConnectWallet from '../connectWallet/connectWallet';

class signIn extends React.Component {
  render() {
    return (
      <div className="sign-in">
        <div className="frame">
          <img src={walletImage} />
          <h1 id="head"> Get Started</h1>
          <p id="para">
            First off you’ll need a safe place to keep all your LAND. <br />
            You can use the <span className="tagg">MetaMask</span> extension or
            a hardware wallet <br />
            like <span className="tagg">Ledger Nano S.</span>{' '}
          </p>
          <button id="btn" className="button-primary">
            Connect
          </button>
        </div>
        {/* <ConnectWallet /> */}
      </div>
    );
  }
}

export default signIn;

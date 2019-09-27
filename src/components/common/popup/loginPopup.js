import React from 'react';
import './loginPopup.scss';
import wallet from '../assets/images/wallet.svg';
import metamask from '../assets/images/metamask.svg';
import walletConnect from '../assets/images/walcon.svg';
import portis from '../assets/images/portis.svg';

class LoginPopup extends React.Component {
  render() {
    return (
      <div className="connect-wallet">
        <div className="circle-icon">
          <div className="icon">
            <img src={wallet}></img>
          </div>
        </div>
        <div className="wallet-heading">
          <h1>Connect your Wallet</h1>
          <p>
            First of all, you need a safe place to keep your land. Choose to{' '}
            <br></br> connect wallet by following connection
          </p>
        </div>
        <span className="connect-with">CONNECT WITH</span>
        <div className="wallet-btn-parrent">
          <div className="wallet-btn">
            <div className="btn-login metamask">
              <a href="#" onClick={this.handleLogin}>
                <img src={metamask}></img>
                <p>Meta Mask</p>
              </a>
            </div>
            <div className="btn-login connectWallet">
              <a href="#">
                <img src={walletConnect}></img>
                <p>Connect Wallet</p>
              </a>
            </div>
            <div className="btn-login portis">
              <a href="#">
                <img className="portis-svg" src={portis}></img>
                <p>Portis</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPopup;

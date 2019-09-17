import React from 'react'
import './connectWallet.scss'
import wallet from "../common/assets/fonts/wallet.svg"

class ConnectWallet extends React.Component {
  render () {
    return (
      <div>
        <div className="connect-wallet">
          <div className="wallet-edge">
            <img src={wallet}></img>
          </div>
          <div className="wallet-text">
            <h1>Connect your Wallet</h1>
            <p>First of all, you need a safe placero keep your land. Choose to <br></br> connect wallet by following connection</p>
          </div>
          <span>CONNECT WITH</span>
          <div>

          </div>
        </div>
      </div>
    )
  }
}
export default ConnectWallet

import React from 'react'
import "./connectWallet.scss"
import wallet from "../assets/images/wallet.svg"
import walletConnect from "../assets/images/walcon.svg"
import metamask from "../assets/images/metamask.svg"
import portis from "../assets/images/portis.svg"



class ConnectWallet extends React.Component {
  render () {
    return (
      <div className="connect">
        <div className="connect-wallet">
          <div className="wallet-edge">
            <div className="edge"><img src={wallet}></img>
            </div>
          </div>
          <div className="wallet-text">
            <h1>Connect your Wallet</h1>
            <p>First of all, you need a safe placero keep your land. Choose to <br></br> connect wallet by following connection</p>
          </div>
          <div className="connect-with">
            <p className="connect-with-p">CONNECT-WITH</p>
          </div>
          <div className="wallet-btn-parrent">
          <div className="wallet-btn">
            <div>
              <a href ="#"><img src={metamask}></img><p className="p">Meta Mask</p></a>
            </div>
            <div>
              <a href ="#"><img src={walletConnect}></img><p className="p">Connect Wallet</p></a>
            </div>
            <div>
              <a href ="#"><img className="portis-svg" src={portis}></img><p className='p'>Portis</p></a>
            </div>
          </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ConnectWallet

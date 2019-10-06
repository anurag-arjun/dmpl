import React from 'react';
import './Wallet.scss';

import Popup from '../common/popup/Popup.js';
import WalletWhy from '../common/popup/whyWallet.js';
import AddFund from '../common/popup/addFund.js';

import wallet from '../common/assets/images/square.png';
import blue_dark from '../common/assets/images/blue_dark.svg';
import balance from '../common/assets/images/balance-icon.svg';
import icons from '../../services/icon-service';
const BackButton = icons['fa-angle-left'];

class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whymatic: false,
      addfund: false,
      caution: false,
      closePopup: false,
    };
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  closePopup = () => {
    this.setState({ ...this.state, closePopup: false });
  };

  siginHandler = () => {
    this.setState({ ...this.state, closePopup: true });
  };

  addfundHandler = () => {
    this.setState({
      ...this.state,
      whymatic: !this.state.whymatic,
      addfund: !this.state.addfund,
    });
  };

  cautionHandler = () => {
    this.setState({ ...this.state, addfund: !this.state.addfund });
  };

  outHandler = () => {
    if (whymatic === true || addfund === true)
      this.setState({ ...this.state, whymatic: false, addfund: false });
  };

  render() {
    return (
      <div>
        <span className="back-btn">
          <BackButton className="back-btn-main" onClick={this.goBack} />
        </span>
        {/* <NavBar /> */}
        <div className="wallet">
          {this.state.addfund && (
            <Popup>
              <AddFund />
            </Popup>
          )}

          <div className="wallet-img">
            <img src={wallet} />
          </div>
          <div className="wallet-content">
            <div className="wallet-content-row1">
              <span>
                <p>WALLET</p>
              </span>
              <p>Wallet Address</p>
              <span>
                <p>0xR4WqHT9ek75iNalRbgiP2r00fsd0gf2sg1d5</p>
              </span>
              <p>Balance</p>
              <span className="row1-btn">
                <div>
                  <img src={balance} />
                  <p>1000 MANA</p>
                </div>
                <div className="row1-btn-btn">
                  <div className="button1">
                    <a href="#">Buy More</a>
                  </div>
                  <button className="button2">
                    <a href="#">
                      <div>TRANSFER</div>
                    </a>
                  </button>
                  <button  onClick={this.siginHandler} className="button3">
                    <div  >
                      <img src={blue_dark} />
                      <span>
                        <a >ADD FUND TO MATIC</a>
                      </span>
                    </div>
                  </button>
                </div>
              </span>
            </div>
            <div className="wallet-content-row2">
              <p className="headingP">AUTHORIZATION</p>
              <div className="row2-divider">
                <div className="wallet-content-row2-buy">
                  <span className="buysell">For buying</span>
                  <div className="row2-buy">
                    <span className="row2-buy-sec">
                      <input type="checkbox" />
                      <p className="outerP">ERC721 using MANA</p>
                    </span>
                    <p className="innerP">
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <div className="row2-buy">
                    <span className="row2-buy-sec">
                      <input type="checkbox" />
                      <p className="outerP">ERC721 using MANA</p>
                    </span>
                    <p className="innerP">
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <div className="row2-buy">
                    <span className="row2-buy-sec">
                      <input type="checkbox" />
                      <p className="outerP">ERC721 using MANA</p>
                    </span>
                    <p className="innerP">
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <div className="row2-buy">
                    <span className="row2-buy-sec">
                      <input type="checkbox" />
                      <p className="outerP">ERC721 using MANA</p>
                    </span>
                    <p className="innerP">
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <br />
                  <br />
                  <span className="buysell">For Matic</span>
                  <div className="row2-buy">
                    <span className="row2-buy-sec">
                      <input type="checkbox" />
                      <p className="outerP">ERC721 using MANA</p>
                    </span>
                    <p className="outerP">
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                </div>
                <div className="wallet-content-row2-buy">
                  <span className="buysell">For selling</span>
                  <div className="row2-buy">
                    <span className="row2-buy-sec">
                      <input type="checkbox" />
                      <p className="outerP">ERC721 using MANA</p>
                    </span>
                    <p className="innerP">
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <div className="row2-buy">
                    <span className="row2-buy-sec">
                      <input type="checkbox" />
                      <p className="outerP">ERC721 using MANA</p>
                    </span>
                    <p className="innerP">
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {this.state.closePopup && (
          <Popup closePopup={this.closePopup}>
            <WalletWhy />
          </Popup>
        )}
      </div>
    );
  }
}

export default Wallet;

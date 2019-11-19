import React from 'react';
import './Wallet.scss';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as popupActions from '../../actions/popup_actions'
import * as userActions from '../../actions/user-actions';

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
      addfund: true,
      caution: false,
      closePopup: false,
    };
    this.goBack = this.goBack.bind(this);
  }

  componentWillMount = () => {
    if(!this.props.is_sign_in) this.props.userActions.matamask_login();
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

  closeAddFund = () => {
    this.setState({ ...this.state, addfund: false });
  }

  render() {
    const {
      is_add_fund,
      is_why_wallet,
      account,
      mana, 
      erc20_approve
    } = this.props;

    function roundNumber(rnum, rlength) { 
      var newnumber = Math.floor(rnum * Math.pow(10, rlength)) / Math.pow(10, rlength);
      return newnumber;
    }
    
    return (
      <div>
        <span className="back-btn">
          <BackButton className="back-btn-main" onClick={this.goBack} />
        </span>
        {/* <NavBar /> */}
        <div className="wallet">
          {is_why_wallet && (
            <Popup closePopup={this.props.popupActions.why_wallet_c}>
              <WalletWhy />
            </Popup>
          )}
          {is_add_fund && (
            <Popup closePopup={this.props.popupActions.add_fund_c}>
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
                <p>{account}</p>
              </span>
              <p>Balance</p>
              <span className="row1-btn">
                <div>
                  <img src={balance} />
                  <p>{roundNumber(mana/Math.pow(10, 18), 4)} MANA</p>
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
                  <button onClick={this.props.popupActions.why_wallet_o} className="button3">
                    <div>
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
                  <div className="row2-buy" onClick={this.props.userActions.approve_token}>
                    <span className="row2-buy-sec">
                      <input checked={erc20_approve} type="checkbox" />
                      <p className="outerP">ERC20 using MANA</p>
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
      </div>
    );
  }
}


const mapStateToProps = (state) => {

  const is_add_fund = state.popups.add_fund;
  const is_why_wallet = state.popups.why_wallet;
  const account = state.user.accounts[0];
  const mana = state.user.mana;
  const erc20_approve = state.user.erc20_approve;
  const is_sign_in = state.user.is_sign_in;

  return {
    is_add_fund,
    is_why_wallet,
    account,
    mana, 
    erc20_approve,
    is_sign_in
  };
};
const mapDispatchToProps = (dispatch) => ({
  popupActions : bindActionCreators(popupActions, dispatch),
  userActions : bindActionCreators(userActions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(Wallet);


import React from 'react';
import logo from '../common/assets/images/nav-logo.svg';
import icons from '../../services/icon-service';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions/popup_actions';
import Popup from '../common/popup/Popup.js';
import LoginPopup from '../common/popup/loginPopup.js';
import ConnectWallet from '../common/popup/connectWallet';
import MaticNetworkPopup from '../common/popup/maticNetwork';
//Images
import MaticIcon from '../common/assets/images/blue_dark.svg';
import ProfileIcon from '../common/assets/images/square.png';
import Point from '../common/assets/images/Oval.svg';
//css
import './Navbar.scss';
import { bindActionCreators } from 'redux';

//React Icons Start

const FaBars = icons['fa-bars'];
const FaBell = icons['fa-bell'];
const FaWindowClose = icons['fa-close'];
//Icons End

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topNav: true,
      navSmall: false,
      loading: false
    };
  }

  closePopup = () => {
    this.props.actions.login_popup_c();
  };

  closeCW = () => {
    this.props.actions.connect_wallet_c();
  }

  closeMatNet = () => {
    this.props.actions.matic_net_c();
  }

  openMatNet = () => {
    console.log('called');
    
    this.props.actions.matic_net_o();
  }

  navBarClickHandler = () => {
    const newState = { ...this.state, topNav: !this.state.topNav };
    console.log(newState);
    this.setState(newState);
  };

  showPopup = () => {
    this.props.actions.login_popup_o()
  };

  render() {
    const {
      market,
      address,
      isLanding,
      isWallet,
      isActivity,
      showLoginPopup,
      connectWallet,
      maticNetworkPopup,
      isSignIn,
      network,
      mana
    } = this.props;

    if (isLanding || isWallet) return <div></div>;

    const isMaticNetwork = network != 3 && network >3;
    return (
      <div id="nav-bar">
        <nav
          className={
            this.state.topNav ? 'Navigation' : 'Navigation Responsive'
          }>
          <div className="sidebar">
            <FaWindowClose
              onClick={this.navBarClickHandler}
              className="sidebar-icon"
              style={{ color: '#fff' }}
            />
            <div className="sidebar-menu">
              {address && (
                <div className="sidebar-content">
                  <Link to="/myland" className="sidebar-item enabled">
                    MYLAND
                  </Link>
                  <Link to="/marketplace" className="sidebar-item">
                    Marketplace
                  </Link>
                </div>
              )}
              {market && (
                <div className="sidebar-content">
                  <Link to="/myland" className="sidebar-item">
                    MYLAND
                  </Link>
                  <Link to="/marketplace" className="sidebar-item enabled">
                    Marketplace
                  </Link>
                </div>
              )}
              {isActivity && (
                <div className="sidebar-content">
                  <Link to="/myland" className="sidebar-item">
                    MYLAND
                  </Link>
                  <Link to="/marketplace" className="sidebar-item ">
                    Marketplace
                  </Link>
                  <Link to="/activity" className="sidebar-item enabled">
                    Activity
                  </Link>
                </div>
              )}
              {!isActivity && (
                <div className="sidebar-content">
                  <Link to="/myland" className="sidebar-item">
                    MYLAND
                  </Link>
                  <Link to="/marketplace" className="sidebar-item ">
                    Marketplace
                  </Link>
                </div>
              )}
            </div>
          </div>
          <FaBars className="FaBars" onClick={this.navBarClickHandler} />
          <Link to="/" className="Navigation-logo-link">
            <img src={logo} alt="logo" className="Navigation-logo" />
          </Link>
          <div className="Navigation-menu">
            {market ? (
              <Link to="/marketplace" className="Navigation-item enabled">
                Marketplace
              </Link>
            ) : (
              <Link to="/marketplace" className="Navigation-item">
                Marketplace
              </Link>
            )}
            {address ? (
              <Link to="/myland" className="Navigation-item enabled">
                myland
              </Link>
            ) : (
              <Link to="/myland" className="Navigation-item ">
                myland
              </Link>
            )}
          </div>
          {!isSignIn ? (
            <a onClick={this.showPopup} className="Navigation-item">
              SignIn
            </a>
          ) : (
            <div className="signedIn">
              {!isMaticNetwork ? (
                <div onClick={this.openMatNet} className="signedIn-extra">
                  <img
                    src={MaticIcon}
                    alt="MaticIcon"
                    className="signedIn-icon"
                  />
                  <div className="signedIn-link">
                    SWITCH TO MATIC
                  </div>
                </div>
              ) : (
                <div className="signedIn-extra">
                  <img src={Point} className="signedIn-icon"></img>
                  <p>Matic Network </p>
                </div>
              )}
              <span className="signedIn-bell-parent">
                <FaBell className="signedIn-bell" />
              </span>

              <p className="signedIn-p">⏣ &nbsp; {mana}</p>
              <Link to="/wallet">
                <img
                  src={ProfileIcon}
                  alt="ProfileIcon"
                  className="signedIn-profile"
                  style={{ width: '40px', height: 'auto' }}
                />
              </Link>
            </div>
          )}
        </nav>{' '}
        {showLoginPopup && (
          <Popup closePopup={this.closePopup}>
            <LoginPopup />
          </Popup>
        )}
        {connectWallet && (
          <Popup closePopup={this.closeCW}>
            <ConnectWallet/>
          </Popup>
        )}
        {
          maticNetworkPopup && (
            <Popup closePopup={this.closeMatNet}>
              <MaticNetworkPopup close={this.closeMatNet} />
            </Popup>
          )
        }
      </div>
    );
  }
}

NavBar.propTypes = {};

const mapStateToProps = (state) => {
  const market = state.router.location.pathname === '/marketplace';
  const address = state.router.location.pathname === '/address';
  const isLanding = state.router.location.pathname === '/';
  const isWallet = state.router.location.pathname === '/wallet';
  const isActivity = state.router.location.pathname === '/activity';
  const showLoginPopup = state.popups.login_popup
  const connectWallet = state.popups.connect_wallet;
  const maticNetworkPopup = state.popups.matic_network;
  const isSignIn = state.user.is_sign_in;
  const network = state.user.network;
  const mana = state.user.mana;

  return {
    market,
    address,
    isLanding,
    isWallet,
    isActivity,
    showLoginPopup,
    connectWallet,
    maticNetworkPopup,
    isSignIn,
    network,
    mana
  };
};
const mapDispatchToProps = (dispatch) => ({
  actions : bindActionCreators(actions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

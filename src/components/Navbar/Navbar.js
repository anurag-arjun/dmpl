import React from 'react';
import logo from '../common/assets/images/nav-logo.svg';
import icons from '../../services/icon-service';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Web3 from 'web3';
import Popup from '../common/popup/Popup.js';
import LoginPopup from '../common/popup/loginPopup.js';
//Images
import MaticIcon from '../common/assets/images/blue_dark.svg';
import ProfileIcon from '../common/assets/images/square.png';
import wallet from '../common/assets/images/wallet.svg';
import walletConnect from '../common/assets/images/walcon.svg';
import metamask from '../common/assets/images/metamask.svg';
import portis from '../common/assets/images/portis.svg';
//css
import './Navbar.scss';

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
      siginOverlay: false,
      loading: false,
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  handleLogin = async () => {
    //check if metamask is installed
    let ethereum = window.ethereum;
    if (typeof window.ethereum === undefined) {
      window.alert('Please install metamask first');
      return;
    }
    const accounts = await ethereum.enable();
    console.log(accounts);

    if (!web3) {
      try {
        await typeof window.ethereum;
      } catch (error) {
        window.alert('You need to allow Metmask Idiot.');
        return;
      }
    }

    // const coinbase = await web3.eth.getCoinbase();
    // if (!coinbase) {
    //   window.alert('Please activate metamask first.');
    //   return;
    // }

    // const publicAddress = coinbase.toLowerCase();
    // this.setState({ loading: true });
  };

  setWrapperRef = (node) => {
    this.wrapperRef = node;
  };

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.setState({ ...this.state, siginOverlay: false });
      //this.siginHandler();
    }
  };

  navBarClickHandler = () => {
    const newState = { ...this.state, topNav: !this.state.topNav };
    console.log(newState);
    this.setState(newState);
  };

  siginHandler = () => {
    document.addEventListener('click', this.handleClickOutside);

    this.setState({ ...this.state, siginOverlay: true });
  };

  render() {
    const { market, Address, isLanding } = this.props;

    if (isLanding) return <div></div>;

    const isSignIn = false;
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
              {Address && (
                <a href="/Address" className="sidebar-item">
                  Address
                </a>
              )}
              {market && (
                <a href="/marketplace" className="sidebar-item enabled">
                  Marketplace
                </a>
              )}
            </div>
          </div>
          <FaBars className="FaBars" onClick={this.navBarClickHandler} />
          <a href="/" className="Navigation-logo-link">
            <img src={logo} alt="logo" className="Navigation-logo" />
          </a>
          <div className="Navigation-menu">
            {market ? (
              <a href="/marketplace" className="Navigation-item enabled">
                Marketplace
              </a>
            ) : (
              <a href="/marketplace" className="Navigation-item">
                Marketplace
              </a>
            )}
            {Address ? (
              <a href="/Address" className="Navigation-item enabled">
                Address
              </a>
            ) : (
              <a href="/Address" className="Navigation-item ">
                Address
              </a>
            )}
          </div>

          {!isSignIn ? (
            <a onClick={this.siginHandler} className="Navigation-item">
              SignIn
            </a>
          ) : (
            <div className="signedIn">
              <div className="signedIn-extra">
                <img
                  src={MaticIcon}
                  alt="MaticIcon"
                  className="signedIn-icon"
                />
                <a href="/" className="signedIn-link">
                  SWITCH TO MATIC
                </a>
              </div>
              <span className="signedIn-bell-parent">
                <FaBell className="signedIn-bell" />
              </span>

              <p className="signedIn-p">⏣ &nbsp; 500</p>
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
        {this.state.siginOverlay && (
          <Popup>
            <LoginPopup />
          </Popup>
        )}
      </div>
    );
  }
}

NavBar.propTypes = {};

const mapStateToProps = (state) => {
  const market = state.router.location.pathname === '/marketplace';
  const Address = state.router.location.pathname === '/address';
  const isLanding = state.router.location.pathname === '/';
  return {
    market,
    Address,
    isLanding,
  };
};

export default connect(mapStateToProps)(NavBar);

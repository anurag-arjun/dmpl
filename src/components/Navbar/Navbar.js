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
    const {
      market,
      address,
      isLanding,
      isWallet,
      isActivity,
      isMaticCard,
    } = this.props;

    if (isLanding || isWallet) return <div></div>;

    const isSignIn = true;
    const isMaticNetwork = true;
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
                  <a href="/address" className="sidebar-item enabled">
                    Address
                  </a>
                  <a href="/marketplace" className="sidebar-item">
                    Marketplace
                  </a>
                </div>
              )}
              {market && (
                <div className="sidebar-content">
                  <a href="/address" className="sidebar-item">
                    Address
                  </a>
                  <a href="/marketplace" className="sidebar-item enabled">
                    Marketplace
                  </a>
                </div>
              )}
              {isActivity && (
                <div className="sidebar-content">
                  <a href="/address" className="sidebar-item">
                    Address
                  </a>
                  <a href="/marketplace" className="sidebar-item ">
                    Marketplace
                  </a>
                  <a href="/activity" className="sidebar-item enabled">
                    Activity
                  </a>
                </div>
              )}
              {!isActivity && (
                <div className="sidebar-content">
                  <a href="/address" className="sidebar-item">
                    Address
                  </a>
                  <a href="/marketplace" className="sidebar-item ">
                    Marketplace
                  </a>
                </div>
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
            {address ? (
              <a href="/address" className="Navigation-item enabled">
                address
              </a>
            ) : (
              <a href="/address" className="Navigation-item ">
                address
              </a>
            )}
          </div>
          {!isSignIn ? (
            <a onClick={this.siginHandler} className="Navigation-item">
              SignIn
            </a>
          ) : (
            <div className="signedIn">
              {!isMaticNetwork ? (
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
              ) : (
                <div className="signedIn-extra">
                  <img src={Point} className="signedIn-icon"></img>
                  <p>Matic Network </p>
                </div>
              )}
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
  const address = state.router.location.pathname === '/address';
  const isLanding = state.router.location.pathname === '/';
  const isWallet = state.router.location.pathname === '/wallet';
  const isActivity = state.router.location.pathname === '/activity';

  return {
    market,
    address,
    isLanding,
    isWallet,
    isActivity,
  };
};

export default connect(mapStateToProps)(NavBar);

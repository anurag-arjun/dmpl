import React from 'react';
import logo from '../common/assets/images/nav-logo.svg';
import icons from '../../services/icon-service';
import { connect } from 'react-redux';
import MaticIcon from '../common/assets/images/blue_dark.svg';
import ProfileIcon from '../common/assets/images/square.png';
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
    };
  }

  navBarClickHandler = () => {
    const newState = { ...this.state, topNav: !this.state.topNav };
    console.log(newState);
    this.setState(newState);
  };

  render() {
    const { market, atlas, sign } = this.props;

    const isSignIn = true;
    return (
      <div>
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
              {atlas && (
                <a href="/atlas" className="sidebar-item">
                  Atlas
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
          <a href="/">
            {' '}
            <img src={logo} alt="logo" className="Navigation-logo" />
          </a>
          <div className="Navigation-menu">
            {atlas && (
              <a href="/atlas" className="sidebar-item">
                Atlas
              </a>
            )}
            {market && (
              <a href="/marketplace" className="Navigation-item enabled">
                Marketplace
              </a>
            )}
          </div>

          {!isSignIn ? (
            <a href="/signin" className="Navigation-item">
              SignIn
            </a>
          ) : (
            <div className="signedIn">
              <img src={MaticIcon} alt="MaticIcon" className="signedIn-icon" />
              <a href="/" className="signedIn-link">
                SWITCH TO MATIC
              </a>
              <FaBell className="signedIn-bell" />
              <p className="signedIn-p">⏣ &nbsp; 500</p>
              <img
                src={ProfileIcon}
                alt="ProfileIcon"
                className="signedIn-profile"
                style={{ width: '40px', height: 'auto' }}
              />
            </div>
          )}
        </nav>{' '}
      </div>
    );
  }
}

NavBar.propTypes = {};

const mapStateToProps = (state) => {
  const market = state.router.location.pathname === '/marketplace';
  const atlas = state.router.location.pathname === '/atlas';
  return {
    market,
    atlas,
  };
};

export default connect(mapStateToProps)(NavBar);

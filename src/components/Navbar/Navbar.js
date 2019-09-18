import React from 'react';
import logo from '../common/assets/images/nav-logo.svg';
import icons from '../../services/icon-service';
import './Navbar.scss';
import { connect } from 'react-redux';
import MaticIcon from '../common/assets/images/blue_dark.svg';
import ProfileIcon from '../common/assets/images/square.png';

//React Icons Start

const FaBars = icons['fa-bars'];
const FaBell = icons['fa-bell'];

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
    const { market } = this.props;

    const isSignIn = true;
    return (
      <div>
        <nav
          className={
            this.state.topNav ? 'Navigation' : 'Navigation Responsive'
          }>
          <FaBars className="FaBars" onClick={this.navBarClickHandler} />
          <a href="/">
            {' '}
            <img src={logo} alt="logo" className="Navigation-logo" />
          </a>
          <div className="Navigation-menu">
            <a href="/atlas" className="Navigation-item">
              Atlas
            </a>
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
  return {
    market,
  };
};

export default connect(mapStateToProps)(NavBar);

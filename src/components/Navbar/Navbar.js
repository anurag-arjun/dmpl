import React from 'react';
import logo from '../common/assets/images/nav-logo.svg';
import './Navbar.scss';
import { connect } from 'react-redux';

class NavBar extends React.Component {
  render() {
    const { market } = this.props;
    return (
      <nav className="Navigation">
        <a href="/">
          {' '}
          <img src={logo} alt="logo" className="Navigation-logo" />
        </a>
        <div className="Navigation-menu">
          {/* <a href="/atlas" className="Navigation-item">
            Atlas
          </a> */}
          {market && (
            <a href="/marketplace" className="Navigation-item enabled">
              Marketplace
            </a>
          )}
        </div>
        <a href="/signin" className="Navigation-item">
          SignIn
        </a>
      </nav>
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
// Components import
import LandingPage from './Landing/landing-page';
// import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import signIn from '../components/signIn/signIn.js';
import colorKey from '../components/colorKey/colorKey.js';
import NavBar from '../components/Navbar/Navbar';
import WhyMatic from '../components/WhyMatic/WhyMatic';
import Marketplace from '../components/Marketplace/Marketplace.js';
import Wallet from '../components/Wallet/Wallet.js';
import Activity from '../components/Activity/Activity.js';
import MaticCard from "../components/MaticCard/MaticCard.js"
import AddFund from '../components/AddFund/AddFund.js';
import connectWallet from '../components/connectWallet/connectWallet.js';
import MaticNetwork from '../components/MaticNetwork/MaticNetwork.js';
class Routes extends Component {
  render() {
    return (
      <div style={styles.fill}>
        <div
          style={{
            position: 'relative',
            minHeight: '100vh',
          }}>
          <div style={{ paddingBottom: '80px' }}>
            <NavBar />
            <Switch location={this.props.location}>
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/signin" component={signIn} />
              <Route exact path="/colorKey" component={colorKey} />
              <Route exact path="/whymatic" component={WhyMatic} />
              <Route exact path="/marketplace" component={Marketplace} />
              <Route exact path="/wallet" component={Wallet} />
              <Route exact path="/activity" component={Activity} />
              <Route exact path="/addfund" component={AddFund} />
              <Route exact path='/maticcard' component={MaticCard}/>
              <Route exact path="/connectwallet" component={connectWallet} />
              <Route exact path="/maticnetwork" component={MaticNetwork} />
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}
const styles = {};
styles.fill = {
  position: 'fixed',
  overflowY: 'auto',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
};

Routes.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    location: state.router.location,
  };
};
export default connect(mapStateToProps)(Routes);

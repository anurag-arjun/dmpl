import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
//Components import
import LandingPage from './Landing/landing-page';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import signIn from '../components/signIn/signIn.js';
import colorKey from '../components/colorKey/colorKey.js';
import NavBar from '../components/Navbar/Navbar';
import Marketplace from '../components/Marketplace/Marketplace.js';

class Routes extends Component {
	render() {
		return (
			<div style={styles.fill}>
				<NavBar />
				<Switch location={this.props.location}>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/signin" component={signIn} />
					<Route exact path="/colorKey" component={colorKey} />
					<Route exact path="/marketplace" component={Marketplace} />
				</Switch>
				<Footer />
			</div>
		);
	}
}
const styles = {};
styles.fill = {
	position: 'absolute',
	left: 0,
	right: 0,
	top: 0,
	bottom: 0
};

Routes.propTypes = {
	location: PropTypes.object
};

const mapStateToProps = state => {
	return {
		location: state.router.location
	};
};
export default connect(mapStateToProps)(Routes);

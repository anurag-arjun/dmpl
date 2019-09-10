import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './landing-page.scss';
import Icons from '../../services/icon-service';
import LandCard from '../common/landCard/landCard';
const FaSearch = Icons['fa-search'];

class LandingPage extends React.Component {
	render() {
		const {maps} = this.props;
		console.log(maps);

		return (
			<div className="landing-page">
				{maps.map((e, i) => (
					<LandCard {...e} index={i} />
				))}
			</div>
		);
	}
}

LandingPage.propTypes = {};

const mapStateToProps = state => {
	return {
		maps: state.maps.map
	};
};

export default connect(mapStateToProps)(LandingPage);

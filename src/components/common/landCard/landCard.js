import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './land-card.scss';
import cardImg from '../assets/images/map1.png';
import plazaGreen from '../assets/images/icon-plaza-green.svg';
import districtBlue from '../assets/images/icon-district-blue.svg';
import roadGray from '../assets/images/icon-road-gray.svg';

class LandCard extends React.Component {
	render() {
		const {name, months, num, x, y, green, blue, gray} = this.props;
		let img;
		switch (green) {
			case plazaGreen:
				img = plazaGreen;
				break;
			case districtBlue:
				img = districtBlue;
			case roadGray:
				img = roadGray;
			default:
				img = districtBlue;
				break;
		}
		return (
			<div className="land-card">
				<div className="land-card-preview">
					<img
						src={cardImg}
						alt="cardImg"
						className="land-card-preview-image"
					/>
				</div>
				<div className="land-card-content">
					<div className="land-card-content-title">{name}</div>
					<div className="land-card-content-date">{months} MonthsAgo</div>
					<div className="land-card-content-info"></div>
				</div>
			</div>
		);
	}
}

LandCard.propTypes = {};

export default LandCard;

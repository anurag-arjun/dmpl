import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './land-card.scss';
import cardImg from '../assets/images/map1.png';
import plazaGreen from '../assets/images/icon-plaza-green.svg';
import districtBlue from '../assets/images/icon-district-blue.svg';
import roadGray from '../assets/images/icon-road-gray.svg';

class LandCard extends React.Component {
  render() {
    const {name, des, num, plaza} = this.props;
    let img;
    switch (plaza) {
      case plazaGreen:
        img = plazaGreen;
        break;
      case districtBlue:
        img = districtBlue;
      case roadGray:
        img = roadGray;
      default:
        img = plazaGreen;
        break;
    }
    return (
      <div className="land-card">
        <img src={cardImg}></img>
        <div className="cc">
          <p className="e1">{name}</p>
          <p className="e2">{des}</p>
        </div>
        <div className="dv">
          <i className="land-icon"></i>
          <img src={img}></img>
          <p className="e3"> {num} LAND</p>
        </div>
      </div>
    );
  }
}

LandCard.propTypes = {};

export default LandCard;

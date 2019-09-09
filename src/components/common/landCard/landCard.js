import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './land-card.scss';
import cardImg from '../assets/images/map1.png';

class LandCard extends React.Component {
  render() {
    const {name, des, num} = this.props;
    return (
      <div className="land-card">
        <img src={cardImg}></img>
        <div className="cc">
          <p className="e1">{name}</p>
          <p className="e2">{des}</p>
        </div>
        <div className="dv">
          <i className="land-icon"></i>
          <p className="e3"> {num} LAND</p>
        </div>
      </div>
    );
  }
}

LandCard.propTypes = {};

export default LandCard;

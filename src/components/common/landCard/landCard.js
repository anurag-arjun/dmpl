import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './land-card.scss';
import cardImg from '../assets/images/map1.png';

class LandCard extends React.Component {
  render() {
    return (
      <div className="land-card">
        <img src={cardImg}></img>
        <div className="cc">
          <p className="e1">Double Parsel</p>
          <p className="e2">Aquire 9 days ago</p>
        </div>
        <div className="dv">
          <i className="land-icon"></i>
          <p className="e3"> 2 LAND</p>
        </div>
      </div>
    );
  }
}

LandCard.propTypes = {};

export default LandCard;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './land-card.scss';
import cardImg from '../assets/images/map3.png';
import plazaGreen from '../assets/images/icon-plaza-green.svg';
import districtBlue from '../assets/images/icon-district-blue.svg';
import roadGray from '../assets/images/icon-road-gray.svg';
import placeIcon from '../assets/images/place.svg';

class LandCard extends React.Component {
  render() {
    const {
      name,
      months,
      num,
      x,
      y,
      green,
      blue,
      gray,
      mana,
      manaSymbol,
      big,
    } = this.props;

    return (
      <div className={big ? 'land-card big' : 'land-card'}>
        <div className="land-card-preview">
          <img
            src={cardImg}
            alt="cardImg"
            className="land-card-preview-image"
          />
        </div>
        <div className="land-card-content">
          <div className="land-card-content-text">
            <div className="land-card-content-heading">
              <div className="land-card-content-title">{name}</div>
              {big && manaSymbol && (
                <div className="land-card-content-mana">⏣ &nbsp; {mana}</div>
              )}
            </div>
            <div className="land-card-content-date">{months} MonthsAgo</div>
          </div>
          <div className="land-card-content-info">
            <div className="land-card-content-xy">
              <img
                src={placeIcon}
                alt="placeIcon"
                className="land-card-place-icon"
              />
              <p className="land-card-content-x">{x},</p>
              <p className="land-card-content-x">{y}</p>
            </div>
            {green && (
              <img src={plazaGreen} className="land-card-content-image green" />
            )}
            {blue && (
              <img
                src={districtBlue}
                className="land-card-content-image blue"
              />
            )}
            {gray && (
              <img src={roadGray} className="land-card-content-image gray" />
            )}
          </div>
        </div>
      </div>
    );
  }
}

LandCard.propTypes = {};

export default LandCard;

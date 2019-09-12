import React from 'react';
import './marketplace.scss';
import LandCard from '../common/landCard/landCard';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Marketplace extends React.Component {
  render() {
    const { maps } = this.props;
    return (
      <div className="marketplace-container">
        <div className="marketplace-container-menu">
          <div className="menu-container">
            <div className="menu-container-item">
              <a href="" className="menu-item active">
                Parcels
              </a>
              <a href="" className="menu-item">
                Estates
              </a>
            </div>
            <div className="menu-list">
              <input type="text" list="lang" placeholder="English"></input>
              <datalist id="lang">
                <option value="English"></option>
                <option value="French"></option>
                <option value="Japanese"></option>
                <option value="Spanish"></option>
              </datalist>
            </div>
          </div>
        </div>
        <div className="marketplace-container-cards-collection">
          <div className="marketplace-container-cards">
            {maps.map((e, i) => (
              <LandCard {...e} index={i} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

Marketplace.propTypes = {};

const mapStateToProps = (state) => {
  const top12 = state.maps.map.slice(0, 12);
  return {
    maps: top12,
  };
};

export default connect(mapStateToProps)(Marketplace);

import React from 'react';
import './marketplace.scss';
import LandCard from '../common/landCard/landCard';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Dropdown from 'react-dropdown';
import NavBar from '../Navbar/Navbar';
//import 'react-dropdown/style.css';

class Marketplace extends React.Component {
  render() {
    const { maps } = this.props;
    //const defaultOption = options['Cheapest'];
    const options = ['Cheapest', 'Newest', 'Closest to Expire'];
    const { mapsReversed } = this.props;
    return (
      <div>
        <NavBar Marketplace="true" />
        <div className="marketplace-container">
          <Tabs>
            <div className="marketplace-container-menu">
              <div className="menu-container">
                <TabList className="menu-container-item">
                  <Tab className="menu-item">Parcels</Tab>
                  <Tab className="menu-item">Estates</Tab>
                </TabList>
                {/* <div className="menu-list">
                <input type="text" list="lang" placeholder="English"></input>
                <datalist id="lang">
                  <option value="English"></option>
                  <option value="French"></option>
                  <option value="Japanese"></option>
                  <option value="Spanish"></option>
                </datalist>
              </div> */}
                <Dropdown
                  options={options}
                  onChange={this._onSelect}
                  //value={defaultOption}
                  placeholder="Cheapest"
                />
              </div>
            </div>

            <TabPanel>
              <div className="marketplace-container-cards-collection">
                <div className="marketplace-container-cards">
                  {maps.map((e, i) => (
                    <LandCard big={true} {...e} index={i} />
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="marketplace-container-cards-collection">
                <div className="marketplace-container-cards">
                  {mapsReversed.map((e, i) => (
                    <LandCard big={true} {...e} index={i} />
                  ))}
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

Marketplace.propTypes = {};

const mapStateToProps = (state) => {
  const top12 = state.maps.map.slice(0, 12);
  const last12 = state.maps.map.slice(5, 17);
  return {
    maps: top12,
    mapsReversed: last12.reverse(),
  };
};

export default connect(mapStateToProps)(Marketplace);

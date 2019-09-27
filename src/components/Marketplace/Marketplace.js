import React from 'react';
import './marketplace.scss';
import LandCard from '../common/landCard/landCard';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/initActions';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Dropdown from 'react-dropdown';
import Loader from '../common/assets/images/Loader.svg';

class Marketplace extends React.Component {
  componentWillMount = () => {
    this.props.actions.initCards();
  };

  render() {
    const { cards } = this.props;
    // const defaultOption = options['Cheapest'];
    const options = ['Cheapest', 'Newest', 'Closest to Expire'];
    const { cardsReversed } = this.props;
    return (
      <div>
        {/* <NavBar Marketplace="true" /> */}
        <div className="marketplace-container">
          <Tabs>
            <div className="marketplace-container-menu">
              <div className="menu-container">
                <TabList className="menu-container-item">
                  <Tab className="menu-item">Parcels <span className="parcel">976</span></Tab>
                  <Tab className="menu-item">Estates <span className="dead">345</span></Tab>
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
                  // value={defaultOption}
                  placeholder="Cheapest"
                />
              </div>
            </div>

            <TabPanel>
              <div className="marketplace-container-cards-collection">
                <div className="marketplace-container-cards">
                  {this.props.isFetching ? (
                    <img src={Loader} alt="Loading" className="Loader" />
                  ) : (
                    cards.map((e, i) => <LandCard {...e} index={i} normal />)
                  )}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="marketplace-container-cards-collection">
                <div className="marketplace-container-cards">
                  {this.props.isFetching ? (
                    <img src={Loader} alt="Loading" className="Loader" />
                  ) : (
                    cardsReversed.map((e, i) => (
                      <LandCard {...e} index={i} normal />
                    ))
                  )}
                  {/* {cardsReversed.map((e, i) => (
                    <LandCard big {...e} index={i} />
                  ))} */}
                </div>
              </div>
            </TabPanel>
            <div className="marketplace-container-button">
              <div className="marketplace-container-pagination">
                <a className="item active">1</a>
                <a className="item ">2</a>
                <a className="item ">4</a>
                <a className="item ">3</a>
                <a className="item ">5</a>
                <a className="item ">...</a>
                <a className="item ">72</a>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    );
  }
}

Marketplace.propTypes = {};

const mapStateToProps = (state) => {
  const top12 = state.cards.cards.slice(0, 12);
  const last12 = state.cards.cards.slice(5, 17);
  const isFetching = state.cards.isFetching;
  return {
    cards: top12,
    isFetching,
    cardsReversed: last12.reverse(),
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Marketplace);

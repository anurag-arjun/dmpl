import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/initActions';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './address.scss';

class Address extends React.Component {
  componentWillMount = () => {
    this.props.actions.initCards();
  };

  render() {
    const { cards } = this.props;
    // const defaultOption = options['Cheapest'];
    const { cardsReversed } = this.props;
    return (
      <div>
        {/* <NavBar Address="true" /> */}
        <div className="Address-container">
          <Tabs>
            <div className="Address-container-menu">
              <div
                className="menu-container"
                style={{ borderBottom: '2px solid rgba(34,36,38,.15)' }}>
                <TabList className="menu-container-item">
                  <Tab className="menu-item">Parcels</Tab>
                  <Tab className="menu-item">Contribution</Tab>
                  <Tab className="menu-item">On Sale</Tab>
                  <Tab className="menu-item">Estates</Tab>
                  <Tab className="menu-item">Bids</Tab>
                  <Tab className="menu-item">Mortages</Tab>
                </TabList>
              </div>
            </div>
            <TabPanel>
              <div className="Address-container-cards-container">
                <div className="Address-container-cards"></div>
                <div className="Address-container-empty">
                  The user has no Parcels
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="Address-container-cards-container">
                <div className="Address-container-cards"></div>
                <div className="Address-container-empty">
                  The user has no Contributions
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="Address-container-cards-container">
                <div className="Address-container-cards"></div>
                <div className="Address-container-empty">
                  The user has no Sales
                </div>
              </div>
            </TabPanel>{' '}
            <TabPanel>
              <div className="Address-container-cards-container">
                <div className="Address-container-cards"></div>
                <div className="Address-container-empty">
                  The user has no Estates
                </div>
              </div>
            </TabPanel>{' '}
            <TabPanel>
              <div className="Address-container-cards-container">
                <div className="Address-container-cards"></div>
                <div className="Address-container-empty">
                  The user has no Bids
                </div>
              </div>
            </TabPanel>{' '}
            <TabPanel>
              <div className="Address-container-cards-container">
                <div className="Address-container-cards"></div>
                <div className="Address-container-empty">
                  The user has no Mortages
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

Address.propTypes = {};

const mapStateToProps = (state) => {
  const top12 = state.cards.cards.slice(0, 12);
  const last12 = state.cards.cards.slice(5, 17);
  return {
    cards: top12,
    cardsReversed: last12.reverse(),
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Address);

/* eslint-disable import/no-named-as-default */
import './common/styles/reset.css';
import './common/styles/fonts.css';
import './common/styles/root.css';

import React from "react";
import PropTypes from 'prop-types';
import Routes from './routes';
import { hot } from "react-hot-loader";


import { ReactReduxInternetConnection } from "react-redux-internet-connection";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
class App extends React.Component {

  render() {
    return (
      <div>
        <ReactReduxInternetConnection />
        <Routes />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  history: PropTypes.object
};

export default hot(module)(App);

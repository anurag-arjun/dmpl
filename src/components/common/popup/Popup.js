import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Popup.js';

class Popup extends React.Component {
  render() {
    return (
      <div className="PopUp">
        {loginPopup && (
          <div>
            <div className="hidden-top">&nbsp;</div>
            <div className="hidden-left">&nbsp;</div>
            <div className="popup-body">
              <div className="popup-image"></div>
              <div className="popup-heading"></div>
              <div className="popup-btn-parent">
                <div className="popup-btn-left"></div>
                <div className="popup-btn-right"></div>
              </div>
            </div>
            <div className="hidden-right">&nbsp;</div>
            <div className="hidden-bottom">&nbsp;</div>
          </div>
        )}
        {buyPopup && (
          <div>
            <div className="hidden-top">&nbsp;</div>
            <div className="hidden-left">&nbsp;</div>
            <div className="popup-body">
              <div className="popup-image"></div>
              <div className="popup-heading"></div>
              <div className="popup-btn-parent">
                <div className="popup-btn-left"></div>
                <div className="popup-btn-right"></div>
              </div>
            </div>
            <div className="hidden-right">&nbsp;</div>
            <div className="hidden-bottom">&nbsp;</div>
          </div>
        )}
      </div>
    );
  }
}

export default Popup;

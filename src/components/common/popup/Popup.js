import React, { Component } from 'react';
import './Popup.scss';

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup-top" onClick={this.props.closePopup}></div>
        <div className="popup-middle">
          <div className="popup-left" onClick={this.props.closePopup}></div>
          <div className="popup-body">{this.props.children}</div>
          <div className="popup-right" onClick={this.props.closePopup}></div>
        </div>
        <div className="popup-bottom" onClick={this.props.closePopup}></div>
      </div>
    );
  }
}

Popup.propTypes = {};

export default Popup;

import React, { Component } from 'react';
import './Popup.scss';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closePopup: true,
    };
  }

  render() {
    return (
      <div className="popup">
        <div className="popup-top" onClick={this.closePopup}></div>
        <div className="popup-middle">
          <div className="popup-left" onClick={this.closePopup}></div>
          <div className="popup-body">{this.props.children}</div>
          <div className="popup-right" onClick={this.closePopup}></div>
        </div>
        <div className="popup-bottom" onClick={this.closePopup}></div>
      </div>
    );
  }
}

Popup.propTypes = {};

export default Popup;

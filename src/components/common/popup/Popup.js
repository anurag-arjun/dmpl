import React, { Component } from 'react';
import './Popup.scss';

class Popup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  closePopup = () => {
    this.props.closePopup();
  };

  render() {
    return (
      <div className="popup">
        <div className="popup-top" onClick={this.closePopup}></div>
        <div className="popup-middle" onClick={this.closePopup}>
          <div className="popup-left" onClick={this.closePopup}></div>
          <div className="popup-body" onClick={this.closePopup}>
            {this.props.children}
          </div>
          <div className="popup-right" onClick={this.closePopup}></div>
        </div>
        <div className="popup-bottom"></div>
      </div>
    );
  }
}

Popup.propTypes = {};

export default Popup;

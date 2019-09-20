import React from 'react';
import './MaticNetwork.scss';
import Bitmap1 from '../common/assets/images/Bitmap1.png';
import Bitmap2 from '../common/assets/images/Bitmap2.png';
import Bitmap3 from '../common/assets/images/Bitmap3.png';
import Bitmap4 from '../common/assets/images/Bitmap4.png';
class MaticNetwork extends React.Component {
  render() {
    return (
      <div>
        <div className="overlay-box">
        <div className="maticnetwork">
          <h1 maticnetwork-heading>Add Matic Network to Metamask</h1>
          <div className="container">
            <div className="img">
              <div>
                <img src={Bitmap1}></img>
              </div>
              <div>
                <img src={Bitmap2}></img>
              </div>
              <div>
                <img src={Bitmap3}></img>
              </div>
              <div>
                <img src={Bitmap4}></img>
              </div>
            </div>

            <div className="maticnetwork-btn">
              <div>
                <a href="#">
                  <p>COPY URL</p>
                </a>
                <a href="#">
                  <p>CLOSE</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
       
      </div>
    );
  }
}

export default MaticNetwork;

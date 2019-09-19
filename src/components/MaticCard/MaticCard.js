import React from 'react';
import "./MaticCard.scss";
import img from "../common/assets/images/img.png"
import wallet from '../common/assets/images/square.png'
import balance from '../common/assets/images/balance-icon.svg'
import location from "../common/assets/images/location.svg"
import chat from "../common/assets/images/chat.svg"

class MaticCard extends React.Component {

    render() { 
        return ( <div className="card">
                    <div className="card-img-block">
                        <div className="card-img">
                            <img src={img}></img>
                        </div>
                    </div>
                <div className="card-details">
                    <div className="card-details-line1">
                        
                       <div>
                           <div>
                           <div><p className="para1">Private road Connection</p></div>
                            <div className="para-img"><img src={location}></img><p>-73, -112</p></div>
                           </div>
                           
                            
                            <div className="own-by">
                                <div>
                                    <span><p>Owned by</p></span>
                                    <img src={wallet}></img>
                                </div>
                                 
                            </div>
                        </div>
                        <div className="para-grey">
                          <p>Most Valuable parcel for this price on market </p>
                        </div>
                    </div>
                    
                </div>
                <div className="card-details-line2">
                    <div className="line2">
                        <div className="line2-price">
                            <div><p>Price</p></div>
                            <div className="val"><img src={balance}></img><span>1000</span></div>
                        </div>
                        <div className="line2-time">
                            <p className="para-white">Time Left</p>
                            <p className="para-grey">Expire in 29 Days</p>
                        </div>
                        <div className='line-2-btn'>
                            <a className="btn-bid" href="#">BID</a>
                            <a className="btn-buy" href="#">BUY</a>
                        </div>
                    </div>
                   
                </div>
                <div className="card-details-line3">
                    <span><img src={chat}></img></span>
                    <p>Trasnsaction History</p>
                </div>
                
            

        </div> );
    }
}
 
export default MaticCard;
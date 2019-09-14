import React from 'react';
import "./Activity.scss";
import blue_dark from '../common/assets/images/balance-icon.svg';
import loading from '../common/assets/images/loading.svg';

class Activity extends React.Component {

    render() { 
        return ( <div>
            <div className="activity">
                <div className="activity-head">
                    <div className="heading">Activity</div>
                    <div className="history">CLEAR HISTORY</div>
                </div>
                <div className="activity-content">
                    <div className="activity-content-1">
                        <div className="content-line">
                            <div className="content-line-para">
                                <img src={blue_dark}></img>
                                <p className="para">You added <span className="red-para">100 MANA</span> to Matic Network</p>
                            </div>
                            <span className="content-line-time">
                                <p>1 minute ago</p>
                            </span>
                        </div>  
                        <div className="status">
                            <p>Pending </p>
                            <img src={loading}></img>
                        </div>
                    </div>
                    <div className="activity-content-1">
                        <div className="content-line">
                            <div className="content-line-para">
                                <img src={blue_dark}></img>
                                <p className="para">You Authorized the <span className="red-para">Matic Plasma Contact</span> to Operate MANA on your behalf</p>
                            </div>
                            <span className="content-line-time">
                                <p>1 minute ago</p>
                            </span>
                        </div>  
                        <div className="status">
                            <p>Success </p>
                        </div>
                    </div>
                </div>
            </div>


        </div> );
    }
}
 
export default Activity;
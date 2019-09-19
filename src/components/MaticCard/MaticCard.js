import React from 'react';
import "./MaticCard.scss";
import img from "../common/assets/images/img.png"
class MaticCard extends React.Component {

    render() { 
        return ( <div>
                <div><img src={img}></img></div>
                <div>
                    <div>
                        <p>Private road Connection</p>
                        <div>Logo</div>
                    </div>
                        <span>Created by</span>
                        <img src={#}></img>
                </div>
                <div>
                    <div>
                        <p>Price</p>
                        <span><img src={#}></img><p>1000</p></span>
                    </div>
                    <div>
                        <p>Time Left</p>
                        <p>Expire in 29 Days</p>
                    </div>
                    <div>
                    <a href="#">BID</a>
                    <a href="#">BUY</a>
                    </div>
                </div>
                <div>
                    <img src="#"></img>
                    <p>Trasnsaction History</p>
                </div>
                
            

        </div> );
    }
}
 
export default MaticCard;
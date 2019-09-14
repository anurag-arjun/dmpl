import React from 'react';
import blue_dark from '../common/assets/images/balance-icon.svg';
import "./AddFund.scss"

class AddFund extends React.Component {

    render() { 
        return ( <div className="main">
            <div className="addfund">
                <h1 className="addfund-heading">Add fund to matic</h1>
                <p className="addfund-balance">Your current balance is <span></span> in Ethereum mainnet</p>
                <p className="addfund-amt">Amount</p>
                <div className="addfund-amtval">
                    <div className="addfund-amtval-div">
                        <img className="amtval-div-img" src={blue_dark}></img>
                        <p className="amt-div-p">500</p>
                    </div>
                    <div className="addfund-amtval-max"><p>MAX</p></div>
                </div>
                <hr></hr>
                <p className="addfund-gas">Gas Option</p>
                <div className="addfund-btn">
                    <button className="btn-button">
                        <p>Fast <span>.</span> 0.001 ETH</p>
                    </button>
                    <button className="btn-button">
                        <p>Medium <span>.</span> 0.001 ETH</p>
                    </button>
                    <button className="btn-button">
                        <p>Slow <span>.</span> 0.001 ETH</p>
                    </button>
                </div>
                <div className="addfund-sub">
                    <button className="sub-cancel">CANCEL</button>
                    <button className="sub-submit">SUBMIT</button>
                </div>
            </div>
        </div> );
    }
}
 
export default AddFund;
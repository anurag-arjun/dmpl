import React from 'react';
import './Wallet.scss';
import wallet from '../common/assets/images/square.png';
import blue_dark from '../common/assets/images/blue_dark.svg';
import balance from '../common/assets/images/balance-icon.svg';
class Wallet extends React.Component {
  
    render() { 
        return (<div>

                <div className="wallet">
                    <div className="wallet-img">
                    <img src={wallet}></img>
                    </div>
                    <div className="wallet-content">
                        <div className='wallet-content-row1'>
                            <span><p>WALLET</p></span>
                            <p>Wallet Address</p>
                            <span><p>0xR4WqHT9ek75iNalRbgiP2r00fsd0gf2sg1d5gd0gfd200531331</p></span>
                            <p>Balance</p>
                            <span className="row1-btn">
                                 <div><img src={balance}></img><p>1000 MANA</p></div>
                                 <div className="row1-btn-btn">
                                 <button>Buy More</button>
                                 <button>Transfer</button>
                                 <button><img src={blue_dark}></img> <p>ADD FUND TO MATIC</p></button>
                                 </div>
                            </span>
                        </div>
                        <div className="wallet-content-row2">
                            <span>AUTHORIZATION</span>
                            <div className='wallet-content-row2-buy'>
                                <span>For buying</span>
                                <div>
                                    <span>
                                        <input type="checkbox"></input>
                                        <p>ERC721 using MANA</p>
                                    </span>
                                    <p>Authorize the <span>marketplace</span> to operate MANA on your behalf</p>
                                </div>
                                <div>
                                    <span>
                                        <input type="checkbox"></input>
                                        <p>ERC721 using MANA</p>
                                    </span>
                                    <p>Authorize the <span>marketplace</span> to operate MANA on your behalf</p>
                                </div>
                                <div>
                                    <span>
                                        <input type="checkbox"></input>
                                        <p>ERC721 using MANA</p>
                                    </span>
                                    <p>Authorize the <span>marketplace</span> to operate MANA on your behalf</p>
                                </div>
                                <div>
                                    <span>
                                        <input type="checkbox"></input>
                                        <p>ERC721 using MANA</p>
                                    </span>
                                    <p>Authorize the <span>marketplace</span> to operate MANA on your behalf</p>
                                </div>
                                <div>
                                    <span>
                                        <input type="checkbox"></input>
                                        <p>ERC721 using MANA</p>
                                    </span>
                                    <p>Authorize the <span>marketplace</span> to operate MANA on your behalf</p>
                                </div>

                            </div>
                            <div className="wallet-content-row2-sell">
                                <span>For selling</span>
                                <div>
                                    <span>
                                        <input type="checkbox"></input>
                                        <p>ERC721 using MANA</p>
                                    </span>
                                    <p>Authorize the <span>marketplace</span> to operate MANA on your behalf</p>
                                </div>
                                <div>
                                    <span>
                                        <input type="checkbox"></input>
                                        <p>ERC721 using MANA</p>
                                    </span>
                                    <p>Authorize the <span>marketplace</span> to operate MANA on your behalf</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

        </div>  );
    }
}
 
export default Wallet;
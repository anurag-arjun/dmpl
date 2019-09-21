import React from 'react'
import './Wallet.scss'
import wallet from '../common/assets/images/square.png'
import blue_dark from '../common/assets/images/blue_dark.svg'
import balance from '../common/assets/images/balance-icon.svg'
import icons from '../../services/icon-service';
const StartIcons = icons['md-start-circle'];
import NavBar from '../Navbar/Navbar'
class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whymatic:false
    };
  }
    whymaticHandler= ()=>{
      this.setState({...this.state, whymatic: !this.state.whymatic});
    };

  render () {
    return (
      <div>
        {/* <NavBar /> */}
        <div className='wallet'>
          <div className='wallet-img'>
            <img src={wallet} />
          </div>
          <div className='wallet-content'>
            <div className='wallet-content-row1'>
              <span>
                <p>WALLET</p>
              </span>
              <p>Wallet Address</p>
              <span>
                <p>0xR4WqHT9ek75iNalRbgiP2r00fsd0gf2sg1d5gd0gfd200531331</p>
              </span>
              <p>Balance</p>
              <span className='row1-btn'>
                <div>
                  <img src={balance} />
                  <p>1000 MANA</p>
                </div>
                <div className='row1-btn-btn'>
                  <div className='button1'><a href="#">Buy More</a></div>
                  <button className="button2"><a href="#"><div>TRANSFER</div></a></button>
                  <button className="button3">
                    <img src={blue_dark} /> 
                    <span>
                      <a onClick={this.whymaticHandler}>ADD FUND TO MATIC</a>
                    </span>
                  </button>
                </div>
              </span>
            </div>
            <div className='wallet-content-row2'>
              <p className='headingP'>AUTHORIZATION</p>
              <div className='row2-divider'>
                <div className='wallet-content-row2-buy'>
                  <span className='buysell'>For buying</span>
                  <div className='row2-buy'>
                    <span className='row2-buy-sec'>
                      <input type='checkbox' />
                      <p className='outerP'>ERC721 using MANA</p>
                    </span>
                    <p className='innerP'>
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <div className='row2-buy'>
                    <span className='row2-buy-sec'>
                      <input type='checkbox' />
                      <p className='outerP'>ERC721 using MANA</p>
                    </span>
                    <p className='innerP'>
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <div className='row2-buy'>
                    <span className='row2-buy-sec'>
                      <input type='checkbox' />
                      <p className='outerP'>ERC721 using MANA</p>
                    </span>
                    <p className='innerP'>
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <div className='row2-buy'>
                    <span className='row2-buy-sec'>
                      <input type='checkbox' />
                      <p className='outerP'>ERC721 using MANA</p>
                    </span>
                    <p className='innerP'>
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <br />
                  <br />
                  <span className='buysell'>For Matic</span>
                  <div className='row2-buy'>
                    <span className='row2-buy-sec'>
                      <input type='checkbox' />
                      <p className='outerP'>ERC721 using MANA</p>
                    </span>
                    <p className='outerP'>
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                </div>
                <div className='wallet-content-row2-buy'>
                  <span className='buysell'>For selling</span>
                  <div className='row2-buy'>
                    <span className='row2-buy-sec'>
                      <input type='checkbox' />
                      <p className='outerP'>ERC721 using MANA</p>
                    </span>
                    <p className='innerP'>
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <div className='row2-buy'>
                    <span className='row2-buy-sec'>
                      <input type='checkbox' />
                      <p className='outerP'>ERC721 using MANA</p>
                    </span>
                    <p className='innerP'>
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {
            this.state.whymatic&&
            <div className="why">
                    <div className="appendix-1">
                        <div className="why-matic">
                            <h1>Why Matic ?</h1>
                            <span>LEARN MORE</span>
                        </div>
                        <div className="why-row">
                            <div className="why-row-col-1">
                                <h2>Advantage over Mainnet</h2>
                                <div>
                                    <span>
                                        <StartIcons size={40} className="col-1-icon" />
                                    </span>
                                    <div>
                                        <h2>Faster transactions</h2>
                                        <p>Make near-instant transactions on Matic Network</p>
                                    </div>
                                </div>

                                <div>
                                    <span>
                                        <StartIcons size={40} className="col-1-icon" />
                                    </span>
                                    <div>
                                        <h2>Fees</h2>
                                        <p>Negligible gas fees</p>
                                    </div>
                                </div>

                                <div>
                                    <span><StartIcons size={40} className="col-1-icon" /></span>
                                    <div>
                                        <h2>Bulk Deposits</h2>
                                        <p>Deposit multiple assests in one-go</p>
                                    </div>
                                </div>
                            </div>

                            <div className="why-row-col-2">
                                <h2>How it works ?</h2>

                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <span>1</span>
                                            </div>
                                            <div className="line"></div>
                                        </div>
                                        <p>Move to Matic</p>
                                    </div>
                                </div>

                                <div>
                                        <div>
                                            <div>
                                                <span>2</span>
                                            </div>
                                            <p>Sell and Trade on Matic</p>
                                        </div>
                                       
                                    </div>
                                    <div>
                                        <div>
                                            <div><span>3</span></div>
                                            <p>Move Back to Mainnet</p>
                                        </div>
                                    </div>
                            </div>
                          
                        </div>
                        <div className="why-row-2">
                                <button className="why-row-2-btn"> <a href="#"> NEXT</a> </button>
                            </div>
                    </div>
                </div>
          }
        </div>
      </div>
    )
  }
}

export default Wallet

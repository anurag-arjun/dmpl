import React from 'react';
import './Wallet.scss';
import wallet from '../common/assets/images/square.png';
import blue_dark from '../common/assets/images/blue_dark.svg';
import balance from '../common/assets/images/balance-icon.svg';
import caution from '../common/assets/images/caution.svg';
import icons from '../../services/icon-service';
const StartIcons = icons['md-start-circle'];
import NavBar from '../Navbar/Navbar';
class Wallet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whymatic: false,
      addfund: false,
      caution: false,
    };
  }
  whymaticHandler = () => {
    this.setState({ ...this.state, whymatic: !this.state.whymatic });
  };
  addfundHandler = () => {
    this.setState({
      ...this.state,
      whymatic: !this.state.whymatic,
      addfund: !this.state.addfund,
    });
  };
  cautionHandler = () => {
    this.setState({ ...this.state, addfund: !this.state.addfund });
  };

  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <div className="wallet">
          <div className="wallet-img">
            <img src={wallet} />
          </div>
          <div className="wallet-content">
            <div className="wallet-content-row1">
              <span>
                <p>WALLET</p>
              </span>
              <p>Wallet Address</p>
              <span>
                <p>0xR4WqHT9ek75iNalRbgiP2r00fsd0gf2sg1d5gd0gfd200531331</p>
              </span>
              <p>Balance</p>
              <span className="row1-btn">
                <div>
                  <img src={balance} />
                  <p>1000 MANA</p>
                </div>
                <div className="row1-btn-btn">
                  <div className="button1">
                    <a href="#">Buy More</a>
                  </div>
                  <button className="button2">
                    <a href="#">
                      <div>TRANSFER</div>
                    </a>
                  </button>
                  <button className="button3">
                    <img src={blue_dark} />
                    <span>
                      <a onClick={this.whymaticHandler}>ADD FUND TO MATIC</a>
                    </span>
                  </button>
                </div>
              </span>
            </div>
            <div className="wallet-content-row2">
              <p className="headingP">AUTHORIZATION</p>
              <div className="row2-divider">
                <div className="wallet-content-row2-buy">
                  <span className="buysell">For buying</span>
                  <div className="row2-buy">
                    <span className="row2-buy-sec">
                      <input type="checkbox" />
                      <p className="outerP">ERC721 using MANA</p>
                    </span>
                    <p className="innerP">
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <div className="row2-buy">
                    <span className="row2-buy-sec">
                      <input type="checkbox" />
                      <p className="outerP">ERC721 using MANA</p>
                    </span>
                    <p className="innerP">
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <div className="row2-buy">
                    <span className="row2-buy-sec">
                      <input type="checkbox" />
                      <p className="outerP">ERC721 using MANA</p>
                    </span>
                    <p className="innerP">
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <div className="row2-buy">
                    <span className="row2-buy-sec">
                      <input type="checkbox" />
                      <p className="outerP">ERC721 using MANA</p>
                    </span>
                    <p className="innerP">
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <br />
                  <br />
                  <span className="buysell">For Matic</span>
                  <div className="row2-buy">
                    <span className="row2-buy-sec">
                      <input type="checkbox" />
                      <p className="outerP">ERC721 using MANA</p>
                    </span>
                    <p className="outerP">
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                </div>
                <div className="wallet-content-row2-buy">
                  <span className="buysell">For selling</span>
                  <div className="row2-buy">
                    <span className="row2-buy-sec">
                      <input type="checkbox" />
                      <p className="outerP">ERC721 using MANA</p>
                    </span>
                    <p className="innerP">
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                  <div className="row2-buy">
                    <span className="row2-buy-sec">
                      <input type="checkbox" />
                      <p className="outerP">ERC721 using MANA</p>
                    </span>
                    <p className="innerP">
                      Authorize the <span>marketplace</span> to operate MANA on
                      your behalf
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.state.whymatic && (
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
                      <span>
                        <StartIcons size={40} className="col-1-icon" />
                      </span>
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
                        <div>
                          <span>3</span>
                        </div>
                        <p>Move Back to Mainnet</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="why-row-2">
                  <button className="why-row-2-btn">
                    {' '}
                    <a onClick={this.addfundHandler}> NEXT</a>{' '}
                  </button>
                </div>
              </div>
            </div>
          )}
          {this.state.addfund && (
            <div className="main">
              <div className="addfund">
                <div onClick={this.cautionHandler} className="caution">
                  <div className="caution-img">
                    <img src={caution}></img>
                  </div>
                  <div className="caution-content">
                    <p className="unauthorised">Unauthorised </p>
                    <p className="para">
                      You Need to got <span>Setting</span> and authorised the
                      Matic Plasma contact to operate LAND on your behalf before
                      you can list it on sale{' '}
                    </p>
                    <p className="para"></p>
                  </div>
                </div>
                <h1 className="addfund-heading">Add fund to matic</h1>
                <div className="addfund-balance">
                  <p className="addfund-balance-1">
                    Your current balance is{' '}
                    <span>
                      <img src={blue_dark} /> <p>1000</p>{' '}
                    </span>{' '}
                    in Ethereum mainnet
                  </p>
                </div>
                <p className="addfund-amt">Amount</p>
                <div className="addfund-amtval">
                  <div className="addfund-amtval-div">
                    <img className="amtval-div-img" src={balance} />
                    <p className="amt-div-p">
                      <input type="text" Value="500"></input>
                    </p>
                  </div>
                  <div className="addfund-amtval-max">
                    <a href="#">MAX</a>
                  </div>
                </div>
                <div className="addfund-hr" />
                <p className="addfund-gas">Gas Option</p>
                <div className="addfund-btn">
                  <div className="btn-button">
                    <p>
                      Fast <span>.</span> 0.001 ETH
                    </p>
                  </div>
                  <div className="btn-button">
                    <p>
                      Medium <span>.</span> 0.001 ETH
                    </p>
                  </div>
                  <div className="btn-button">
                    <p>
                      Slow <span>.</span> 0.001 ETH
                    </p>
                  </div>
                </div>
                <div className="addfund-sub">
                  <a href="#" className="sub-cancel">
                    CANCEL
                  </a>
                  <a href="#" className="sub-submit">
                    SUBMIT
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Wallet;

import React from 'react';
import './whyWallet.scss';
import { connect } from 'react-redux'

import * as popupActions from '../../../actions/popup_actions';
import icons from '../../../services/icon-service';
import { bindActionCreators } from 'redux';
const StartIcons = icons['md-start-circle'];

class WalletWhy extends React.Component {

  next_btn = () => {
    this.props.popupActions.why_wallet_c();
    this.props.popupActions.add_fund_o();
  }

  render() {
    return (
      <div>
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
              <button onClick={this.next_btn} className="why-row-2-btn">
                <a> NEXT</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



const mapDispatchToProps = (dispatch) => ({
  popupActions : bindActionCreators(popupActions, dispatch)
})


export default connect(null, mapDispatchToProps)(WalletWhy);

import React from 'react';
import './Activity.scss';
import { connect } from 'react-redux'
import blue_dark from '../common/assets/images/balance-icon.svg';
import loading from '../common/assets/images/Loader.svg';
import unknown from "../common/assets/images/unknown.svg"

class Activity extends React.Component {

  renderActivity = (act) => {
    return (
      <div key={act.hash} className="activity-content-1">
        <div className="content-line">
          <div className="content-line-para">
            <img src={blue_dark} />
            <p className="para">
              {/* You added <span className="red-para">100 MANA</span> to
              Matic Network */}
              {act.text}
            </p>
          </div>
          <span className="content-line-time">
            <p>{act.time}</p>
          </span>
        </div>
        <div className="status">
          {
            act.status === 0
            ?
              (<div>
                <p>Pending </p>
                <img src={loading} />
              </div>)
            :
              act.status === 1
              ? 
                (<p>Success </p>)
              : 
                (<p>failed</p>)

          }
        </div>
      </div>
    )
  }

  render() {
    const activity = this.props.activity;
    return (
      <div>
        <div className="activity">
          <div className="activity-head">
            <div className="heading">Activity</div>
            <div className="history">CLEAR HISTORY</div>
          </div>
          <div className="activity-content">
            {
              activity.map(this.renderActivity)
            }
            {/* <div className="activity-content-1">
              <div className="content-line">
                <div className="content-line-para">
                  <img src={blue_dark} />
                  <p className="para">
                    You Authorized the{' '}
                    <span className="red-para">Matic Plasma Contact</span> to
                    Operate MANA on your behalf
                  </p>
                </div>
                <span className="content-line-time">
                  <p>1 minute ago</p>
                </span>
              </div>
              <div className="status">
                <p>Success </p>
              </div>
            </div>
            <div className="activity-content-1">
              <div className="content-line">
                <div className="content-line-para">
                  <img src={unknown} />
                  <p className="para">
                    You Moved Your Land
                    <span className="red-para"> -123 ,-140 </span> to
                    to Matic Network
                  </p>
                </div>
                <span className="content-line-time">
                  <p>1 minute ago</p>
                </span>
              </div>
              <div className="status">
                <p>Success </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

Activity.propTypes = {};

const mapStateToProps = (state) => {
  const activity = state.activity.activity;
  return {
    activity
  };
};


export default connect(mapStateToProps)(Activity);

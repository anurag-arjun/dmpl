import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./Landing/landing-page";

class Routes extends Component {
    render() {
        return (
            <div style={styles.fill}>
                <Switch location={this.props.location}>
                    <Route exact path="/" component={LandingPage} />
                </Switch>
            </div>
        );
    }
}
const styles = {};
styles.fill = {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
};

Routes.propTypes = {
    location: PropTypes.object
};

const mapStateToProps = state => {
    return {
        location: state.router.location
    };
};
export default connect(mapStateToProps)(Routes);

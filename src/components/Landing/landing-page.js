import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './landing-page.scss';
import Icons from '../../services/icon-service';
import LandCard from '../common/landCard/landCard';
const FaSearch = Icons['fa-search'];


class LandingPage extends React.Component {
    render() {
     
        return (
            <div id="landing-page">
                Made by shubham
                icon example
                <FaSearch/>
                <LandCard/>
            </div>
        )
    }
}

LandingPage.propTypes = {

}

export default LandingPage
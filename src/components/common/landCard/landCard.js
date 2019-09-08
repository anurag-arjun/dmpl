import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './land-card.scss';
import cardImg from '../assets/images/img.png'

class LandCard extends React.Component {
    render() {
        return (
            <div className="land-card">
                    <img src={cardImg}></img>
                    <div className='cc'>
                         <p className="p1">Double Parsel</p>
                         <p className="p2">Aquire 9 days ago</p>
                      </div>   
                    <div className="dv"> 
                        <i class="land-icon"></i>
                        <p>2 LAND</p>
                    </div>
            </div>
        )
    }
}

LandCard.propTypes = {

}

export default LandCard
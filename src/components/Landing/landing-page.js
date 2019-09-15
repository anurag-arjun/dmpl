import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './landing-page.scss'
import Icons from '../../services/icon-service'
import LandCard from '../common/landCard/landCard'
import Header from '../Header/Header.js'
import NavBar from '../Navbar/Navbar'
const FaSearch = Icons['fa-search']

class LandingPage extends React.Component {
  render () {
    const { maps } = this.props
    console.log(maps)

    return (
      <div className='landing-page'>
        <NavBar />
        <Header />
        <div className='landing-page-publications'>
          <div className='landing-page-header'>
            <h3 className='landing-page-p'>Newest LAND</h3>
            <a href='/marketplace' className='landing-page-a'>
              VIEW MORE
            </a>
          </div>
          <div className='landing-page-scroller'>
            {maps.map((e, i) => (
              <LandCard {...e} index={i} normal />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

LandingPage.propTypes = {}

const mapStateToProps = (state) => {
  const top10 = state.maps.map.slice(0, 10)
  return {
    maps: top10
  }
}

export default connect(mapStateToProps)(LandingPage)

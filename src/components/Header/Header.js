import React from 'react'
import { Link } from 'react-router-dom';

import './Header.scss'

class Header extends React.Component {
  render () {
    return (
      <div className='Header-main'>
        <div className='Header-Heading'>
          <h1 className='Header-Heading-light'>
            Choose your ideal location in Genesis City
          </h1>
          <p className='Header-Heading-dark'>Decentralized market for LAND</p>
          <button className='Header-button button-primary'><Link to='/marketplace'>GET STARTED</Link></button>
          <a
            href='https://youtu.be/uyuaN1OdOh4'
            className='Header-Heading-link'
          >
            Watch the tutorial
          </a>
        </div>
      </div>
    )
  }
}

export default Header

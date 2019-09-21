import React from 'react'
<<<<<<< HEAD
import logo from '../common/assets/images/nav-logo.svg';
=======
import { Link } from 'react-router-dom';

>>>>>>> 7c33c00db0b60ec15d982007e1d4e7e8ac7d9fad
import './Header.scss'

class Header extends React.Component {
  render () {
    return (
      <div className='Header-main'>
        <div className='Header-Heading'>
          <div>
            <span className="logo"><img src={logo}></img></span>
          <h1 className='Header-Heading-light'>
            Choose your ideal location in Genesis City
          </h1>
          </div>
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

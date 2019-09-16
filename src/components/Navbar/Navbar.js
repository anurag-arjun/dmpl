import React from 'react'
import logo from '../common/assets/images/nav-logo.svg'
import './Navbar.scss'

class NavBar extends React.Component {
  render () {
    const { Marketplace, Atlas } = this.props
    return (
      <nav className='Navigation'>
        <a href='/'>
          {' '}
          <img src={logo} alt='logo' className='Navigation-logo' />
        </a>
        {/* MENU */}
        {/* {Marketplace && <a href="/">ABc</a>} */}

        <div className='Navigation-menu'>
          <a href='/atlas' class='Navigation-item'>
            Atlas
          </a>
          <a href='/marketplace' class='Navigation-item enabled'>
            Marketplace
          </a>
        </div>
        <a href='/marketplace' class='Navigation-item'>
          SignIn
        </a>
      </nav>
    )
  }
}

export default NavBar

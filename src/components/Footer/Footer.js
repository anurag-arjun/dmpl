import React from 'react'
import './Footer.scss'
import icons from '../../services/icon-service'
import Dropdown from 'react-dropdown'
const FacebookIcon = icons['fa-facebook-square']
const TwitterIcon = icons['fa-twitter-square']
const GithubIcon = icons['fa-github-square']
const RedditIcon = icons['fa-reddit-square']

class Footer extends React.Component {
  render () {
    const options = ['English', 'French', 'German', 'Italian']
    return (
      <footer id='footer' className='footer'>
        <div className='footer-left'>
          <div className='footer-left-links'>
            <span>Blog</span>
            <span>Website</span>
            <span>FAQ</span>
            <span>Privacy Policy</span>
            <span>Terms And Conditions</span>
            <span>Code of Ethics</span>
          </div>
          <div className='footer-left-icons'>
            <div className='footer-left-icons-icon'>
              <TwitterIcon />
            </div>
            <div className='footer-left-icons-icon'>
              <FacebookIcon />
            </div>
            <div className='footer-left-icons-icon'>
              <GithubIcon />
            </div>
            <div className='footer-left-icons-icon'>
              <RedditIcon />
            </div>
          </div>
        </div>
        <div className='footer-right'>
          <span className='footer-right-text'>
            © 2019 Decentraland.All rights reserved.
          </span>
          <Dropdown
            options={options}
            onChange={this._onSelect}
            // value={defaultOption}
            placeholder='Cheapest'
          />
        </div>
      </footer>
    )
  }
}
export default Footer

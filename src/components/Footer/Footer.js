import React from 'react';
import './Footer.scss';
import icons from '../../services/icon-service';
const FacebookIcon = icons['fa-facebook-square'];
const TwitterIcon = icons['fa-twitter-square'];
const GithubIcon = icons['fa-github-square'];
const RedditIcon = icons['fa-reddit-square'];

class Footer extends React.Component {
	render() {
		return (
			<footer id="footer">
				<div className="col1">
					<div className="row1">
						<span>Blog</span>
						<span>Website</span>
						<span>FAQ</span>
						<span>Privacy Policy</span>
						<span>Terms And Conditions</span>
						<span>Code of Ethics</span>
					</div>
					<div className="row2">
						<div className="row-icon">
							<TwitterIcon />
						</div>
						<div className="row-icon">
							<FacebookIcon />
						</div>
						<div className="row-icon">
							<GithubIcon />
						</div>
						<div className="row-icon">
							<RedditIcon />
						</div>
					</div>
				</div>
				<div className="col2">
					<span>© 2019 Decentraland.All rights reserved.</span>
					<input type="text" list="lang" placeholder="English"></input>
					<datalist id="lang">
						<option value="English"></option>
						<option value="French"></option>
						<option value="Japanese"></option>
						<option value="Spanish"></option>
					</datalist>
				</div>
			</footer>
		);
	}
}
export default Footer;

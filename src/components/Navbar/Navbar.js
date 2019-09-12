import React from 'react';
import logo from '../common/assets/images/nav-logo.svg';
import './Navbar.scss';

class NavBar extends React.Component {
	render() {
		return (
			<nav className="Navigation">
				<a href="/">
					{' '}
					<img src={logo} alt="logo" className="Navigation-logo" />
				</a>
			</nav>
		);
	}
}

export default NavBar;

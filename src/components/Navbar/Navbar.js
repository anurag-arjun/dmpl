import React from 'react';
import logo from '../common/assets/images/nav-logo.svg';
import './Navbar.scss';

class NavBar extends React.Component {
	render() {
		return (
			<nav>
				<img src={logo} alt="logo" />
			</nav>
		);
	}
}

export default NavBar;

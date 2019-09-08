import React from 'react';
import NavBar from '../Navbar/Navbar';
import './Header.scss';

class Header extends React.Component {
	render() {
		return (
			<div className="Header-main">
				<NavBar />
				<div className="header-image"></div>
			</div>
		);
	}
}

export default Header;

import React from 'react';
import './marketplace.scss';

class Marketplace extends React.Component {
	render() {
		return (
			<div className="marketplace-container">
				<div className="marketplace-container-menu">
					<div className="menu-container">
						<div className="menu-container-item">
							<a href="" className="menu-item active">
								Parcels
							</a>
							<a href="" className="menu-item">
								Estates
							</a>
						</div>
						<div className="menu-list">
							<input type="text" list="lang" placeholder="English"></input>
							<datalist id="lang">
								<option value="English"></option>
								<option value="French"></option>
								<option value="Japanese"></option>
								<option value="Spanish"></option>
							</datalist>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Marketplace;

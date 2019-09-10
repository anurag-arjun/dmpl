import React from 'react';
import './Footer.scss';

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
						 <img src='https://i.ibb.co/wd95SVc/git.png'></img>
						 <img src="https://i.ibb.co/HC7jVc2/fb.png"></img>
						 <img src="https://image.flaticon.com/icons/svg/52/52053.svg"></img>
						 <img src="https://i.ibb.co/bdVqFF3/twiter.png"></img>
			    </div>
			</div>
			<div className="col2"> 
			<span>© 2019 Decentraland.All rights reserved.</span>
			<input type="text" list="lang" placeholder='English'></input>
			     <datalist id='lang'>
					 <option value="English"></option>
					 <option value="French"></option>
					 <option value='Japanese'></option>
					 <option value="Spanish"></option>
				 </datalist>
			</div>
			
		</footer>
		);
	}
}
export default Footer;

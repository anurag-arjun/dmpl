import React from 'react';
import './signIn.scss';

class signIn extends React.Component {
	render() {
		return (
			<div>
				<div className="frame">
					<img src="https://i.ibb.co/2n3b5Sj/pic1.png"></img>
					<h1 id='head'> Get Started</h1>
					<p id="para">First off you’ll need a safe place to keep all your LAND. <br></br> 
					You can use the <span className='tagg'>MetaMask</span>  extension or a hardware wallet <br></br>
					 like <span className='tagg'>Ledger Nano S.</span> </p>
					<button id='btn'>Connect</button>
				</div>
			</div>
		);
	}
}

export default signIn;

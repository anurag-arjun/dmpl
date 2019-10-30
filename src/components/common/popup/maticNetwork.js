import React from 'react';
import './maticNetwork.scss';
import { Link } from 'react-router-dom';
import Bitmap1 from '../assets/images/Bitmap1.png';
import Bitmap2 from '../assets/images/Bitmap2.png';
import Bitmap3 from '../assets/images/Bitmap3.png';
import Bitmap4 from '../assets/images/Bitmap4.png';

class MaticNetwork extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notdesign: false
        };
    }
    notdesignHandler = () => {
        this.setState({ ...this.state, notdesign: !this.state.notdesign })
    }

    copyURL = () => {
        const text = 'https://testnet2.matic.network';
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
        window.alert("URL has been copied!")
    }

    render() {
        return (
            <div>
                <div className="overlay-box">
                    {
                        this.state.notdesign &&
                        <div className="NotPartOfDesign">
                            <div id="NotDesign">
                                <div className="NPOD">Not Part Of Design</div>
                                <div className="para">
                                    <p>User is Setting Metamask. <br></br> after changing Network to Matic,<br></br> User is landing on Home page</p>
                                </div>
                                <div className="btn">
                                    <div className="button">
                                        <Link to="/marketplace">
                                            <span>GO TO MATIC</span>
                                        </Link>

                                    </div>
                                </div>

                            </div>
                        </div>
                    }
                    <div className="maticnetwork">
                        <h1 maticnetwork-heading>Add Matic Network to Metamask</h1>
                        <div className="container">

                            <div className="img">
                                <div>
                                    <img src={Bitmap1}></img>
                                </div>
                                <div>
                                    <img src={Bitmap2}></img>
                                </div>
                                <div>
                                    <img src={Bitmap3}></img>
                                </div>
                                <div>
                                    <img src={Bitmap4}></img>
                                </div>
                            </div>

                            <div className="maticnetwork-btn">
                                <div>
                                    <a onClick={this.copyURL} href="#">
                                        <p>COPY URL</p>
                                    </a>
                                    <a onClick={this.props.close} href="#">
                                        <p>CLOSE</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}

export default MaticNetwork;

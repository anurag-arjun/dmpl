import React from 'react';
import "./NotPartOfDesign.scss"
class NotPartOfDesign extends React.Component {
    
    render() { 
        return ( <div className="NotPartOfDesign">
            <div id="NotDesign">
                <div className="NPOD">Not Part Of Design</div>
                <div className="para">
                    <p>User is Setting Metamask. <br></br> after changing Network to Matic,<br></br> User is landing on Home page</p>
                </div>
                <div className="btn">
                    <div className="button">
                        <span>GO TO MATIC</span>
                    </div>
                </div>
                
            </div>
        </div> );
    }
}
 
export default NotPartOfDesign;
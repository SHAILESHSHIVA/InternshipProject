import React, {Component} from 'react';
import logo from './images/logo.png';
import twitter from './images/twitter.png';
import linked_in from './images/linked_in.png';
import fb from './images/fb.png';
import '../Head/App.css';

export default class Footer extends Component{
	constructor(props) {
		super(props);

	}

	render() {
		return(
			<div>
				<div className="App-footer-">
		  			<div>
          						  <img src={logo} className="Footer-logo" alt="logo" />
         			 </div>
         		</div>

         		<div>
	         		<div className="Footer_Follow">
	         			 	<h3>FOLLOW US</h3>
	         		</div>

	         		<div>
		         		<div className="App-fb">
		         			 	<img src={fb} className="App-fb" alt="FB" />
		         		</div>

		         		<div className="App-linkdin">
		           			 	<img src={linked_in} className="App-linkdin" alt="Linked In"/>
		         		</div>

		         		<div className="App-twitter">
		         			 	<img src={twitter} className="App-twitter" alt="Twitter"/>
		         		</div>
	         		</div>
         		</div>
         		 <div>
         			<p className="Footer-text">
         		 		CONTACT US
         		 		<br/>
         		 		Mobile  : 9408778156
         		 		<br/>
         		 		Address : DA-IICT, Gujarat
         		 	</p>
							<pre>
							<br/>
					<h5 className="footer">    © 2008-2017 Q-Management, Inc. All Rights Reserved.                                                                                                                           Privacy Policy  |  Terms & Conditions   </h5>
					</pre>
         		 </div>
			</div>
		);

	}


}

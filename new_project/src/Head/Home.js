import React, { Component } from 'react';
import Company_List from './Company_List';

import './App.css';


export default class Home extends Component{
	constructor(props) {
		super(props);

	}

	render() {
		return(
			  <div >
              	<div>
              		<h1>Join Q-Management </h1>
              	</div>

                <div className="App-CompanyDetailsText">
                  <h4>
                     Here people form a queue in a fixed, predictable position, such as at supermarket checkouts, and other retail locations such as banks or airport security. In the field of facilities management, structured queues are commonly known with different names like "Queue Managers" or "Crowd Controllers" or "Public Guidance Systems". Very often, queue management systems are set up to manage ticket ranking for a service (with or without a numbered ticket) with identification and thus enable a serene and stress-free waiting. Extending the different possibilities, planned reception by appointment and remotely rank allocation on or through Short Message Service can also be included.
                  </h4>
                  <Company_List />
                </div>

              </div>

		);
	}
}

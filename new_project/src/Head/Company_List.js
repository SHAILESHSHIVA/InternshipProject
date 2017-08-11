import React, { Component } from 'react';
import './App.css';
import sony from './images/sony.png';
  import motorola from './images/Motorola-Company-Logo.jpg';
  import samsung from './images/mi.png';
  import apple from './images/apple.png';
  import micromax from './images/micromax.jpg';

export default class Company_List extends Component{
	constructor(props) {
		super(props);

	}

	render() {
		return(
			<div>
        <div>
          <div className="App-apple">
            <img src={apple} className="App-apple" alt="apple" />
           </div>
        </div>

        <div>
          <div className="App-samsung">
            <img src={samsung} className="App-samsung" alt="samsung" />
          </div>
        </div>

        <div>
          <div className="App-motorola">
            <img src={motorola} className="App-motorola" alt="motorola" />
          </div>
        </div>

        <div>
          <div className="App-sony">
            <img src={sony} className="App-sony" alt="sony" />
          </div>
        </div>

        <div>
          <div className="App-micromax">
            <img src={micromax} className="App-micromax" alt="micromax" />
           </div>
        </div>


      </div>


		);
	}
}

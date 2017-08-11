import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';
import{
 BrowserRouter as Router, 
 Route,
 Link
}from 'react-router-dom';

import Home from './Home';
import About_us from './About_us';
import register_company from './register_company';
import register_branch from './register_branch';
import Login from './Login';
import Contact_us from './Contact_us';

export default class header extends Component
{
	constructor(props) {
		super(props);
		
	}

	render() {
		return(
      <div >
			           	<div className="app">
                    <div className="header">
                        <div className="App-header">
                          <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="heading">Queue Management</h1>
                        </div>
                    </div>
                    <div >
                    <div className="col12" >
                        <nav>
                          <ul>
                              <li><Link to="/">Home</Link></li>
                              <li><Link to="/register_company">Company</Link></li>
                              <li><Link to="/register_branch">Branch</Link></li>
                              <li><Link to="/LogIn">LogIn</Link></li>
                              <li><Link to="/AboutUs">About</Link></li>
                              <li><Link to="/ContactUs">ContactUs</Link></li>
                          </ul>

                          <Route exact path="/" component={ Home }/>
                          <Route path="/register_company" component={ register_company }/>
                          <Route path="/register_branch" component={ register_branch }/>
                          <Route path="/LogIn" component={ Login }/>
                          <Route path="/AboutUs" component={ About_us}/>
                          <Route path="/ContactUs" component={ Contact_us}/>

                        </nav>
                      </div>
                    </div>
           </div>          
    </div>
                           
		);
	}
}
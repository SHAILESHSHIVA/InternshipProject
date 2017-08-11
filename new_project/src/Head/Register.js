import React, {Component} from 'react';
import {BrowserRouter as Router,
        Route,
        Link
}from 'react-router-dom';
import register_company from './register_company';
import register_brach from './register_branch';
import './App.css';

export default class Register extends Component {
	
	render() {
		return(
            <div>
                <div>
                    <h2 className="text" id="type">Select Type</h2>
                    
                    <select className="drop-down" onChange={props.nav}>
                        <option value="1">Company</option>
                        <option value="2">Branch</option>
                    </select>    
                </div>
            </div>

        );
	}
}
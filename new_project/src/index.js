import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	  <BrowserRouter>
	  <div>
	  	  
  		<script src="http://fb.me/react-0.10.0.min.js"></script>
  		<script src="http://fb.me/JSXTransformer-0.10.0.js"></script>

		<script src="https://cdn.firebase.com/js/client/1.0.17/firebase.js"></script>
	  <App />
	  
	  </div>
	  </BrowserRouter>
	, document.getElementById('root'));
//registerServiceWorker();

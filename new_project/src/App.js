import React, { Component } from 'react';
//import './App.css';
import Header from './Head/Header';
//import Home from './Head/Home';
import Footer from './Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
	
		<div>   
        	<Header />
    </div>
       <div>
        <br/>
       </div> 
        <div>
          <Footer/>
        </div>
       
      </div>
    );
  }
}

export default App;

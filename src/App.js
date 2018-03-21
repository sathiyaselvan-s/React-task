import React, { Component } from 'react';
import Dashboard from './components/Dashboard';
import Home from './components/Home';
import Productdetails from './components/Productdetails';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="container">
       <Dashboard/>
        <Home/>
        <Productdetails/>
      </div>
      
    );
  }
}

export default App;

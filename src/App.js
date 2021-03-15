import React, { Component } from 'react';
import {BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
// import Navbar from './components/Navbar'
import NasaPhoto from './components/NasaPhoto'
import "./App.css"



class App extends Component {
  state = {  }
  componentDidMount = () => {
    document.title = "NASA APOD"
  }
  render() { 
    return (
      <BrowserRouter>
    <div>
      <Route component={Home} path="/" exact/>
      <Route component={NasaPhoto} path="/nasaphoto" />
    </div>
      </BrowserRouter>
  );
  }
}
 
export default App;

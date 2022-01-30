
import React, { Component } from 'react';
import Cetvel_Navbar from "./components/Navbar";

import Contact from "./components/Contact";
import Home from "./components/Home";
import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";
import Footer from "./components/Footer";
import Prices from "./components/Prices";
import Features from "./components/Features";

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Cetvel_Navbar/>
          <Routes>
            <Route path = "/home" element={<Home/>}></Route>
            <Route path = "/features" element={<Features/>}></Route>
            <Route path = "/prices" element={<Prices/>}></Route>
            <Route path = "/contact" element={<Contact/>}></Route>
          </Routes>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;

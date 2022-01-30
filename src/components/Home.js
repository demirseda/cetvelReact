import React, { Component } from 'react';
import Slider from "./slider/Slider";
import Card from "./Card";
import Prices from "./Prices"

class Home extends Component {
  render() {
    return <div>
         <Slider/>
        <Card/>
        <Prices/>     
        
    </div>;
  }
}
export default Home;
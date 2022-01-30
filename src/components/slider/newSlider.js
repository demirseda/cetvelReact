import React, { useState } from 'react';
import dataSlider from './dataSlider.js';
import './dataSlider.css';
import btnSlider from './btnSlider';



export default function NewSlider(){
    const [slideIndex,setSlideIndex] = useState(1)
    const nextSlide = () => {

    }
    const prevSlide = () => {
      
    }
    return (
        <div className='container_slider'>
            {dataSlider.map((obj, index) => {
                return(
                    <div className='slide'>
                        <img src = {process.end.PUBLIC_URL + `/images/home_image_${index + 1}.png`}/> 
                    </div>
                )
            })}
            <btnSlider moveSlide={nextSlide} direction={"next"} />
            <btnSlider moveSlide={prevSlide} direction={"prev"} />
        </div>
    );
  }
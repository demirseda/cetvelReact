import MenuItem from './MenuItem';
import React, {useEffect, useState } from "react";

const menuItems = [
  {name:"Anasayfa",to: "/home"},
  {name:"Features",to: "/features"},
  {name:"Prices",to: "/prices"},
  {name:"Contact",to: "/contact"},
]


 function Cetvel_Navbar(){
  const [activate, setActive] = useState(false);
  useEffect(() => {
    if (!activate) {
        document.querySelectorAll('.sideMenu').forEach((el) => {
          console.log(el)
            el.classList.remove("inActive");
        })
    }
},[activate]);
  return( <div>
    <div className='cetvel_navbar'>
      <div className='navbar_top'>
          <div className='navbar_top_content'>
            <div className='navbar_icons'>
              <span><i className='bx bxl-facebook-circle'></i></span>
              <span><i className='bx bxl-twitter' ></i></span>
              <span><i className='bx bxl-instagram' ></i></span>
            </div>
            <div className='demo_info'>
              <span>Cetvel Bulut Ön Muhasebe, ücretsiz deneyin! </span>
              <a href='#' className='btn_demo'>Demo</a>
            </div>
          </div>
      </div>
      <div className="navbar_container">
        <div className="navbar_header_left">
          <a href="#"> Cetvel LOGO</a>
        </div>
        <div className='navbar_header_right'>
          <ul> 
          {menuItems.map((menuItem,index)=>(
                    <MenuItem
                        key = {index}
                        name={menuItem.name}
                        to={menuItem.to}
                        onClick={() =>{
                          if(activate){
                              setActive(false);
                          }
                      }}
                    />
                ))}
          </ul>         
        </div>
      </div>
    </div>
  </div>);
   
  }

export default Cetvel_Navbar;

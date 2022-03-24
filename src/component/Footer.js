import React from 'react'
import './Footer.css'
import imag1 from '../assets/e0678ef25486466ba65ef6ad47b559e1.webp';
import imag2 from '../assets/da7ef6dd1302486c9a67baebe4b364bc.webp';
import imag3 from '../assets/c4392d634a0148fda8b7b2b0ad98293b.webp';


function Footer() {
  return (
    <div>
        <div id="footdiv">
    <div id="subdiv"></div>
  </div>
  <div>
    <p id="addr">Location</p>
    <p id="addr1">
      ABC Rd, Old Street, 1st Stage,<br/>
      XYZ Layout, Bengaluru,<br/>
      Karnataka 123654 <br/><br/>
      Tel: +098765xxxx
    </p>
    <p id="hour">Opening Hours</p>
    <p id="hour1">Monday to Friday<br/>
      11AM-11PM <br/><br/>
      Saturday to Sunday <br/>
      2PM-10PM
    </p>
    <p id="mail">Subscribe to our Newsletter</p>
    <input type="text" name="" id="earea" placeholder="Enter your email here*"/>
    <input type="text" name="" id="subscribe" placeholder="SIGN UP"/>
    <p id="social">Follow Us</p>
    <img id="imag1" src={imag1} alt=""/>
    <img id="imag2" src={imag2} alt=""/>
    <img id="imag3" src={imag3} alt=""/>
  </div>
    </div>
  )
}

export default Footer
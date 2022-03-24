import React from 'react'
import bg from '../assets/1491748.jpg';
import img from '../assets/photo-1618055301293-494ab4c71f9f-removebg-preview-modified.png';
import reimg from '../assets/farhad-ibrahimzade-S92tBP-BvwQ-unsplash.jpg';
import './Main.css'

function Main() {
  return (
    <div>
       <p id="head1">Exquisite SeaFood Menu</p>
  <p id="head2">Served Like Family</p>

  <div>
    <img id="bgimg" src={bg} alt=""/>
    <img id="im1" src={img} alt=""/>
  </div>


  <div>
    <h6>Welcome to SeaFood Galley</h6>
    <h4>A Place of good taste</h4>
    <p id="since">Since 1948</p>
    <p id="about">SeaFood Galley strives to bring all of those things together in each and every location, providing a
      fun-filled dining experience that will make you want to drop your anchor and never leave. So sit back, relax, and
      take part in the SeaFood Galley's experience. You'll do enough tasting, laughing and living for an entire
      lifetime.</p>
  </div> 

  <div id="resdiv">
  <h1>EAT TOGETHER</h1>
    <img id="reimg" src={reimg} alt=""/>
    <p id="respara"><span>Welcome to SeaFood Galley, where each food is an experience</span>, and every food is an
      extravenganza! Come see what <br/> <span>people have been raving about, and try one for yourself</span>. We've been
      making food for 65 years and we absolutely love it. <br/> <span>It's our passion to make food that not only
        taste</span> amazing but are works of art in themselves. We believe food are the <br/> <span>hallmarks of
        celebration and we feel privi</span>leged to be a part of life’s special moments. Every plate achieves that
      elsusive, <br/> <span>cuisine-defining balance of sweet, sa</span>lty, and even sour.</p>
    <button id="but"><a href=""> MAKE A RESERVATION</a></button>
  </div>
    </div>
  )
}

export default Main
import React from 'react'
import './Review.css'
import review1 from '../assets/istockphoto-843193172-170667a-removebg-preview.png';
import review2 from '../assets/business-woman-icon-74-removebg-preview.png';
import review3 from '../assets/istockphoto-843193172-170667a-removebg-preview.png';


function Review() {
  return (
    <div>
       <div class="row">
    <p id="customer">What Our Customers Say</p>
    <div class="col-4">
      <p id="para1">"When we saw food, it absolutely took our breath away. <br/>
        It fit with the theme of our wedding so well. <br/> Completely perfect!"</p>
      <img id="img1" src={review1} alt=""/>
      <p id="name1">Sandeep Chowta</p>
    </div>
    <div class="col-4">
      <p id="para2">"We couldn't have asked for anything more from the team. <br/>
        They listened to what we wanted and went above and beyond <br/> our expectations"</p>
      <img id="img2" src={review2} alt=""/>
      <p id="name2">Malathi Rao</p>
    </div>
    <div class="col-4">
      <p id="para3">"The whole service was flawless from start to finish and the end product was a cake that looked
        beautiful and tasted amazing! Thanks so much"</p>
      <img id="img3" src={review3} alt=""/>
      <p id="name3">Ramesh Aravind</p>
    </div>
  </div>
    </div>
  )
}

export default Review
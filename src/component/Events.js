import React from 'react'
import './Events.css'
import c1 from '../assets/erik-dungan-MQyCrJVFG8U-unsplash.jpg';
import c2 from '../assets/pexels-ave-calvar-martinez-5072316.jpg';
import c3 from '../assets/stefan-vladimirov-Q_Moi2xjieU-unsplash.jpg';
import c4 from '../assets/robert-haverly-_kmr5wKVW7E-unsplash.jpg';


function Events() {
  return (
    <div>
        <p id="preve">Promotions & Events</p>

<div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
      aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src={c1} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 id="carou">It's o-FISH-ally
          National Seafood Month</h5>
        <p id="carp1">Join us for an exclusive 3-Course all month long!</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={c2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="carouselhead">Breast Cancer Awareness Month</h5>
        <p class="carp2">Together We Rise
          And Rally to Save Lives</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="3000">
      <img src={c3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="carouselhead">Family Meals To-Go</h5>
        <p class="carp2">Each meal serves approximately 4.
          All family meals include our Galley's Famous Salad and our Chef's Select Dessert.</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <img src={c4} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5 class="carouselhead">Dining in the Dark</h5>
        <p class="carp2">If u eat a meal but don't upload a photo of it to instagram, did it really happen? </p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Events
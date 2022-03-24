import React from 'react'
import './Menu.css' 
import menulogo from '../assets/royalty-free-vector-of-a-black-and-white-chef-holding-a-menu-board-logo-by-vector-tradition-sm-8666.jpg';
import w1 from '../assets/vino-li-TqOEGdRNowY-unsplash.jpg';
import w2 from '../assets/maggie-hung-4LoGKVmUJsI-unsplash.jpg';
import w3 from '../assets/klara-kulikova-y2nJ8lG640o-unsplash.jpg';
import w4 from '../assets/stories-8b8k6AsNY6c-unsplash.jpg';
import w5 from '../assets/sunorwind-wpvCV52ikW4-unsplash.jpg';
import w6 from '../assets/caroline-attwood-bpPTlXWTOvg-unsplash.jpg';


function Menu() {
  return (
    <div>
        <img id="menulogo"
      src={menulogo}
      alt=""/>
    <p id="today">Today's Hot Deal</p>
    <p id="today1">Stay tuned - more recipes coming soon!</p>
    <img id="w1" src={w1} alt=""/>
    <p id="pw1"><strong>Tiger Prawns Dry Fry</strong> <br/>
      Prawns are fried and then tossed with spring onions. <br/> <br/> <br/>
      <span id="dollar">₹300</span>
    <div><a id="ac1" href="">Buy Now</a></div>
    </p>
    <img id="w2" src={w2}  alt=""/>
    <p id="pw2"><strong>Jumbo Prawns Salad</strong> <br/>
      Pan-fry juicy jumbo prawns and serve them over a <br/> crunchy gem & avocado salad. <br/><br/>
      <span id="dollar">₹500</span>
    <div><a id="ac2" href="">Buy Now</a></div>
    </p>
    <img id="w3" src={w3} alt=""/>
    <p id="pw3"><strong>Squid Rings Grilled</strong> <br/>
      A bright marinade, made with garlic and chile flakes, <br/> add bold flavor to the seafood dish. <br/><br/>
      <span id="dollar">₹800</span>
    <div><a id="ac3" href="">Buy Now</a></div>
    </p>
    <img id="w4" src={w4} alt=""/>
    <p id="pw4"><strong>Sigree Grilled Tiger Prawns</strong> <br/>
      The tiger prawn skewer is a tasty seafood starter <br/> can be served with Indian green chutney. <br/><br/>
      <span id="dollar">₹850</span>
    <div><a id="ac4" href="">Buy Now</a></div>
    </p>
    <img id="w5" src={w5} alt=""/>
    <p id="pw5"><strong>Charred Octopus with Herbs</strong> <br/>
      This recipe lets the octopus shine, dressing it lightly <br/> in olive oil infused with chilies and fresh oregano.
      <br/><br/>
      <span id="dollar">₹650</span>
    <div><a id="ac5" href="">Buy Now</a></div>
    </p>
    <img id="w6" src={w6} alt=""/>
    <p id="pw6"><strong>Baked Fish with Orange Capper</strong> <br/>
      Easy baked fish recipe with olives, zucchini, tomatoes <br/> and fresh orange all cooked in parchment paper
      packets. <br/><br/>
      <span id="dollar">₹900</span>
    <div><a id="ac6" href="">Buy Now</a></div>
    </p>
    </div>
  )
}

export default Menu
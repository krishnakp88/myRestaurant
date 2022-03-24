import React from 'react'
import logo from '../assets/4dd08023a2500a7efaf141af098d33ad7832bd3f45350ff0df4a4e317a62ce83-removebg-preview.png';
import cart from '../assets/shopping-cart-icon-vector-eps-trolley-logo-web-icons-shop-button-182252657.jpg';
import icon from '../assets/user-icon-vector-modified.png';

import './Header.css'
function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <img id="logo" src={logo}
        alt=""/>
      <a id="sfg" className="navbar-brand text-dark" href="#">SEAFOOD GALLEY</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="d-flex ms-auto">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-dark pe-4 fs-5 fw-bold"
                aria-current="page"
                href="">HOME</a>
            </li>
            <li className="nav-item">
              <a  className="nav-link active text-dark pe-4 fs-5 fw-bold"
                href="">MENU</a>
            </li>
            <li className="nav-item">
              <a  className="nav-link active text-dark pe-4 fs-5 fw-bold"
                aria-current="page"
                href="">GALLERY</a>
            </li>
            <li className="nav-item">
              <a  className="nav-link active text-dark pe-4 fs-5 fw-bold"
                aria-current="page"
                href="">RESERVATION</a>
            </li>
            <li className="nav-item">
              <button type="button" className="btn btn-outline-info btn-lg text-dark fs-6 fw-bold" data-bs-toggle="modal"
                data-bs-target="#staticBackdrop">
                CONTACT
              </button>
            </li>
            <li className="nav-item">
              <img id="cart" className="pe-1"
                src={cart} alt=""/>
            </li>
            <li className="nav-item">
              <img id="icon" className="pe-2" src={icon} alt=""/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
    </div>

  )
}

export default Header
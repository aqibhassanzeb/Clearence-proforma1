import React, { useState } from "react";
import "./Navbar.css";
import image from './universityofswabi.jpg'
import './Navbar1.css'

import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";


const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div className="Navbar">
      <nav className="main-nav">
      <img src={image} alt="University Of Swabi" />
        <div className="logo">
          <h2>
            <span>U</span>niversity
            <span>O</span>f
            <span>S</span>wabi
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/service">Help</NavLink>
            </li>
            <li>
              <NavLink to="/contact">About Us</NavLink>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          

          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a href="#" style={{color: "white"}} onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

      {/* hero section  */}
      <section className="hero-section">
        <p>Welcome to </p>
        <h1>UNIVERSITY OF SWABI</h1>
        <p>Clearence Proforma </p>
        <button>Apply</button>
      </section>
    </div>
  );
};

export default Navbar;
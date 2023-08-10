import '../style/Navbar.css'
import { useState } from 'react';
const Navbar = () => {
const [ham, useham] = useState(false)

  function HandleClick() {
    useham(true)
  }

  function HandleCross() {
    useham(false)
  }

  return (
    <nav>
      <div className={`mobile-navbar ${ham ? 'open-nav' : ''}`}>
        <div className="mobile-navbar-close" onClick={HandleCross}>
        <i class="fa-solid fa-xmark"></i>
        </div>
        <div className="mobile-navbar-links" onClick={HandleCross}>
          <a href="#home" >Home</a>
          <a href="#about" >About</a>
          <a href="#info" >Features</a>
          <a href="#prices">Prices</a>
          <a href="#testimonials" >Testimonials</a>
          <a href="#contact" >Contact</a>
        </div>
      </div>
      <div className="nav-center">
        <div className="logo">
          <img
            src="https://car-rental-ten.vercel.app/static/media/logo.0ad964cb93ab30cc809d.png"
            alt=""
          />
        </div>
        <div className="links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#info" className="nav-link">Features</a>
          <a href="#prices" className="nav-link">Prices</a>
          <a href="#testimonials" className="nav-link">Testimonials</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>
        <div className="ctc og-btn">Register</div>
        <div className="mobile-hamb" onClick={HandleClick}>
        <i class="fa-solid fa-bars"></i>
        </div>
  </div>
  </nav>
  );
};

export default Navbar;

import React from 'react';
import './Navbar.css';
import homeIcon from '../assets/svg/home-add-svgrepo-com.svg';
import inventoryIcon from '../assets/svg/inventory-svgrepo-com.svg';
import aboutIcon from '../assets/svg/about-faq-help-question-svgrepo-com.svg';
import cartIcon from '../assets/svg/cart-shopping-svgrepo-com.svg';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-content">
        <ul>
          <li><a href="#home"><img src={homeIcon} alt="Home" className="icon" /><span className="text">Home</span></a></li>
          <li><a href="#products"><img src={inventoryIcon} alt="Inventory" className="icon" /><span className="text">Products</span></a></li>
          <li><a href="#about"><img src={aboutIcon} alt="About" className="icon" /><span className="text">About</span></a></li>
          <li><a href="#cart"><img src={cartIcon} alt="Cart" className="icon" /><span className="text">Cart</span></a></li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;

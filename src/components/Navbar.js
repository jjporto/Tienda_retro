import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../components/assets/LOGO_FINAL-sinfondo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-logo'>
        <img src={logo} alt='El Camerino Logo' className='logo-image' />
        <h1 className='navbar-title'>El CAMERINO</h1>
      </div>
      
      <div className='navbar-links'>
        <Link to='/' className='navbar-link'>Home</Link>
        <Link to='/about' className='navbar-link'>About</Link>
        <Link to='/contact' className='navbar-link'>Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import MotionPhotosAutoIcon from '@mui/icons-material/MotionPhotosAuto';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
      <MotionPhotosAutoIcon sx={{ fontSize: 30 }}></MotionPhotosAutoIcon>Algo-Visualizer
        
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href="#homes" className='nav-links' onClick={closeMobileMenu}>
                Home
             </a>
            </li>
            <li className='nav-item' target="About" onClick={closeMobileMenu}>
             <a href="#about" className='nav-links'>About us</a>
                
             
            </li>
            <li className='nav-item'>
              <a href="#contact" className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </a>
            </li>
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;
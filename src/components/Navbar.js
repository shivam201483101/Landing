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
           <a href="https://shivam201483101.github.io/Landing"> <MotionPhotosAutoIcon sx={{ fontSize: 30 }}></MotionPhotosAutoIcon></a>Algo-Visualizer
        
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a className='nav-links' onClick={closeMobileMenu}>
                Home
             </a>
            </li>
            <li className='nav-item' target="About" onClick={closeMobileMenu}>
             <a className='nav-links'>About us</a>
                
             
            </li>
            <li className='nav-item'>
              <a className='nav-links' onClick={closeMobileMenu}>
                Contact Us
              </a>
            </li>

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
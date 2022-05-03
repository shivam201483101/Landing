import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from './videos/video-2.mp4';


function HeroSection() {
 
  return (
    <div className='hero-container'>
     
      <video src={video} autoPlay loop muted type="video/mp4" />
      <h1>There is more to Learn</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <a href='https://shivam201483101.github.io/mini-proj/'><Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button></a>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Take-A-Sneek<i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
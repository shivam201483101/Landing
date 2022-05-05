import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import video from './videos/video-2.mp4';


function HeroSection() {
 
  return (
    <div id="homes" className='hero-container'>
     
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
        <a href="https://youtube.com/channel/UC_Gz1XxAbtVnWWcgqWGsbcQ" target="_blank"><Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
         
        >
          Watch-Tutorial<i className='far fa-play-circle' />
        </Button></a>
      </div>
    </div>
  );
}

export default HeroSection;
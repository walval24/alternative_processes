import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  const history = useHistory();

  const handleGetInfo = () => {
    history.push('/services');
  };

  const handleEnroll = () => {
    window.location.href = 'https://alternative-processes-s-school1.teachable.com/p/alternative-processes-academy?coupon_code=LAUNCHPRICE&product_id=4748381';
  }; 
  return (
    <div className='hero-container'>
      <video className="hero-video" src="/public/videos/video-test.mp4" autoPlay loop muted />
      <h1>Alternative Processes</h1>
      <p>Discover the Academy</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleGetInfo} // Reindirizza a /services
        >
          GET INFO
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={handleEnroll} // Reindirizza a www.google.com
        >
          ENROLL
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

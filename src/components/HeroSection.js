import React from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';
import { Button } from 'react-bootstrap';
import './HeroSection.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function HeroSection() {
  const history = useHistory();

  const handleGetInfo = () => {
    history.push('/academy');
  };

  const handleEnroll = () => {
    window.open('https://alternative-processes-s-school1.teachable.com/p/alternative-processes-academy?coupon_code=LAUNCHPRICE&product_id=4748381', '_blank');
  };

  return (
    <div className='hero-container'>
      <video className="hero-video" src="videos/video-test.mp4" autoPlay loop muted />
      <h1>Alternative Processes</h1>
      <p>Discover the Academy</p>
      <div className='hero-btns'>
        <Button className="btn get-info-btn" onClick={handleGetInfo}>INFO</Button>
        <Button className="btn enroll-btn" onClick={handleEnroll}>ENROLL</Button>
      </div>
    </div>
  );
}

export default HeroSection;

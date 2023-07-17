import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
  return (
    <>
      <HeroSection />
     {/*  <Cards /> */}
      <Footer />
    </>
  );
}

export default Home;

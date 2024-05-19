import React from 'react';
import Navbarnew from './frontend/server/carbon/src/components/landing/Navbar2';
import './landing.css'; 
import Footer from './frontend/server/carbon/src/components/landing/footer';

const Landing = () => {
  return (
    <div>
      <div className='landing-nav'>
        <Navbarnew />
      </div>
      <div className='background-video'>
        <video autoPlay muted loop>
          <source src={require("./video.mp4")} type="video/mp4" />  {/* Ensure correct path to video file */}
          Your browser does not support the video tag.
        </video>
        <div className='landing-box1'>
          <div className='landing-box1-text1'>
            <h3>The complete solution for the carbon market of the future</h3>
          </div>
          <div className='landing-box-1-text2'>
            <h4>Pinecone Labs is the only carbon market solution powered by the world’s leading banks. The platform fundamentally transforms how carbon credits are transacted, managed, and retired.</h4>
          </div>
        </div>
      </div>
      <div className='login-register-container'>
        <button className='login-register-button'>Login</button>
        <button className='login-register-button'>Register</button>
      </div>
      <div className='flex-container'>
        <div className='flex-box'>
          <h2>Simplicity</h2>
          <h4>Seamlessly search trade, manage and retire carbon credits on simple platform</h4>
        </div>
        <div className='flex-box'>
          <h2>Accessibility</h2>
          <h4>Immediate access to fully-onboarded buyers and sellers, registries and exchanges around the world</h4>
        </div>
        <div className='flex-box'>
          <h2>Transparency</h2>
          <h4>Traceable ownership, total price transparency, and complete historical credit data for real time transaction insights.</h4>
        </div>
        <div className='flex-box'>
          <h2>Sustainability</h2>
          <h4>Traceable ownership, total price transparency, and complete historical credit data for real time transaction insights.</h4>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;

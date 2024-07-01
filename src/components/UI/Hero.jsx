import React from 'react'
import "../../styles/Hero.css";
import heroDarkImg from '../../images/hero-img.png'

import lightImg from "../../images/light-hero-bg.jpg";


const Hero = ({theme}) => {
  return (
    <section className="hero-section" id='home'>
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <div>
              <h2>We're Creating Perfect</h2>
              <h2>Digital Products To</h2>
              <h2 className="highlight">Promote Your Brand</h2>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>
            <div className="hero-btns">
              <button className="primary-btn">Get Started Now</button>
              <button className="secondary-btn">Discover More</button>
            </div>
          </div>
          {/* img */}
          <div className="hero-img">
            <img src={theme === 'light-theme' ? lightImg : heroDarkImg} alt="hero-img"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero

import React from 'react'
import '../../styles/Testimonial.css'
import Slider from 'react-slick/lib/slider'

import ava01 from '../../images/ava-1.jpg'
import ava02 from '../../images/ava-2.jpg'
import ava03 from "../../images/ava-3.jpg";

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        slidesToSlide: true,
    }

  return (
    <section>
      <div className="container">
        <div className="slider-content-top">
          <h6 className="subtitle">Testimonials</h6>
          <h2>
            Trusted by more than{" "}
            <span className="highlight">5,000 customers</span>
          </h2>
        </div>

        <div className="slider-wrapper">
          <Slider {...settings}>
            <div className="slider-item">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <div className="customer-details">
                <div className="customer-img">
                  <img src={ava01} alt="" />
                </div>
                <div>
                  <h5 className="customer-name">Jhon Doe</h5>
                  <p className="description">Client</p>
                </div>
              </div>
            </div>

            <div className="slider-item">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <div className="customer-details">
                <div className="customer-img">
                  <img src={ava02} alt="" />
                </div>
                <div>
                  <h5 className="customer-name">Alon Doe</h5>
                  <p className="description">Client</p>
                </div>
              </div>
            </div>

            <div className="slider-item">
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>

              <div className="customer-details">
                <div className="customer-img">
                  <img src={ava03} alt="" />
                </div>
                <div>
                  <h5 className="customer-name">Ahad</h5>
                  <p className="description">Client</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Testimonial

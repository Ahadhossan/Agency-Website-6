import React from "react";
import "../../styles/newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-wrapper">
          {/* newsletter text */}
          <div className="newsletter-content">
            <h6 className="subtitle">Let's work</h6>
            <h2>
              Explore the <span className="highlight">hidden</span> ideas and
              subscribe!
            </h2>
          </div>
          {/* newsletter from */}
          <div className="newsletter-from">
            <input type="email" placeholder="Email" />
            <button className="secondary-btn subscribe-btn">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

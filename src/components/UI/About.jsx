import React from 'react'
import '../../styles/about.css'

import aboutImg from '../../images/about-us.jpg'

const chooseData = [
  {
    icon: "ri-wifi-line",
    title: "First working process",
    desc: "Lorem ipsum dolor sit amet. Fusce estlibero, maximus id ligula quis, lobortis dignissim metus.",
  },
  {
    icon: "ri-team-line",
    title: "Dedicated team",
    desc: "Lorem ipsum dolor sit amet. Fusce estlibero, maximus id ligula quis, lobortis dignissim metus.",
  },
  {
    icon: "ri-landscape-line",
    title: "24/7 Hours support",
    desc: "Lorem ipsum dolor sit amet. Fusce estlibero, maximus id ligula quis, lobortis dignissim metus.",
  },
];

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-content">
            <h6 className="subtitle">Why choose us</h6>
            <h2>Specialist in aviding clients on</h2>
            <h2 className="highlight">financial challen</h2>
            <p className="description about-content-desc">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce est
              libero, maximus id ligula quis, lobortis dignissim metus. Fusce
              fringilla turpis dapibus mi egestas, vel posuere mi pellentesque.
            </p>

            <div className='choose-item-wrapper'>
              {chooseData.map((item, index) => (
                <div className="choose-us-item" key={index}>
                  <span className="choose-us-icon">
                    <i class={item.icon}></i>
                  </span>
                  <div>
                    <h4 className="choose-us-title">{item.title}</h4>
                    <p className="description">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-img">
            <img src={aboutImg} alt=''></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About

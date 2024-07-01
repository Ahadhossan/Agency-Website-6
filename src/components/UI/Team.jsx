import React from "react";
import "../../styles/team.css";

import team01 from "../../images/team-01.png";
import team02 from "../../images/team-02.png";
import team03 from "../../images/team-03.png";
import team04 from "../../images/team-04.png";

const teamMembers = [
  {
    imgUrl: team01,
    name: "Courtny Hurry",
    position: "Product Developer",
  },
  {
    imgUrl: team02,
    name: "Lindas Walton",
    position: "Front-End Developer",
  },
  {
    imgUrl: team03,
    name: "Harry Martin",
    position: "Product Developer",
  },
  {
    imgUrl: team04,
    name: "Jhon Cooper",
    position: "CEO & Sr. Developer",
  },
];

const Team = () => {
  return (
    <section className="our-team">
      <div className="container">
        <div className="team-content">
          <h6 className="subtitle">Our Team</h6>
          <h2>
            Meet with <span className="highlight">our team</span>
          </h2>
        </div>

        <div className="team-wrapper">
          {teamMembers.map((item, index) => (
            <div className="team-item" key={index}>
              <div className="team-img">
                <img src={item.imgUrl} alt=""></img>
              </div>
              <div className="team-details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>
                <div className="team-member-social">
                  <span>
                    <i className="ri-linkedin-line"></i>
                  </span>
                  <span>
                    <i className="ri-twitter-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;

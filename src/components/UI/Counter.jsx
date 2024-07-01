import React from "react";
import "../../styles/counter.css";

const counterData = [
  {
    number: "5K+",
    text: "Clients",
  },
  {
    number: 350,
    text: "running Projects",
  },
  {
    number: 900,
    text: "Projects Completed",
  },
];

const Counter = () => {
  return (
    <section className="counter" id="projects">
      <div className="container">
        <div className="counter-wrapper">
          { counterData.map((item,index)=>(
             <div className="counter-item" key={index}>
            <h3 className="counter-number">{item.number}</h3>
            <h4 className="counter-title">{item.text}</h4>
            </div>
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default Counter;

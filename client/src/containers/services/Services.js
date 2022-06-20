import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// components
import FlipCard from "../../components/flip-card/FlipCard";
import Sidebar from "../../components/sidebar/Sidebar";
// style
import "./Services.scss";
// import unsplash1 from "../../img/unsplash1.webp";
// import hotel2 from "../../img/hotel-2.jpg";
// import hotel3 from "../../img/hotel-3.jpg";

const Services = () => {
  const cards = [
    {
      id: "1",
      variant: "click",
      front: "Tree Maintenance",
      back: "Since 1982, American Arbor has worked proudly in the tree care industry with keen interest in both the quality and the practicality of services we offer.",
    },
    {
      id: "2",
      variant: "click",
      front: "Landscape Management",
      back: "Many properties, including HOAs, golf courses and commercial complexes, can benefit greatly utilizing a management plan created by American Arbor. This tool, which begins with an inventory of existing trees and their needs, enable the property manager to recognize and prioritize maintenance tasks so that needs may be addresses over time, within budget and have true merit.",
    },
    {
      id: "3",
      variant: "click",
      front: "Tree Preservation",
      back: "Water displaces soil gases, including oxygen, and oxygen-deprived roots lead to vulnerable trees and premature decline. This availability of gaseous oxygen to tree roots is a fundamental physiological need, and tree deprived of it due to over-irrigation and/or poor drainage suffers over time. This is fact.",
    },
  ];

  return (
    <div className="services">
      <Sidebar />
      <div className="services-container">
        <div className="row h-100">
          <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
            {cards.map((card) => (
              <FlipCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;

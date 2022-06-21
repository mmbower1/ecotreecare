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
      back: "Since 1982, American Arbor has worked proudly in the tree care industry with keen interest in both the quality and the practicality of services we offer. American Arbor takes great pride in offering tree management tasks and plans that make good sense; avoiding excessive and/or damaging practices, which unfortunately remain quite common in the green industry. While we receive many requests to perform various unnecessary and deleterious tasks, we are proud to avoid them, and work instead to serve our clients’ long-term interests. Our service is comprehensive. We see more than the unobvious pruning of your valuable landscape trees and other plants.",
      image:
        "https://media.istockphoto.com/photos/man-cutting-trees-using-an-electrical-chainsaw-and-professional-picture-id470746249?k=20&m=470746249&s=612x612&w=0&h=ykXzfebfVpdoJBUDzcFCa5N1Aj3fElnfwMxc66neVO8=",
    },
    {
      id: "2",
      variant: "click",
      front: ["Landscape Management", <br />, "(Click for more)"],
      back: "Many properties, including HOAs, golf courses and commercial complexes, can benefit greatly utilizing a management plan created by American Arbor. This tool, which begins with an inventory of existing trees and their needs, enable the property manager to recognize and prioritize maintenance tasks so that needs may be addresses over time, within budget and have true merit. American Arbor takes great pride in avoiding superfluous tasks and those that actually result in increased maintenance over time. This is especially the case with regard to pruning: much of what we see is simply contraindicated, and for a plethora of reasons. Management plans by American Arbor address only the true pruning needs and other factors influencing each tree’s health and structure.",
      image:
        "https://fivestarlandscape.com/wp-content/uploads/2016/09/Side_Yard_Landscape_Design.jpg",
    },
    {
      id: "3",
      variant: "click",
      front: "Tree Preservation",
      back: "Water displaces soil gases, including oxygen, and oxygen-deprived roots lead to vulnerable trees and premature decline. This availability of gaseous oxygen to tree roots is a fundamental physiological need, and tree deprived of it due to over-irrigation and/or poor drainage suffers over time. This is fact. Nature provides for soil enhancing organic layers under the trees and other plants. Such layers have many benefits: improved soil structure and fertility, better gas exchange, increased beneficial microbial activity and soil temperature moderation, just to name a few.",
      image: "https://ychef.files.bbci.co.uk/976x549/p07n19vr.jpg",
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

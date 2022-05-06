import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
// style
import "./AboutUs.scss";
import ropeClimb from "../../img/rope-climb.png";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Sidebar />
      <div className="about-us-reading">
        <h2>About American Arbor Tree Care Professionals</h2>
        <img src={ropeClimb} alt="" className="rope-climb-img" />
        <p>
          <i
            className="fas fa-angle-double-right"
            style={{ color: "green" }}
          ></i>
          &nbsp;American Arbor began when its owner, Matthew Moore, had in his
          youth been working in Yosemite National Park removing hazardous trees
          for the N.P.S. It was there in Yosemite that Matthew learned about the
          careful precision required to safely remove some of the world's
          largest trees; his Miwok/Paiute mentors being among the world's most
          skilled technicians.
          <br />
          <br />
          <i
            className="fas fa-angle-double-right"
            style={{ color: "green" }}
          ></i>
          &nbsp;Yosemite is also where Mr. Moore honed his big-wall climbing and
          rope-work skills, much of this knowledge applicable to working in
          trees. This experience, combined with six years of college bioscience
          studies, a profound respect for nature's design and a love of being
          outdoors, resulted in American Arbor's continuing service since 1982.
          <br />
          <br />
          <i
            className="fas fa-angle-double-right"
            style={{ color: "green" }}
          ></i>
          &nbsp;American Arbor emphasizes minimalism in pruning; striving always
          to preserve the natural shapes of landscape trees while giving needed
          attention to the growing conditions which ultimately determine the
          success and longevity of landscape investments.
          <br />
          <br />
          <i
            className="fas fa-angle-double-right"
            style={{ color: "green" }}
          ></i>
          &nbsp;Call American Arbor today to learn more about how we can help
          optimize your property's potential and long-term sustainability.
          <br />
          <br />
          <i
            className="fas fa-angle-double-right"
            style={{ color: "green" }}
          ></i>
          &nbsp;Serving Davis, Woodland, Sacramento, Colusa, Arbuckle, Dunnigan,
          Winters and all of the Greater Sacramento Valley.
        </p>
        <p>
          <br />
          <br />
          Matthew Moore
          <br />
          <br />
          Certified Arborist # 761
          <br />
          <br />
          International Society of Arboriculture
          <br />
          <br />
          Contractors License #672627
        </p>
      </div>
    </div>
  );
};

export default AboutUs;

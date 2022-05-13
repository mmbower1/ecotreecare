import React, { useEffect, useState } from "react";

// components
import Picture from "../../components/picture/Picture";
import Sidebar from "../../components/sidebar/Sidebar";

// style
import "./Gallery.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// images
import screenshot1 from "../../img/screenshot1.png";
import screenshot2 from "../../img/screenshot2.png";
import screenshot3 from "../../img/screenshot3.png";
import screenshot4 from "../../img/screenshot4.png";
import screenshot5 from "../../img/screenshot5.png";
import screenshot6 from "../../img/screenshot6.png";
import screenshot7 from "../../img/screenshot7.png";
import screenshot8 from "../../img/screenshot8.png";
import screenshot9 from "../../img/screenshot9.png";
// import screenshot10 from '../../img/screenshot10.png';
// import screenshot11 from '../../img/screenshot11.png';
// import screenshot12 from '../../img/screenshot12.png';

const Gallery = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    setPictures([]);
  }, []);

  return (
    <div className="gallery-page">
      <Sidebar />
      <Carousel>
        {/* <div className="gallery-container"> */}
        <div className="gallery-photo">
          <img src={screenshot1} alt="" />
        </div>
        <div className="gallery-photo">
          <img src={screenshot2} alt="" />
          {/* <h2>Sometimes even nature gets the best of us!</h2> */}
        </div>
        <div className="gallery-photo">
          <img src={screenshot3} alt="" />
        </div>
        <div className="gallery-photo">
          <img src={screenshot4} alt="" />
        </div>
        <div className="gallery-photo">
          <img src={screenshot9} alt="" />
          {/* <h2>Covid friendly and always keeing it sanitary.</h2> */}
        </div>
        <div className="gallery-photo">
          <img src={screenshot6} alt="" />
        </div>
        <div className="gallery-photo">
          <img src={screenshot7} alt="" />
          {/* <h2>Landscaping is a must</h2> */}
        </div>
        <div className="gallery-photo">
          <img src={screenshot8} alt="" />
          {/* <h2>Safe rope usage</h2> */}
        </div>
        <div className="gallery-photo-last">
          <img src={screenshot5} alt="" />
          {/* <h2>Rope takedown</h2> */}
        </div>
        {/* <div className="gallery-photo">
          <img src={screenshot10} alt=""/>
        </div>
        <div className="gallery-photo">
          <img src={screenshot11} alt=""/>
        </div>
        <div className="gallery-photo">
          <img src={screenshot12} alt=""/>
        </div> */}
        {/* </div> */}
      </Carousel>
    </div>
  );
};

export default Gallery;

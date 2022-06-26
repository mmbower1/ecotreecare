import React, { useEffect, useState } from "react";

// components
import Picture from "../../components/picture/Picture";
import Sidebar from "../../components/sidebar/Sidebar";

// style
import "./Gallery.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// images
import screenshot13 from "../../img/screenshot13.jpeg";
import screenshot11 from "../../img/screenshot11.png";
import screenshot12 from "../../img/screenshot12.png";
import screenshot14 from "../../img/screenshot14.jpeg";
import screenshot16 from "../../img/screenshot16.jpeg";
import screenshot15 from "../../img/screenshot15.jpeg";
import screenshot17 from "../../img/screenshot17.jpeg";
import screenshot9 from "../../img/screenshot9.png";

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
          <img src={screenshot15} alt="" />
        </div>
        <div className="gallery-photo">
          <img src={screenshot11} alt="" />
          {/* <h2>Sometimes even nature gets the best of us!</h2> */}
        </div>
        <div className="gallery-photo">
          <img src={screenshot16} alt="" />
        </div>
        <div className="gallery-photo">
          <img src={screenshot14} alt="" />
        </div>
        <div className="gallery-photo">
          <img src={screenshot9} alt="" />
          {/* <h2>Covid friendly and always keeing it sanitary.</h2> */}
        </div>
        <div className="gallery-photo">
          <img src={screenshot13} alt="" />
        </div>
        <div className="gallery-photo">
          <img src={screenshot12} alt="" />
          {/* <h2>Safe rope usage</h2> */}
        </div>
        <div className="gallery-photo-last">
          <img src={screenshot17} alt="" />
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

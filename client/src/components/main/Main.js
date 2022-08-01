import React from "react";
import { Link } from "react-router-dom";
// components
import Explanation from "../explanation/Explanation";
import Overview from "../overview/Overview";
import SubscribeButton from "../subscribeButton/SubscribeButton";
// style
import "./Main.scss";
// photos
import photo1 from "../../img/hotel-1.jpg";
import photo2 from "../../img/hotel-2.jpg";
import photo3 from "../../img/hotel-3.jpg";

const Main = () => {
  return (
    <div className="main">
      {/* <i className="fab fa-google"></i> */}
      {/* <SubscribeButton /> */}
      <i className="fab fa-google"></i> - Subscribe to us!
      <div className="gallery">
        <figure className="gallery-item">
          <img src={photo1} alt="photo-1" className="gallery-photo" />
          <h1 className="heading">Maintenance</h1>
          <div className="overview-reading-1">
            <p>
              Since 1982, American Arbor has worked proudly in the tree care
              industry with keen interest in quality tree and garden work.
              <Link to="/services" style={{ color: "#fff" }}>
                (learn more)
              </Link>
            </p>
          </div>
        </figure>
        <figure className="gallery-item">
          <img src={photo2} alt="photo-2" className="gallery-photo" />
          <h1 className="heading">Landscaping</h1>
          <div className="overview-reading-1">
            <p>
              Many properties, including HOA’s, golf courses and commercial
              complexes, can benefit greatly utilizing a management
              plan...&nbsp;
              <Link to="/services" style={{ color: "#fff" }}>
                (learn more)
              </Link>
            </p>
          </div>
        </figure>
        <figure className="gallery-item">
          <img src={photo3} alt="photo-3" className="gallery-photo" />
          <h1 className="heading" id="heading-3">
            Preservation
          </h1>
          <div className="overview-reading-1">
            <p>
              California’s drought has provided plant health care providers with
              a long-sought opportunity to address a very real problem...
              <Link to="/services" style={{ color: "#fff" }}>
                (learn more)
              </Link>
            </p>
          </div>
        </figure>
      </div>
      <Overview />
      <Explanation />
    </div>
  );
};

export default Main;

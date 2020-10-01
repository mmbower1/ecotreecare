import React from 'react';
// components
import Explanation from '../explanation/Explanation';
import Overview from '../overview/Overview';
// style
import './Main.scss';
// photos
import photo1 from '../../img/hotel-1.jpg';
import photo2 from '../../img/hotel-2.jpg';
import photo3 from '../../img/hotel-3.jpg';

const Main = () => {
  return (
    <div className="main">
      {/* <i className="fab fa-google"></i> */}
      &nbsp;<h1>G - Leave us a google review!</h1>
      <div className="gallery">
        <figure className="gallery-item">
          <img src={photo1} alt="photo-1" className="gallery-photo" />
          <h1 className="heading">Tree Maintenance</h1>
        </figure>
        <figure className="gallery-item">
          <img src={photo2} alt="photo-2" className="gallery-photo" />
          <h1 className="heading">Landscape Management</h1>
        </figure>
        <figure className="gallery-item">
          <img src={photo3} alt="photo-3" className="gallery-photo" />
          <h1 className="heading">Tree Preservation</h1>
        </figure>
      </div>
      <Overview />
      <Explanation />
    </div>

  )
}

export default Main

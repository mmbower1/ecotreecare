import React, { useEffect, useState } from 'react';

// components
import Picture from '../../components/picture/Picture';
import Sidebar from '../../components/sidebar/Sidebar';

// style
import './Gallery.scss';

const Gallery = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    setPictures([]);
  }, []);

  return (
    <div className="gallery">
      <Sidebar />
      <h1>American Arbor Tree Care Professionals Gallery</h1>
      {pictures.map(picture =>
        <Picture key={picture.id} picture={picture} />
      )}
    </div>
  )
}

export default Gallery

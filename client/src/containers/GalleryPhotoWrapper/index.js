import React from 'react';
import './styles.css';

function GalleryPhotoWrapper(props) {
  return (
    <div className="gallery-wrapper">{props.children}</div>
  )
}

export default GalleryPhotoWrapper;
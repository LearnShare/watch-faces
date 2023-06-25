import React from 'react';

import {
  FaceBasic,
} from '@/faces';

import './index.scss';

function Gallery() {
  return (
    <div className="gallery">
      <div className="item">
        <FaceBasic />
        <h3>basic</h3>
      </div>
    </div>
  );
}

export default Gallery;

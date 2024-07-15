import React from 'react';
import video from '../../assets/sample-video.mp4';
import './Video.css';

function Video({ onOverlayClick }) {
  return (
    <div className='videoBlock' onClick={onOverlayClick}>
      <video src={video} autoPlay muted controls onClick={(e) => e.stopPropagation()}></video>
    </div>
  );
}

export default Video;

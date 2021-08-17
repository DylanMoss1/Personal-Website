import React from 'react';
import '../../../App.css';
import './MainTitle.css';

function MainTitle() {
  return (
    <div className='main-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>DYLAN MOSS</h1>
      <p>My Personal Portfolio</p>
    </div>
  );
}

export default MainTitle;
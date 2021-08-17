import React from 'react';
import '../../../App.css';
import './MainTitle.css';
import FadePanel from '../FadePanel/FadePanel';

function MainTitle() {
  return (
    <div className='main-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>DYLAN MOSS</h1>
      <p>My Personal Portfolio</p>
      <FadePanel />
    </div>
  );
}

export default MainTitle;
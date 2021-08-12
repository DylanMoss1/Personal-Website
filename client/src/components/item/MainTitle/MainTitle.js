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

/*
<div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='about'
        >
          ABOUT
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='projects'
        >
          PROJECTS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          link='contact'
        >
          CONTACT
        </Button>
      </div>
*/
import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My Projects</h1>
      <h2>These are some are some of the most recent projects I have been working on</h2>
      <h2>Click the images to go to their GitHub repositories</h2>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/rubiks_cube.png'
              text="Rubik's Cube Solver"
              alt="A human sized autonomous robot"
              label='Python / C++'
              path='https://github.com/'
            />
            <CardItem
              src='images/rubiks_cube.png'
              text="Rubik's Cube Solver"
              alt="A human sized autonomous robot"
              label='Python / C++'
              path='https://github.com/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text="Rubik's Cube Solver"
              alt="A human sized autonomous robot"
              label='Python / C++'
              path='https://github.com/'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-9.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
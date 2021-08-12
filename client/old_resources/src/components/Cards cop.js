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
              src='images/img-9.jpg'
              text="Gary the Autonomous Robot"
              alt="A human sized autonomous robot"
              label='Python / C++'
              link='https://github.com/DylanMoss1'
            />
            <CardItem
              src='images/img-9.jpg'
              text="Self solving Rubik's cube"
              alt="Rendered Rubik's Cube"
              label='Java / OpenGL'
              link='https://github.com/DylanMoss1'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/project_gary.png'
              text="Gary the Autonomous Robot"
              alt="A human sized autonomous robot"
              label='Python / C++'
              link='https://github.com/DylanMoss1'
            />
            <CardItem
              src='images/this_website.png'
              text="This Website"
              alt="Image of this website"
              label='React JS'
              link='https://github.com/DylanMoss1'
            />
            <CardItem
              src='images/gantt_chart.png'
              text="Gantt Chart Website"
              alt="Gantt Chart"
              label='Full Stack'
              link='https://github.com/DylanMoss1'
            /> 
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
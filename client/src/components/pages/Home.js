import React from 'react'; 
import '../../App.css';
import MainTitle from '../item/MainTitle/MainTitle';
import AboutMe from '../item/AboutMe/AboutMe';
import PersonalProjects from '../item/PersonalProjects/PersonalProjects';


function Home() {
    return (
        <>
            <MainTitle />
            <AboutMe />
            <PersonalProjects />
        </>
    )
}

export default Home;

/*
<Panel name="Project Gary" img="..." text="..." />
            <Panel name="Rubik's Cube Solver" img="..." text="..." />
            <Panel name="This website" img="..." text="..." />
            <Panel name="Gantt Chart Creator" img="..." text="..." />
            <Panel name="Other Projects" img="..." text="..." />


*/
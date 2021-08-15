import React from 'react'; 
import '../../App.css';
import InfoSection from '../item/InfoSection/InfoSection';
import HeadingTitle from "../item/HeadingTitle/HeadingTitle";
import { homeObjOne, homeObjTwo } from '../item/InfoSection/Data';

function Projects() {
    return (
        <>
            <div style={{background:"black"}}>
                <HeadingTitle text="Projects" />
                <InfoSection {...homeObjOne} />
                <InfoSection {...homeObjTwo} />
            </div>
        </>
    )
}

export default Projects;
import React from 'react'; 
import '../../App.css';
import InfoSection from '../item/InfoSection/InfoSection';
import HeadingTitle from "../item/HeadingTitle/HeadingTitle";
import { garyInfoPanel, rubiksInfoPanel, portfolioInfoPanel, ganttInfoPanel, otherInfoPanel } from '../item/InfoSection/ProjectsData';

function Projects() {
    return (
        <>  
            <HeadingTitle text="Projects" />
            <InfoSection {...garyInfoPanel} />
            <InfoSection {...rubiksInfoPanel} />
            <InfoSection {...portfolioInfoPanel} />
            <InfoSection {...ganttInfoPanel} />
            <InfoSection {...otherInfoPanel} />
        </>
    )
}

export default Projects;
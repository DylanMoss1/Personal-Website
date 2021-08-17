import React from 'react'; 
import '../../App.css';
import MainTitle from '../item/MainTitle/MainTitle';
import InfoSection from '../item/InfoSection/InfoSection';
import { aboutMeInfoPanel, projectsInfoPanel, contactMeInfoPanel } from '../item/InfoSection/HomeData';

function Home() {
    return (
        <>
            <MainTitle />
            <InfoSection {...aboutMeInfoPanel} />
            <InfoSection {...projectsInfoPanel} />
            <InfoSection {...contactMeInfoPanel} />
        </>
    )
}

export default Home;

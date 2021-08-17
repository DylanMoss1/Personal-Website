import React from 'react'; 
import '../../App.css';
import HeadingTitle from "../item/HeadingTitle/HeadingTitle";
import InfoSection from '../item/InfoSection/InfoSection';
import { whoAmIInfoPanel, compSciInterestsInfoPanel, outsideOfCompSciInfoPanel } from '../item/InfoSection/AboutMeData';

function AboutMe() {
    return (
        <> 
            <HeadingTitle text="About Me" />
            <InfoSection {...whoAmIInfoPanel} />
            <InfoSection {...compSciInterestsInfoPanel} />
            <InfoSection {...outsideOfCompSciInfoPanel} />
        </>
    )
}

export default AboutMe;
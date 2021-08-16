import React from 'react'; 
import '../../App.css';
import HeadingTitle from "../item/HeadingTitle/HeadingTitle";
import InfoSection from '../item/InfoSection/InfoSection';
import { garyInfoPanel, rubiksInfoPanel } from '../item/InfoSection/Data';

function AboutMe() {
    return (
        <> 
            <HeadingTitle text="About Me" />
            <InfoSection {...garyInfoPanel} />
            <InfoSection {...rubiksInfoPanel} />
            <InfoSection {...garyInfoPanel} /> 
        </>
    )
}

export default AboutMe;
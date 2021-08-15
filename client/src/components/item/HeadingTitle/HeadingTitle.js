import React from 'react'; 
import '../../../App.css';
import './HeadingTitle.css';

function HeadingTitle({text}) {
    return (
        <>
            <h1 class="headingTitle">{text}</h1>
        </>
    )
}

export default HeadingTitle;
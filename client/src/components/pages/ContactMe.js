import React from 'react'; 
import '../../App.css';
import HeadingTitle from "../item/HeadingTitle/HeadingTitle";
import ContactMeForm from '../item/ContactMeForm/ContactMeForm';

function ContactMe() {
    return (
        <>
            
            <HeadingTitle text="Contact Me" />
            <ContactMeForm />
        </>
    )
}

export default ContactMe;
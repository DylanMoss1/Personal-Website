import React from 'react';
import '../../../App.css';
import { Container, Form, FormH1, FormContent, FormInput, FormLabel, FormButton, FormWrap } from './ContactMeFormElements';

function MultiLineInput() {
    return (
        <textarea rows="6" cols="40" name="message" style={{"margin-bottom":"50px"}}></textarea>
    )
}

function ContactMeForm() {
    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Send me a message</FormH1>
                            <FormLabel htmlFor="for">Name</FormLabel>
                            <FormInput type="name" required />
                            <FormLabel htmlFor="for">Your email address</FormLabel>
                            <FormInput type="email" required />
                            <FormLabel htmlFor="for">Message</FormLabel>
                            <MultiLineInput />
                            <FormButton type="submit">Continue</FormButton>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}
  
export default ContactMeForm;
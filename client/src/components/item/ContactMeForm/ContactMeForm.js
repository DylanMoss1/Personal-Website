import React, { useState, useEffect } from 'react';
import '../../../App.css';

import { Container, Form, FormH1, FormContent, FormInput, FormLabel, FormButton, FormWrap, Text } from './ContactMeFormElements';

function MultiLineInput() {
    return (
        <textarea rows="6" cols="40" name="message" style={{"margin-bottom":"50px"}}></textarea>
    )
}

function ContactMeForm( {success} ) {
    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form action="/contactme-submit" method="POST">
                            <FormH1>Send me a message</FormH1>
                            <FormLabel htmlFor="for">Name</FormLabel>
                            <FormInput name="name" type="name" required />
                            <FormLabel htmlFor="for">Your email address</FormLabel>
                            <FormInput name="email" type="email" required />
                            <FormLabel htmlFor="for">Message</FormLabel>
                            <MultiLineInput name="message"/>
                            <FormButton type="submit">Submit</FormButton>
                            <Text>{success ? "Message submitted" : ""}</Text>:
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
}

export default ContactMeForm;
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position: relative;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    overflow: hidden;
    background: #000;
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    margin-bottom: 5rem;
    flex-direction: column;
    justify-content: center; 

    @media screen and (max-width: 400px) {
        height: 80%
    }
`;

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #010101;
    max-width: 700px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 20px auto;
    padding: 60px 70px 30px 70px;
    border-radius: 15px; 
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
    outline: 5px solid #01bf71;

    @media screen and (max-width: 400px) {
        padding: 20px 32px 20px 32p;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 30px;
    color: #fff;
    font-size: 25px;
    font-weight: 500;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`; 

export const FormButton = styled.button`
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer; 
`; 

export const Text = styled.span`
    text-align: center;
    margin-top: 40px;
    color: #01bf71;
    font-size: 20px;
`;

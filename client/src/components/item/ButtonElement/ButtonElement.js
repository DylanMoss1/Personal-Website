import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ButtonInternalLink = styled(Link)`
    border-radius: 50px; 
    background: ${({primary, darkPanelColour}) => (primary ? '#01BF71' : (darkPanelColour ? '#fff' : '#010606'))};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({darkPanelColour}) => (darkPanelColour ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: cener;
    transition: all 0.1s ease-in-out;
    text-decoration: none;

    &:hover { 
        transition: all 0.2 ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`;

export const ButtonExternalLink = styled.a`
    border-radius: 50px; 
    background: ${({primary, darkPanelColour}) => (primary ? '#01BF71' : (darkPanelColour ? '#fff' : '#010606'))};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({darkPanelColour}) => (darkPanelColour ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: cener;
    transition: all 0.1s ease-in-out;
    text-decoration: none;

    &:hover { 
        transition: all 0.2 ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#01BF71')};
    }
`;
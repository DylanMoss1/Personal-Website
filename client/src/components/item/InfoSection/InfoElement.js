import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
    background: ${({darkPanelBg}) => (darkPanelBg ? '#010606' : '#f9f9f9')};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1500px;
    margin-right: auto;
    margin-left: auto;
    padding: 120px 120px;
    justify-content: center; 
`

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: mixmax(auto, 1fr);
    aligh-items: center;
    width: auto;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
    @media screen and (max-width: 768px) { 
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    margin-left: ${({leftText}) => (leftText ? '0px' : '130px')};
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.div`
    color: ${({darkPanelText}) => (darkPanelText ? '#01bf71' : '#00985a')};
    font-size: 16px;
    line-height: 16px;
    font weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase; 
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({darkPanelText}) => (darkPanelText ? '#f7f8fa' : '#010606')};
    @media screen and (max-width: 480px) {
        font-size: 32px; 
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkPanelText}) => (darkPanelText ? '#fff' : '#010606')};
`

export const BtnWrap = styled.div`
    display: flex; 
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    border-radius: 20px;
    margin-bottom: 10px;
    margin-left: ${({leftImg}) => (leftImg ? '0px' : '130px')};
    margin-right: 0px;
    width: auto;
    height: 330px;
`
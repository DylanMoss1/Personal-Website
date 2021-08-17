import React, { useState } from 'react'
import { Button } from '../ButtonElement/ButtonElement';
import { ArrowForward, ArrowRight } from '../Arrows/Arrows';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElement';

const InfoSection = ({darkPanel, id, imgStart, topLine, headline, description1, description2, description3, button, buttonLabel, img, circleImg, alt, arrow}) => {
    
    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <InfoContainer darkPanelBg={darkPanel} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper leftText={!imgStart}>
                                <TopLine darkPanelText={darkPanel}>{topLine}</TopLine>
                                <Heading darkPanelText={darkPanel}>{headline}</Heading>
                                <Subtitle darkPanelText={darkPanel}>{description1}</Subtitle>
                                <Subtitle darkPanelText={darkPanel}>{description2}</Subtitle>
                                <Subtitle darkPanelText={darkPanel}>{description3}</Subtitle>
                                {button ? 
                                <BtnWrap>
                                    <Button to="/" onMouseEnter={onHover} onMouseLeave={onHover} darkPanelColour={darkPanel}>{buttonLabel}&nbsp;{arrow ? (hover ? <ArrowForward /> : <ArrowRight />) : ""}</Button>
                                </BtnWrap> : ""}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} leftImg={imgStart} circleImg={circleImg}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )

}

export default InfoSection
import React, { useState } from 'react'
import { Button } from '../ButtonElement/ButtonElement';
import { ArrowForward, ArrowRight } from '../Arrows/Arrows';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElement';

const InfoSection = ({darkPanel, id, imgStart, topLine, headline, description1, description2, buttonLabel, img, alt}) => {
    
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
                            <TextWrapper>
                                <TopLine darkPanelText={darkPanel}>{topLine}</TopLine>
                                <Heading darkPanelText={darkPanel}>{headline}</Heading>
                                <Subtitle darkPanelText={darkPanel}>{description1}</Subtitle>
                                <Subtitle darkPanelText={darkPanel}>{description2}</Subtitle>
                                <BtnWrap>
                                    <Button to="/" onMouseEnter={onHover} onMouseLeave={onHover}>{buttonLabel}&nbsp;{hover ? <ArrowForward /> : <ArrowRight />}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} leftImg={darkPanel}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )

}

export default InfoSection
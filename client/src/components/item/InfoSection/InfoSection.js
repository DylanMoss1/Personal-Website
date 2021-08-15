import React, { useState } from 'react'
import { Button } from '../ButtonElement/ButtonElement';
import { ArrowForward, ArrowRight } from '../Arrows/Arrows';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElement';

const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description1, description2, buttonLabel, img, alt}) => {
    
    const [hover, setHover] = useState(false);
    
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description1}</Subtitle>
                                <Subtitle darkText={darkText}>{description2}</Subtitle>
                                <BtnWrap>
                                    <Button to="/" onMouseEnter={onHover} onMouseLeave={onHover}>{buttonLabel}&nbsp;{hover ? <ArrowForward /> : <ArrowRight />}</Button>
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt}/>
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )

}

export default InfoSection
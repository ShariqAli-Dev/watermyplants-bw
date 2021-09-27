import React from 'react';

//styled imports
import {
  AboutContainer,
  AboutWrapper,
  AboutRow,
  Column1,
  TextWrapper,
  // TopLine,
  Heading,
  Subtitle,
  Column2,
  Img,
  ImgWrap,
} from './styledabout';

export default function AboutUs({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
}) {
  return (
    <AboutContainer lightBg={lightBg} id={id}>
      <AboutWrapper>
        <AboutRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <Heading darkText={darkText}>{headline}</Heading>

              <Subtitle darkText={darkText}>{description}</Subtitle>
            </TextWrapper>
          </Column1>

          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </AboutRow>
      </AboutWrapper>
    </AboutContainer>
  );
}

import styled from 'styled-components'

export const AboutContainer =  styled.div `
      color: #fff;
      background: black;
      background: ${({lightBg}) => (lightBg ? '#E0E7FF' : '#312E81')};
      @media screen and (max-width: 768px) {
            padding: 100px 0;
      }
`

export const AboutWrapper = styled.div`
      display: grid;
      z-index: 1;
      height: 860px;
      width: 100%;
      max-width: 1100px;
      margin-right: auto;
      margin-left: auto;
      padding: 0 24px;
      justify-content: center;
`

export const AboutRow = styled.div `
      margin-left: 20px;
      display: grid;
      grid-auto-columns: minmax(auto, 1fr);
      align-items: center;
      grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col2 col1'`)};
      @media screen and (max-width: 768px) {
            grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' col2'` : `'col1 col1' 'col2 col2'`)}
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

export const TextWrapper = styled.div `
      max-width: 540px;
      padding-top: 0;
      padding-bottom: 60px;
      margin-left: 2vw;
      @media screen and  (max-width: 768px) {
            border-left: none;
            margin-left: 0;
      };
`

export const TopLine = styled.p`
      color: #fff;
      font-size: 16px;
      line-height: 16px;
      font-weight: 700;
      letter-spacing: 1.4px;
      text-transform: uppercase;
      margin-bottom: 16px;
      font-family: 'Montserrat';
      text-decoration: underline;
      margin-left: 2vw;
      text-shadow: 2px 1px black; 
           
      
` 

export const Heading = styled.h1 `
      margin-bottom: 24px;
      font-size: 48px;
      line-height: 1.1;
      font-weight: 600;
      font-family: 'Raleway';
      margin-left: 2vw; 
      color: ${({darkText}) => (darkText ? '#6366F1' : '#34D399')};
      text-shadow: 2px 1px black;
      @media screen and (max-width: 480px) {
            font-size: 32px;
      }
`

export const Subtitle =  styled.p `
      max-width: 440px;
      margin-bottom: 35px;
      font-size: 18px;
      line-height: 24px;
      color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
      font-family: 'Raleway';
      margin-left: 2vw; 
`

export const ImgWrap = styled.div `
      max-width: 555px;
      height: 100%;

`

export const Img = styled.img `
      width: 100%;
      margin: 0 0 10px 0;
      padding-right: 0;
`
import React from 'react';
import styled, { css } from 'styled-components';
import { withPrefix } from 'gatsby';
import Img from 'gatsby-image';

const Container = styled.div`
  height: 500px;
  position: relative;  
  @media(max-width: 768px) {
    height: 350px;
  }
  .gatsby-image-outer-wrapper {
    height: 100%;
    img {
      object-position: center 35% !important;
    }
  }
`;

const BannerImage = styled(Img)`
  height: 100%;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.65);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

const BrandingImage = styled.img.attrs({
  src: withPrefix('/logo.png'),
  alt: 'branding'
})`
  width: 140px;
  display: block;
  margin: 0 auto;
  @media(max-width: 768px) {
    width: 80px;
  }
`;


const ImageContainer = styled.div`
  margin-right: 18px;
  @media(max-width: 768px) {
    margin-right: 0;
    margin-bottom: 13px;
  }
`;

const TextContainer = styled.div`
  @media(max-width: 768px) {
    text-align: center;
  }
`;

const bannerTypo = css`
  color: ${props => props.theme.white};
`;

const Title = styled.h1`
  ${bannerTypo}
  font-size: 44px;
  font-weight: bold;
  line-height: 46px;
  @media(max-width: 768px) {
    font-size: 37px;
  }
`;

const Subtitle = styled.p`
  ${bannerTypo}
  font-size: 23px;
  @media(max-width: 768px) {
    font-size: 19px;
  }
`;

const Banner = props => {
  const { bannerImage } = props;
  return (
    <Container>
      <BannerImage style={{ height: '100%' }} sizes={bannerImage.sizes} />
      <InnerContainer>
        <ImageContainer>
          <BrandingImage />
        </ImageContainer>
        <TextContainer>
          <Title>MicroBenz</Title>
          <Subtitle>Geek + Writer + Reader + Eater since 1995</Subtitle>
        </TextContainer>
      </InnerContainer>
    </Container>
  );
};

export default Banner;

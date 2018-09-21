import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media(max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SkillImage = styled.img.attrs({
  src: props => withPrefix(props.img),
  alt: props => props.title
})`
  width: 200px;
  height: 100%;
  @media(max-width: 768px) {
    width: 125px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
  padding-left: 15px;
  @media(max-width: 768px) {
    padding-left: 0;
    text-align: center;
    padding-top: 15px;
  }
`;

const Title = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

const SkillCard = ({ img, title, subtitle }) => (
  <Container>
    <SkillImage img={img} />
    <TextContainer>
      <Title>{title}</Title>
      {subtitle}
    </TextContainer>
  </Container>
);

export default SkillCard;

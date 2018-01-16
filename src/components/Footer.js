import React from 'react';
import styled from 'styled-components';

import colors from '../colors';

const Container = styled.div`
  background-color: ${colors.blue};
  display: flex;
  height: 40px;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const Label = styled.p`
  color: ${colors.white};
  text-align: center;
  font-weight: 500;
  font-size: 18px;
`;

const Sublabel = Label.extend`
  font-weight: 400;
  @media(max-width: 768px) {
    font-size: 16px;
  }
`;

const Heart = styled.span`
  color: ${colors.gmailRed};
`;

const Footer = () => (
  <Container>
    <Label>Code with <Heart>&hearts;</Heart> by @microbenz</Label>
    <Sublabel>This site is hosted on GitHub, powered by Gatsby.</Sublabel>
  </Container>
);

export default Footer;

import React from 'react';
import { withPrefix } from 'gatsby-link';
import styled from 'styled-components';

import { SectionTitle, SectionDescription, Paragraph, Link } from '../Shared/Typo';
import { SectionContainer } from '../Shared/Container';
import FontAwesome from '../Shared/FontAwesome';
import colors from '../../colors';

const Avatar = styled.img.attrs({
  src: withPrefix('./me.png')
})`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: block;
  margin: 20px auto;
`;

const Name = Paragraph.extend`
  text-align: center;
  font-size: 30px;
  font-weight: 500;
  @media(max-width: 768px) {
    font-size: 22px;
  }
`;

const CurrentJob = Paragraph.extend`
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  @media(max-width: 768px) {
    font-size: 20px;
  }
`;

const TmtHighlight = styled.span`
  color: ${colors.orange};
  font-weight: bold;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px 0;
  @media(max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const CircleIcon = styled.div`
  width: ${props => props.size || '30'}px;
  height: ${props => props.size || '30'}px;
  border-radius: 50%;
  background: ${props => props.color || colors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: ${props => props.isLast ? '0' : '15'}px;
  @media(max-width: 768px) {
    margin-bottom: 20px;
    margin-right: ${props => (props.isLastMobile || props.isLast) ? '0' : '15'}px;
  }
`;

const Me = () => (
  <SectionContainer>
    <SectionTitle>My name is Benz</SectionTitle>
    <SectionDescription>I define myself in 4 words: Geek, Writer, Reader and Eater</SectionDescription>
    <Avatar />
    <Name>Tananan Tangthanachaikul (Benz)</Name>
    <CurrentJob>Full-Stack Developer at <Link href="https://www.takemetour.com"><TmtHighlight>TakeMeTour</TmtHighlight></Link></CurrentJob>
    <ContactContainer>
      <Link href="https://www.facebook.com/MicroBenz">
        <CircleIcon color={colors.facebookBlue} size={60}>
          <FontAwesome name="facebook" size={30} color={colors.white} />
        </CircleIcon>
      </Link>
      <Link href="https://www.github.com/MicroBenz">
        <CircleIcon color={colors.purpleGithub} size={60}>
          <FontAwesome name="github" size={30} color={colors.white} />
        </CircleIcon>
      </Link>
      <Link href="mailto:microbenz.prob@gmail.com" noNewTab>
        <CircleIcon color={colors.gmailRed} size={60} isLastMobile>
          <FontAwesome name="envelope-o" size={30} color={colors.white} />
        </CircleIcon>
      </Link>
      <Link href="https://microbenz.in.th/">
        <CircleIcon color={colors.greenMedium} size={60}>
          <FontAwesome name="medium" size={30} color={colors.white} />
        </CircleIcon>
      </Link>
      <Link href="https://www.instagram.com/benz2202/">
        <CircleIcon color={colors.instagramRainbow} size={60} isLast>
          <FontAwesome name="instagram" size={30} color={colors.white} />
        </CircleIcon>
      </Link>
    </ContactContainer>
  </SectionContainer>
);

export default Me;

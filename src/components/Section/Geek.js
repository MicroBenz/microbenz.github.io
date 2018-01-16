import React from 'react';
import styled from 'styled-components';
import { withPrefix } from 'gatsby-link';
import moment from 'moment-timezone';

import { SectionTitle, SectionDescription, Paragraph, Link } from '../Shared/Typo';
import { SectionContainer } from '../Shared/Container';
import ReactIcon from '../Animated/ReactIcon';
import SkillCard from '../Card/SkillCard';
import colors from '../../colors';

moment.tz.setDefault('Asia/Bangkok');

const TeamReactContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const TeamReactTitle = Paragraph.extend`
  font-size: 32px;
  font-weight: 500;
  margin-top: -20px;
  color: ${colors.blue};
  text-align: center;
`;

const TeamReactDescription = Paragraph.extend`
  font-size: 20px;
  text-align: center;
`;

const Subtitle = Paragraph.extend`
  font-size: 18px;
`;

const SkillsContainer = styled.div`
  padding-top: 50px;
`;

const Column = styled.div.attrs({
  className: 'column is-6'
})`
  ${props => !props.noMargin && `
    margin-bottom: 20px;
    @media(max-width: 768px) {
      margin-bottom: 40px;
    }
  `}
`;

const Geek = () => (
  <SectionContainer>
    <SectionTitle>Geek</SectionTitle>
    <SectionDescription>Graduate from Computer Engineering. {moment().diff(moment('2016', 'YYYY'), 'year')} years experience in Web Development.</SectionDescription>
    <TeamReactContainer>
      <ReactIcon size={200} />
      <TeamReactTitle>{'<TeamReact />'}</TeamReactTitle>
      <TeamReactDescription>Familiar with React and it&apos;s ecosystem (e.g. <Link href="https://redux.js.org/">Redux</Link> / <Link href="https://www.styled-components.com/">styled-components</Link> / <Link href="https://github.com/acdlite/recompose">recompose</Link>)</TeamReactDescription>
    </TeamReactContainer>
    <SkillsContainer>
      <div className="columns is-multiline">
        <Column>
          <SkillCard
            img="./geek/javascript.png"
            title="JavaScript"
            subtitle={<Subtitle>Experience in ES6, ES7. Also some of Front-end JavaScript library (Vue.js, Angular, jQuery)</Subtitle>}
          />
        </Column>
        <Column>
          <SkillCard
            img="./geek/nodejs.png"
            title="Node.js"
            subtitle={<Subtitle>Experience on Node.js as Back-end API Server, especially <Link href="https://expressjs.com/">Express</Link></Subtitle>} />
        </Column>
        <Column>
          <SkillCard
            img="./geek/python.png"
            title="Python"
            subtitle={<Subtitle>Once use on my senior project. Deep down into socket package to implements networking over UDP protocol</Subtitle>} />
        </Column>
      </div>
    </SkillsContainer>
  </SectionContainer>
);

export default Geek;

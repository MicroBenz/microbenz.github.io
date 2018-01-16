import styled from 'styled-components';

import colors from '../../colors';

export const SectionTitle = styled.h1`
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  line-height: 70px;
  @media(max-width: 768px) {
    font-size: 46px;
    line-height: 56px;
  }
`;

export const SectionDescription = styled.p`
  text-align: center;
  font-size: 22px;
  font-weight: 400;
  color: ${colors.blue};
  margin-bottom: 25px;
  @media(max-width: 768px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  color: ${props => props.color || colors.grey};
`;

export const Link = styled.a.attrs({
  target: props => props.noNewTab ? '' : '_blank',
  rel: props => props.noNewTab ? '' : 'noopener noreferrer'
})`
  color: ${props => props.color || colors.green};
`;

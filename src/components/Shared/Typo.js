import styled from 'styled-components';

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  @media(max-width: 768px) {
    font-size: 46px;
  }
`;

export const SectionDescription = styled.h3`
  text-align: center;
  font-size: 25px;
  font-weight: 400;
  font-style: italic;
  @media(max-width: 768px) {
    font-size: 20px;
  }
`;

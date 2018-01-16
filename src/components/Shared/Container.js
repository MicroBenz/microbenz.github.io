import styled from 'styled-components';

export const SectionContainer = styled.div`
  padding: 40px 0;
  @media(max-width: 768px) {
    padding: 40px 25px 20px;
    ${props => props.isLast && 'padding-bottom: 40px;'}
  }
`;

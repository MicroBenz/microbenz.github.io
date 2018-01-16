import React from 'react';
import styled from 'styled-components';

import { Link } from '../Shared/Typo';
import FontAwesome from '../Shared/FontAwesome';
import colors from '../../colors';

const Container = styled.div`
  background-color: ${colors.greenMedium};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MoreText = styled.p`
  color: ${colors.white};
  font-size: 36px;
`;

const MoreCard = ({ count = 0 }) => (
  <Link href="https://microbenz.in.th">
    <Container>
      <MoreText>+{count} More at</MoreText>
      <FontAwesome name="medium" size={36} color="#ffffff" />
    </Container>
  </Link>
);

export default MoreCard;

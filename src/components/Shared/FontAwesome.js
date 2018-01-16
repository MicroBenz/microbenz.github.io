import styled from 'styled-components';

import colors from '../../colors';

export default styled.i.attrs({
  className: props => `fa fa-${props.name}`,
  'aria-hidden': 'true'
})`
  color: ${props => props.color || colors.black};
  font-size: ${props => props.size || 22}px !important;
`;

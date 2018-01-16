import React, { PureComponent } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import styled from 'styled-components';
import lottie from 'lottie-web';
import { withPrefix } from 'gatsby-link';

const LottieDiv = styled.div.attrs({
  size: props => props.size || 400
})`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin-top: -20px;
`;

export default class ReactIcon extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false
    };
    this.onChangeVisible = this.onChangeVisible.bind(this);
  }

  onChangeVisible(isVisible) {
    if (!this.state.isVisible && isVisible) {
      this.setState({ isVisible });
      lottie.loadAnimation({
        container: document.getElementById('react-lottie'),
        renderer: 'svg',
        path: withPrefix('./react.json')
      });
    }
  }

  render() {
    const { size } = this.props;
    return (
      <VisibilitySensor offset={{ top: 20 }} onChange={this.onChangeVisible}>
        <LottieDiv id="react-lottie" size={size} />
      </VisibilitySensor>
    );
  }
}

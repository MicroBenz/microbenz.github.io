import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import 'bulma/bulma.sass';

const Title = styled.h1`
  font-size: 50px;
  color: red;
`;

const TemplateWrapper = props => {
  const { children } = props;
  return (
    <div>
      <Helmet
        title="Gatsby Default Starter"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <section className="hero is-medium is-primary is-bold">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Primary bold title
            </h1>
            <h2 className="subtitle">
              Primary bold subtitle
            </h2>
          </div>
        </div>
      </section>
      <div>
        <Title>Hello it's me</Title>
        {children()}
      </div>
    </div>
  );
};

export default TemplateWrapper;

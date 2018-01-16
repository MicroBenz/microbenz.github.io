import React from 'react';
import Helmet from 'react-helmet';
import { ThemeProvider, injectGlobal } from 'styled-components';

import 'bulma/bulma.sass';
import 'font-awesome/css/font-awesome.min.css';

const theme = {
  main: '#0c4c8a',
  white: '#ffffff',
  gray: '#353535'
};

/* eslint-disable */
injectGlobal`
  body {
    font-family: 'Catamaran', sans-serif;
    color: ${theme.gray};
  }
`;
/* eslint-enable */

const TemplateWrapper = props => {
  const { children } = props;
  return (
    <div>
      <Helmet
        title="เบนซ์นะจ๊ะ - MicroBenz"
        meta={[
          { name: 'description', content: '' },
          { name: 'keywords', content: '' },
        ]}
      />
      <ThemeProvider theme={theme}>
        {children()}
      </ThemeProvider>
    </div>
  );
};

export default TemplateWrapper;

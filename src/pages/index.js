import React from 'react';
import Link from 'gatsby-link';

import Banner from '../components/Banner';
import Geek from '../components/Geek';
import Writer from '../components/Writer';

const IndexPage = () => (
  <div>
    <Banner />
    <div className="container">
      <Geek />
      <Writer />
    </div>
  </div>
);

export default IndexPage

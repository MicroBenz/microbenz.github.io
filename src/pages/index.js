import React from 'react';
import { injectGlobal } from 'styled-components';

import Banner from '../components/Banner';
import Me from '../components/Section/Me';
import Geek from '../components/Section/Geek';
import Writer from '../components/Section/Writer';
import Footer from '../components/Footer';

/* eslint-disable */
injectGlobal`
  body {
    color: #4a4a4a;
  }
  .column {
    @media(max-width: 768px) {
      padding: 0;
    }
  }
  .columns {
    margin-right: 0;
    margin-left: 0;
  }
`;
/* eslint-enable */

export const query = graphql`
  query StoriesQuery {
    allMediumPost {
      edges {
        node {
          id
          title
          uniqueSlug
          virtuals {
            subtitle
            previewImage {
              imageId
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`;

const IndexPage = (props) => {
  const { data } = props;
  return (
    <div>
      <Banner />
      <div className="container">
        <Me />
        <Geek />
        <Writer posts={data.allMediumPost.edges.map(e => e.node)} />
      </div>
      <Footer />
    </div>
  );
};

export default IndexPage;

import React from 'react';
import Link from 'gatsby-link';
import { injectGlobal } from 'styled-components';

import Banner from '../components/Banner';
import Geek from '../components/Geek';
import Writer from '../components/Writer';

/* eslint-disable */
injectGlobal`
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
        <Geek />
        <Writer posts={data.allMediumPost.edges.map(e => e.node).slice(0, 4)} />
      </div>
    </div>
  );
};

export default IndexPage;

import React, { Fragment } from 'react';
import { injectGlobal } from 'styled-components';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Banner from '../components/Banner';
import Me from '../components/Section/Me';
import Geek from '../components/Section/Geek';
import Writer from '../components/Section/Writer';
import Footer from '../components/Footer';

/* eslint-disable */
injectGlobal`
  body {
    color: #4a4a4a !important;
  }
  .column {
    @media(max-width: 768px) {
      padding: 0 !important;
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
    file(relativePath: { eq: "banner.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        sizes(maxWidth: 1240) {
          ...GatsbyImageSharpSizes
        }
      }
    }
    # bannerImage: imageSharp(id: { regex: "/banner.jpg/" }) {
    #   sizes(maxWidth: 1240) {
    #     ...GatsbyImageSharpSizes
    #   }
    # }
  }
`;

const IndexPage = (props) => {
  const { data } = props;
  const { allMediumPost, file } = data;
  return (
    <Layout>
      <Fragment>
        <Banner bannerImage={file.childImageSharp} />
        <div className="container">
          <Me />
          <Geek />
          <Writer posts={allMediumPost.edges.map(e => e.node)} />
        </div>
        <Footer />
      </Fragment>
    </Layout>
  );
};

export default IndexPage;

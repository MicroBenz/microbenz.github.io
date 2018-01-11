import React from 'react';
import styled from 'styled-components';

import { SectionTitle } from './Shared/Typo';
import { SectionContainer } from './Shared/Container';
import BlogCard from './BlogCard';

const Column = styled.div.attrs({
  className: 'column is-3'
})`
  @media(max-width: 768px) {
    padding: 10px !important;
  }
`;

const Writer = props => {
  const { posts } = props;
  return (
    <SectionContainer>
      <SectionTitle>Writer</SectionTitle>
      <div className="columns is-multiline">
        {posts.map(post => (
          <Column key={post.id}>
            <BlogCard {...post} />
          </Column>
        ))}
      </div>
    </SectionContainer>
  );
};

export default Writer;

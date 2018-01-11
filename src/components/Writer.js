import React from 'react';
import styled from 'styled-components';

import { SectionTitle, SectionDescription } from './Shared/Typo';
import { SectionContainer } from './Shared/Container';
import BlogCard from './BlogCard';

const Columns = styled.div.attrs({
  className: 'columns is-multiline'
})`
  margin-top: 0;
  padding-top: 15px;
  @media(max-width: 768px) {
    padding-top: 5px;
  }
`;

const Column = styled.div.attrs({
  className: 'column is-3'
})`
  @media(max-width: 768px) {
    padding: 10px 15px !important;
  }
`;

const Writer = props => {
  const { posts } = props;
  return (
    <SectionContainer>
      <SectionTitle>Writer</SectionTitle>
      <SectionDescription>As seen on <a href="https://microbenz.in.th" target="_blank" rel="noopener noreferrer">Medium</a>. Currently all of my writing stuff is in Thai.</SectionDescription>
      <Columns>
        {posts.map(post => (
          <Column key={post.id}>
            <BlogCard {...post} />
          </Column>
        ))}
      </Columns>
    </SectionContainer>
  );
};

export default Writer;

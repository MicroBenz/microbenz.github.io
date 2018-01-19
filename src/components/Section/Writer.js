import React from 'react';
import styled from 'styled-components';

import { SectionTitle, SectionDescription, Link } from '../Shared/Typo';
import { SectionContainer } from '../Shared/Container';
import BlogCard from '../Card/BlogCard';
import MoreCard from '../Card/MoreCard';

const Columns = styled.div.attrs({
  className: 'columns is-multiline'
})`
  margin-top: 0;
  padding-top: 15px;
  @media(max-width: 768px) {
    padding-top: 5px;
    display: flex;
    flex-wrap: nowrap !important;
    overflow-x: scroll;
    margin-left: -25px !important;
    margin-right: -25px !important;
    flex-direction: row;
    padding-left: 15px;
  }
`;

const Column = styled.div.attrs({
  className: props => props.size ? `column is-${props.size}` : 'column'
})`
  ${props => props.desktopHide && 'display: none !important;'}
  @media(max-width: 768px) {
    padding: 10px 15px !important;
    flex: none !important;
    width: 250px !important;
    margin-right: 15px;
    ${props => props.mobileHide && 'display: none !important;'}
    ${props => props.desktopHide && 'display: inherit !important;'}
  }
`;

const Writer = props => {
  const { posts } = props;
  return (
    <SectionContainer isLast>
      <SectionTitle>Writer</SectionTitle>
      <SectionDescription>As seen on <Link href="https://microbenz.in.th">Medium</Link>. I&apos;m not considering myself as a blogger. I&apos;m just the man who love to share something by writing.</SectionDescription>
      <Columns>
        {posts.slice(0, 2).map(post => (
          <Column size={6} key={post.id}>
            <BlogCard {...post} />
          </Column>
        ))}
        {posts.slice(2, 5).map(post => (
          <Column size={3} key={post.id}>
            <BlogCard {...post} />
          </Column>
        ))}
        {posts.slice(5).map(post => (
          <Column size={3} key={post.id} desktopHide>
            <BlogCard {...post} />
          </Column>
        ))}
        <Column size={3} mobileHide>
          <MoreCard count={posts.length - 5} />
        </Column>
      </Columns>
    </SectionContainer>
  );
};

export default Writer;

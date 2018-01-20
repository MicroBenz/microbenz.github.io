import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
`;

const Image = styled.img`
  display: block;
`;

const TitleContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  height: 50px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.65) 0%,rgba(0,0,0,0.65) 27%,rgba(0,0,0,0) 100%);
`;

const BlogTitle = styled.h2`
  font-weight: bold;
  color: white;
  font-size: 23px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const BlogCard = props => {
  const { title, uniqueSlug, virtuals } = props;
  return (
    <a
      href={`https://microbenz.in.th/${uniqueSlug}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Container>
        <Image
          src={`https://cdn-images-1.medium.com/fit/c/600/360/${virtuals.previewImage.imageId}`}
          alt={title}
        />
        <TitleContainer>
          <BlogTitle>{title}</BlogTitle>
        </TitleContainer>
      </Container>
    </a>
  );
};

export default BlogCard;

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border-radius: 10px;
`;

const Image = styled.img`
  border-radius: 10px 10px 0 0;
  display: block;
`;

const TitleContainer = styled.div`
  border: 1px solid rgba(0,0,0,.1);
  padding: 10px;
  border-radius: 0 0 10px 10px;
  display: flex;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

const BlogTitle = styled.h2`
  font-weight: bold;
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
          src={`https://cdn-images-1.medium.com/fit/c/1200/720/${virtuals.previewImage.imageId}`}
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

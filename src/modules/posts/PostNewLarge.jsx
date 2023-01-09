import React from 'react';
import styled from 'styled-components';
import PostCatygory from './layout/PostCatygory';
import { PostImage, PostMeta, PostTitle } from './layout';

const PostNewLargeStyle = styled.div`
  .post {
    &-img {
      display: block;
      margin-bottom: 25px;
      height: 433px;
      border-radius: 16px;
    }
    &-title {
      margin-bottom: 10px;
    }
  }
`;

const PostNewLarge = () => {
  return (
    <PostNewLargeStyle>
      <PostImage
        url="https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2294&q=80"
        alt="photo"
        to="/blog"
      />
      <PostCatygory>Kiến thức</PostCatygory>
      <PostTitle size="big">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </PostTitle>
      <PostMeta />
    </PostNewLargeStyle>
  );
};

export default PostNewLarge;

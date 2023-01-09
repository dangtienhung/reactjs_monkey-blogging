import React from 'react';
import styled from 'styled-components';
import PostCatygory from './layout/PostCatygory';
import { PostImage, PostMeta, PostTitle } from './layout';

const PostFeatureItemStyles = styled.div`
  width: 100%;
  border-radius: 16px;
  position: relative;
  height: 196px;
  .post {
    &-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
    &-overlay {
      position: absolute;
      inset: 0;
      border-radius: inherit;
      background-color: rgba(0, 0, 0, 0.75);
      mix-blend-mode: multiply;
      opacity: 0.6;
    }
    &-content {
      position: absolute;
      inset: 0;
      color: white;
      padding: 20px;
      z-index: 10;
    }
    &-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 16px;
    }
  }
  @media screen and (min-width: 1024px) {
    height: 272px;
  }
  @media screen and (max-width: 1023.98px) {
    .post {
      &-content {
        padding: 15px;
      }
    }
  }
`;

const PostFeatureItem = () => {
  return (
    <PostFeatureItemStyles>
      <PostImage
        url="https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2662&q=80"
        alt="unplast"
      />
      <div className="post-overlay"></div>
      <div className="post-content">
        <div className="post-top">
          <PostCatygory>Kiến thức</PostCatygory>
          <PostMeta />
        </div>
        <PostTitle size="big">
          Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
        </PostTitle>
      </div>
    </PostFeatureItemStyles>
  );
};

export default PostFeatureItem;

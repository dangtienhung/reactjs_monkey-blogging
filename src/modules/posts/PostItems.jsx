import React from 'react';
import styled from 'styled-components';
import { PostCatygory, PostMeta, PostTitle } from './layout';

const PostItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  .post {
    &-image {
      height: 202px;
      margin-bottom: 20px;
      display: block;
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 16px;
      }
    }
  }
`;

const PostItems = () => {
  return (
    <PostItemStyle>
      <div className="post-image">
        <img
          src="https://images.unsplash.com/photo-1570993492881-25240ce854f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2290&q=80"
          alt=""
        />
      </div>
      <PostCatygory>Kiến thức</PostCatygory>
      <PostTitle size="nomal">
        Hướng dẫn setup phòng cực chill dành cho người mới toàn tập
      </PostTitle>
      <PostMeta />
    </PostItemStyle>
  );
};

export default PostItems;

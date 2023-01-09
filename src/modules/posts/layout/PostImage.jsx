import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PostImageStyle = styled.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }
`;

const PostImage = ({ className = '', url = '', alt = '', to = null }) => {
  if (to) {
    return (
      <NavLink to={to} style={{ display: 'block' }}>
        <PostImageStyle className={`post-img ${className}`}>
          <img src={url} alt={alt} loading="lazy" />
        </PostImageStyle>
      </NavLink>
    );
  }
  return (
    <PostImageStyle className={`post-img ${className}`}>
      <img src={url} alt={alt} loading="lazy" />
    </PostImageStyle>
  );
};

export default PostImage;

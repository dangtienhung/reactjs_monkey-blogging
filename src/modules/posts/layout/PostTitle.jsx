import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const PostTitleStyle = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  line-height: 1.5;
  a {
    display: block;
  }
  ${(props) =>
    props.size === 'nomal' &&
    css`
      font-size: 18px;
    `};
  ${(props) =>
    props.size === 'big' &&
    css`
      font-size: 22px;
    `};
`;

const PostTitle = ({ children, className = '', size = 'nomal', to = '/' }) => {
  return (
    <PostTitleStyle className={`post-title ${className}`} size={size}>
      <NavLink to={to}>{children}</NavLink>
    </PostTitleStyle>
  );
};

export default PostTitle;

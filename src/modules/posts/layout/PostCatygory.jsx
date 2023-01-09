import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const PostCategoryStyle = styled.div`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 10px;
  color: ${(props) => props.theme.gray6B};
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  background-color: #f3f3f3;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
  ${(props) =>
    props.type === 'primary' &&
    css`
      background-color: ${(props) => props.theme.grayF3};
    `};
  ${(props) =>
    props.type === 'secondary' &&
    css`
      background-color: white;
    `};
  margin-bottom: 14px;
  a {
    display: block;
  }
`;

const PostCatygory = ({
  children,
  type = 'primary',
  className = '',
  to = '/',
}) => {
  return (
    <PostCategoryStyle type={type} className={className}>
      <NavLink to={to}>{children}</NavLink>
    </PostCategoryStyle>
  );
};

export default PostCatygory;

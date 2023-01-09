import React from 'react';
import styled, { css } from 'styled-components';

const PostTitleStyle = styled.h3`
   font-family: 'Montserrat', sans-serif;
   font-weight: 600;
   line-height: 1.5;
   display: block;
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

const PostTitle = ({ children, className = '', size = 'nomal' }) => {
   return (
      <PostTitleStyle className={`post-title ${className}`} size={size}>
         {children}
      </PostTitleStyle>
   );
};

export default PostTitle;

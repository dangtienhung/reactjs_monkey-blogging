import React from 'react';
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
`;

const PostCatygory = ({ children, type = 'primary', className = '' }) => {
   return (
      <PostCategoryStyle type={type} className={className}>
         {children}
      </PostCategoryStyle>
   );
};

export default PostCatygory;

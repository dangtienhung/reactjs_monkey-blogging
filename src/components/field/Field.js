import React from 'react';
import styled from 'styled-components';

const FildStyles = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   row-gap: 20px;
   margin-bottom: 40px;
   &:last-child {
      margin-bottom: 0;
   }
`;

const Field = ({ children }) => {
   return <FildStyles>{children}</FildStyles>;
};

export default Field;

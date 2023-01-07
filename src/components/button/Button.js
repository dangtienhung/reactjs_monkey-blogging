import React from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../loading/LoadingSpinner';

const ButtonStyles = styled.button`
   cursor: pointer;
   padding: 0 20px;
   border-radius: 8px;
   line-height: 1;
   color: white;
   font-weight: 600;
   font-size: 18px;
   width: 100%;
   height: ${(props) => props.height || '70px'};
   background-image: linear-gradient(
      to right bottom,
      ${(props) => props.theme.primary},
      ${(props) => props.theme.secondary}
   );
   display: inline-flex;
   align-items: center;
   justify-content: center;
`;

const Button = ({
   type = 'button',
   onClick = () => {},
   children,
   ...props
}) => {
   const { isLoading } = props;
   const child = isLoading ? <LoadingSpinner /> : children;
   return (
      <ButtonStyles type={type} onClick={onClick} {...props}>
         {child}
      </ButtonStyles>
   );
};

export default Button;

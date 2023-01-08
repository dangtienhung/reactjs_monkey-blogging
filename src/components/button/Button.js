import React from 'react';
import styled from 'styled-components';
import LoadingSpinner from '../loading/LoadingSpinner';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

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

/**
 * @param {*} onClick Handler onClick
 * @requires
 * @param {string} type Type of button 'button' | 'submit'
 * @returns
 */

const Button = ({
   type = 'button',
   onClick = () => {},
   children,
   ...props
}) => {
   const { isLoading, to } = props;
   const child = isLoading ? <LoadingSpinner /> : children;
   if (to !== '' && typeof to === 'string') {
      return (
         <NavLink to={to}>
            <ButtonStyles type={type} onClick={onClick} {...props}>
               {child}
            </ButtonStyles>
         </NavLink>
      );
   }
   return (
      <ButtonStyles type={type} onClick={onClick} {...props}>
         {child}
      </ButtonStyles>
   );
};

Button.propTypes = {
   type: PropTypes.oneOf(['button', 'submit']).isRequired,
   isLoading: PropTypes.bool,
   onClick: PropTypes.func,
   children: PropTypes.node,
};

export default Button;

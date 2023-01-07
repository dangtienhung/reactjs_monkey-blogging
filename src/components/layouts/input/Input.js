import React from 'react';
import { useController } from 'react-hook-form';
import styled from 'styled-components';

const InputStyles = styled.div`
   position: relative;
   width: 100%;
   input {
      padding: 20px;
      width: 100%;
      background-color: ${(props) => props.theme.grayLight};
      padding: ${(props) => (props.hasIcon ? '20px 60px 20px 20px' : '20px')};
      border-radius: 8px;
      font-size: 16px;
      border: 1px solid transparent;
      transition: all 0.2s linear;
   }
   input:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.primary};
      background-color: #fff;
   }
   input::-webkit-input-placeholder {
      color: #84878b;
   }
   input::-moz-input-placeholder {
      color: #84878b;
   }
   .icon-eye {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      height: 24px;
      width: 24px;
      cursor: pointer;
   }
`;

const Input = ({ name = '', type = 'text', children, control, ...props }) => {
   const { field } = useController({
      control,
      name,
      defaultValue: '',
   });
   return (
      <InputStyles hasIcon={children ? true : false}>
         <input type={type} id={name} {...field} {...props} />
         {children ? <div className="icon-eye">{children}</div> : null}
      </InputStyles>
   );
};

export default Input;

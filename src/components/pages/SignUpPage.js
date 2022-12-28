import React from 'react';
import styled from 'styled-components';
import Label from '../layouts/label/Label';

const SignUpPageStyles = styled.div`
   /* background-color: ${(props) => props.theme.primary}; */
   min-height: 100vh;
   padding: 40px;
   .logo {
      margin: 0 auto 20px;
   }
   .heading {
      text-align: center;
      color: ${(props) => props.theme.primary};
      font-weight: 600;
      font-size: 40px;
   }
   .field {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      row-gap: 20px;
   }
   .form {
      margin: 0 auto;
      width: 100%;
      max-width: 800px;
   }
   .input {
      padding: 20px;
      width: 100%;
      background-color: ${(props) => props.theme.grayLight};
      border-radius: 8px;
      font-size: 16px;
      border: 1px solid transparent;
      transition: all 0.2s linear;
   }
   .input:focus {
      outline: none;
      border: 1px solid ${(props) => props.theme.primary};
      background-color: #fff;
   }
   .input::-webkit-input-placeholder {
      color: #84878b;
   }
   .input::-moz-input-placeholder {
      color: #84878b;
   }
`;

const SignUpPage = () => {
   return (
      <SignUpPageStyles>
         <div className="container">
            <img
               srcSet="/assets/images/logo/monkey1.png 2x"
               alt=""
               className="logo"
            />
            <h1 className="heading">Mokey Blogging</h1>
            <form className="form">
               <div className="field">
                  <Label htmlFor="fullName" className="label">
                     Full name
                  </Label>
                  <input
                     id="fullName"
                     type="text"
                     className="input"
                     placeholder="Enter your fullname"
                  />
               </div>
            </form>
         </div>
      </SignUpPageStyles>
   );
};

export default SignUpPage;

import React from 'react';
import styled from 'styled-components';

const AuthenticationStyle = styled.div`
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
   .form {
      margin: 0 auto;
      width: 100%;
      max-width: 800px;
      text-align: center;
   }
`;

const AuthenPage = ({ children }) => {
   return (
      <AuthenticationStyle>
         <div className="container">
            <img
               srcSet="/assets/images/logo/monkey1.png 2x"
               alt=""
               className="logo"
            />
            <h1 className="heading">Mokey Blogging</h1>
            {children}
         </div>
      </AuthenticationStyle>
   );
};

export default AuthenPage;

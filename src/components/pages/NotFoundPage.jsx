import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NotFoundPageStyle = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   height: 100vh;
   .logo {
      margin-bottom: 20px;
      display: block;
   }
   .heading {
      font-weight: 600;
      text-align: center;
      font-size: 60px;
   }
   h2 {
      font-size: 40px;
      font-weight: 500;
      text-transform: capitalize;
      text-align: center;
      margin-bottom: 20px;
   }
   .back-to-home {
      background-color: ${(props) => props.theme.primary};
      padding: 8px 32px;
      border-radius: 12px;
      color: #fff;
      text-transform: capitalize;
      font-weight: 500;
      font-size: 16px;
   }
`;

const NotFoundPage = () => {
   return (
      <NotFoundPageStyle>
         <NavLink to={'/'} className="logo">
            <img
               srcSet="/assets/images/logo/monkey1.png 2x"
               alt="monkey blogging"
            />
         </NavLink>
         <h1 className="heading">Oops</h1>
         <h2>Page not found!</h2>
         <NavLink to="/" className={'back-to-home'}>
            Back to home
         </NavLink>
      </NotFoundPageStyle>
   );
};

export default NotFoundPage;

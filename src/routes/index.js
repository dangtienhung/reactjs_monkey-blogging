import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUpPage from '../components/pages/SignUpPage';
import SignInPage from '../components/pages/SignInPage';

const RouterComponent = () => {
   return (
      <Routes>
         <Route path="/sign-up" element={<SignUpPage />} />
         <Route path="/sign-in" element={<SignInPage />} />
      </Routes>
   );
};

export default RouterComponent;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUpPage from '../components/pages/SignUpPage';
import SignInPage from '../components/pages/SignInPage';
import HomePage from '../components/pages/HomePage';
import NotFoundPage from '../components/pages/NotFoundPage';

const RouterComponent = () => {
   return (
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/sign-up" element={<SignUpPage />} />
         <Route path="/sign-in" element={<SignInPage />} />
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   );
};

export default RouterComponent;

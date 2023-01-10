import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignUpPage from '../components/pages/SignUpPage';
import SignInPage from '../components/pages/SignInPage';
import HomePage from '../components/pages/HomePage';
import NotFoundPage from '../components/pages/NotFoundPage';
import PostDetailPage from '../components/pages/detail/PostDetailPage';
import DashboardLayout from '../modules/dashboard/DashboardLayout';
import DashboardPage from '../components/pages/dashboard/DashboardPage';
import { PostManage } from '../modules/posts/pages';

const RouterComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/:slug" element={<PostDetailPage />} />

      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/manage/post" element={<PostManage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default RouterComponent;

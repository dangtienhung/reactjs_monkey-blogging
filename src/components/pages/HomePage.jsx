import React from 'react';
import { auth } from '../../firebase/firebase-config';
import { signOut } from 'firebase/auth';
import styled from 'styled-components';
import { Header } from '../layouts';
import HomeBanner from '../../modules/home/HomeBanner';
import Layout from '../layouts/Layout';
import HomeFeature from '../../modules/home/HomeFeature';
import HomeNewest from '../../modules/home/HomeNewest';

const HomePageStyle = styled.div``;

const HomePage = () => {
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <HomePageStyle>
      <Layout>
        <HomeBanner />
        <HomeFeature />
        <HomeNewest />
      </Layout>
    </HomePageStyle>
  );
};

export default HomePage;

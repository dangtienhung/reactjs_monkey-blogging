import React from 'react';
import styled from 'styled-components';
import { Heading } from '../../components/layouts';
import PostFeatureItem from '../posts/PostFeatureItem';

const HomeFeatureStyle = styled.div``;

const HomeFeature = () => {
   return (
      <HomeFeatureStyle className="home-block">
         <div className="container">
            <Heading>Bài viết nổi bật</Heading>
            <div className="grid-layout">
               <PostFeatureItem />
               <PostFeatureItem />
               <PostFeatureItem />
            </div>
         </div>
      </HomeFeatureStyle>
   );
};

export default HomeFeature;

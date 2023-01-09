import React from 'react';
import styled from 'styled-components';
import { Heading } from '../../components/layouts';
import PostNewItem from '../posts/PostNewItem';
import PostNewLarge from '../posts/PostNewLarge';
import PostItems from '../posts/PostItems';

const HomeNewestStyle = styled.div`
  .layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 40px;
    margin-bottom: 64px;
    align-items: start;
  }
  .sidebar {
    padding: 28px 20px;
    background-color: #f3edff;
    border-radius: 16px;
  }
  @media screen and (max-width: 1023.98px) {
    .layout {
      grid-template-columns: 100%;
    }
    .sidebar {
      padding: 14px 10px;
    }
  }
`;

const HomeNewest = () => {
  return (
    <HomeNewestStyle className="home-block">
      <div className="container">
        <Heading>Mới nhất</Heading>
        <div className="layout">
          <PostNewLarge />
          <div className="sidebar">
            <PostNewItem />
            <PostNewItem />
            <PostNewItem />
          </div>
        </div>
        <div className="grid-layout grid-layout--primary">
          <PostItems />
          <PostItems />
          <PostItems />
          <PostItems />
        </div>
      </div>
    </HomeNewestStyle>
  );
};

export default HomeNewest;

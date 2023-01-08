import React from 'react';
import { auth } from '../../firebase/firebase-config';
import { signOut } from 'firebase/auth';
import styled from 'styled-components';
import { Header } from '../layouts';

const HomePageStyle = styled.div``;

const HomePage = () => {
   const handleSignOut = () => {
      signOut(auth);
   };
   return (
      <HomePageStyle>
         <Header />
         <div>
            <button onClick={handleSignOut}>Sign Out</button>
         </div>
      </HomePageStyle>
   );
};

export default HomePage;

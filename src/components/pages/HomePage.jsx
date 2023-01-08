import React from 'react';
import { auth } from '../../firebase/firebase-config';
import { signOut } from 'firebase/auth';

const HomePage = () => {
   const handleSignOut = () => {
      signOut(auth);
   };
   return (
      <div>
         <button onClick={handleSignOut}>Sign Out</button>
      </div>
   );
};

export default HomePage;

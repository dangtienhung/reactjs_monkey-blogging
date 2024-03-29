import React from 'react';
import styled from 'styled-components';

const SpinnerStyle = styled.div`
   width: ${(props) => props.size};
   height: ${(props) => props.size};
   border-radius: 100%;
   border: ${(props) => props.borderSize} solid white;
   border-top: ${(props) => props.borderSize} solid transparent;
   border-bottom: ${(props) => props.borderSize} solid transparent;
   display: inline-block;
   animation: spinner 1s infinite linear;
   @keyframes spinner {
      100% {
         transform: rotate(360deg);
      }
   }
`;

const LoadingSpinner = ({ size = '40px', borderSize = '4px' }) => {
   return <SpinnerStyle size={size} borderSize={borderSize} />;
};

export default LoadingSpinner;

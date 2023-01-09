import React from 'react';
import styled from 'styled-components';

const HeadingStyle = styled.h2`
  font-size: 28px;
  position: relative;
  margin-bottom: 30px;
  font-weight: 600;
  font-family: 'Montserrat', sans-serif;
  &:before {
    position: absolute;
    content: '';
    width: 50px;
    height: 4px;
    top: 0;
    left: 0;
    transform: translate(0, -150%);
  }
  @media screen and (max-width: 1023.98px) {
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

const Heading = ({ className = '', children }) => {
  return <HeadingStyle className={className}>{children}</HeadingStyle>;
};

export default Heading;

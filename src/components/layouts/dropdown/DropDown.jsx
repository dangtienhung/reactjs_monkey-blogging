import React from 'react';
import { DropDownProvider } from './DropDown-Context';

const DropDown = ({ children, ...props }) => {
  return (
    <DropDownProvider {...props}>
      <div className="relative inline-block w-full">{children}</div>
    </DropDownProvider>
  );
};

export default DropDown;

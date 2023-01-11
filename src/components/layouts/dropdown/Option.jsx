import React from 'react';
import { useDropDown } from './DropDown-Context';

const Option = (props) => {
  const { onClick } = useDropDown();
  return (
    <div
      className="px-5 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-100"
      onClick={onClick}
    >
      {props.children}
    </div>
  );
};

export default Option;

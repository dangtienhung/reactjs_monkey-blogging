import React from 'react';
import { useDropDown } from './DropDown-Context';

const Option = (props) => {
  const { onClick } = props;
  const { setShow } = useDropDown();
  const handleClick = () => {
    onClick && onClick();
    setShow(false);
  };
  return (
    <div
      className="px-5 py-4 cursor-pointer flex items-center justify-between hover:bg-gray-100"
      onClick={handleClick}
    >
      {props.children}
    </div>
  );
};

export default Option;

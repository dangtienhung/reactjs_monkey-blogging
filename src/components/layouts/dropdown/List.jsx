import React from 'react';
import { useDropDown } from './DropDown-Context';

const List = ({ children }) => {
  const { show } = useDropDown();
  return (
    <>
      {show && <div className="absolute top-full left-0 w-full bg-white shadow-sm">{children}</div>}
    </>
  );
};

export default List;

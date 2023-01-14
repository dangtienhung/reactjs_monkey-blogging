import { createContext, useContext, useState } from 'react';

const DropDownContext = createContext();

const DropDownProvider = (props) => {
  const [show, setShow] = useState(false);
  const toggle = () => {
    setShow(!show);
  };
  const values = { show, setShow, toggle };
  return <DropDownContext.Provider value={values}>{props.children}</DropDownContext.Provider>;
};

const useDropDown = () => {
  const context = useContext(DropDownContext);
  if (typeof context === 'undefined') {
    throw new Error('useDropdown must be used within DropdownProvider');
  }
  return context;
};

export { useDropDown, DropDownProvider };

import { createContext, useContext } from 'react';

const DropDownContext = createContext();

const DropDownProvider = (props) => {
  return (
    <DropDownContext.Provider value={props}>
      {props.children}
    </DropDownContext.Provider>
  );
};

const useDropDown = () => {
  const context = useContext(DropDownContext);
  if (typeof context === 'undefined') {
    throw new Error('useDropdown must be used within DropdownProvider');
  }
  return context;
};

export { useDropDown, DropDownProvider };

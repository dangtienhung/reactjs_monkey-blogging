import React from 'react';
import PropTypes from 'prop-types';

const Toggle = (props) => {
  const { on, onClick, ...rest } = props;
  return (
    <label>
      <input type={'checkbox'} defaultChecked={on} onClick={onClick} className="hidden-input" />
      <div
        className={`inline-block w-[100px] h-[52px] relative cursor-pointer rounded-full p-1 transition-all ${
          on ? 'bg-purple-500' : 'bg-gray-300'
        }`}
        {...rest}
      >
        <span
          className={`transition-all w-11 h-11 bg-white rounded-full inline-block ${
            on ? 'translate-x-[48px]' : ''
          }`}
        ></span>
      </div>
    </label>
  );
};

Toggle.protoTypes = {
  on: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Toggle;

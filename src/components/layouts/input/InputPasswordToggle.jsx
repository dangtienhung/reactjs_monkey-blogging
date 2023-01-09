import React, { useState } from 'react';
import { IconEyeClose, IconEyeOpen } from '../../icons';
import Input from './Input';

const InputPasswordToggle = ({ control }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  if (!control) return null;
  return (
    <>
      <Input
        type={togglePassword ? 'text' : 'password'}
        id="password"
        className="input"
        name="password"
        control={control}
        placeholder="Enter your password"
      >
        {!togglePassword ? (
          <IconEyeClose onClick={() => setTogglePassword(!togglePassword)} />
        ) : (
          <IconEyeOpen onClick={() => setTogglePassword(!togglePassword)} />
        )}
      </Input>
    </>
  );
};

export default InputPasswordToggle;

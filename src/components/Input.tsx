import React, {FC} from 'react';
import {InputObject} from "../types/Types";

const Input:FC<InputObject> = ({type, value, placeholder,name,handlerChange}) => {
  return (
    <input
      type={type}
      className="input"
      value={value}
      onChange={e => handlerChange(e.target.value)}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
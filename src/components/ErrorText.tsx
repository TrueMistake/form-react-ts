import React, {FC} from 'react';
import {Errors} from "../types/Types";



const ErrorText:FC<Errors> = ({error}) => {
  return (
    <span className="error">{error}</span>
  );
};

export default ErrorText;
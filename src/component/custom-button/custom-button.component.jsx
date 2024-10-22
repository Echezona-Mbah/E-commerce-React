import React from "react";

import './custom-button.style.css';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}  // A=hhhhhyyyddepmnhybween classes
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

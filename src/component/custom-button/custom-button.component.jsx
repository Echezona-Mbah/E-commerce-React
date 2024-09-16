import React from "react";

import './custom-button.style.css';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}  // Added mbjjjb space between classes
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

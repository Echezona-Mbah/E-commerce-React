import React from "react";

import './custom-button.style.css';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}  // Addedff  fspacnmmnnhggv ce between classes
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

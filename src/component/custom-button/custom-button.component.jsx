import React from "react";

import './custom-button.style.css';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}  //jgyydd0p0p0ddcghjkhukhkuclasses
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

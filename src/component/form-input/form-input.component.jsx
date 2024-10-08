import React from "react";
import './form-input.styles.css';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="group">
        <input
            className="form-input"
            onChange={handleChange}
            {...otherProps}
        />
        {label && (
            <label className={`${otherProps.value && otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                {label}
            </label>
        )}
    </div>
);

export default FormInput;

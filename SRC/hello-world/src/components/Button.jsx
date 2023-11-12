import React from 'react';
import './Button.css';

function Button({ label }) {
  return (
    <button className="custom-button">
      {label}
    </button>
  );
}

export default Button;

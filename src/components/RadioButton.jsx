import React from 'react';

const RadioButton = ({ id, name, value, checked, onChange }) => {
  return (
    <div>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{value}</label>
    </div>
  );
};

export default RadioButton;

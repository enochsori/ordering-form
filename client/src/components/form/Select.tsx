import React from 'react';

export default function Select({
  htmlFor,
  label,
  selection,
  handleChange,
  options,
}) {
  return (
    <div>
      <label htmlFor={htmlFor}>{label}</label>
      <select
        value={selection}
        onChange={(event) => handleChange(event.target.value, htmlFor)}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

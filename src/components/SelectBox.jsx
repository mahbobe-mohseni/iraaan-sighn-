// SelectBox.js
import React from 'react';

const SelectBox = ({ options, onChange }) => {
  return (
    <select
      className="appearance-none block w-full h-20 bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-normal focus:outline-none focus:bg-white focus:border-gray-500 mb-2"
      onChange={onChange}
    >
      {options.map((option, index) => (
        <option key={index}>{option}</option>
      ))}
    </select>
  );
}

export default SelectBox;


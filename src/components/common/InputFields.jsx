import React from "react";

function InputFields({
  title,
  value,
  name,
  type,
  placeholder,
  handleChange,
  col,
}) {
  return (
    <div className={col}>
      <label
        htmlFor=""
        className="text-lg font-medium text-gray-700 dark:text-gray-200"
      >
        {title}
      </label>
      <div>
        <input
          type={type}
          name={name}
          value={value}
          className="input-style"
          onChange={handleChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default InputFields;

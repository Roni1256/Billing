import React, { useState, useEffect } from "react";

const Input = ({ label, type, placeholder, value, name, change, readonly }) => {
  const [isValue, setValue] = useState(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <div className="relative z-0 w-full mb-3 sm:mb-5 group">
      <input
        type={type}
        value={isValue}
        onChange={(e) => {
          setValue(e.target.value);
          change(e);
        }}
        name={name}
        readOnly={readonly || false}
        className="block py-2 sm:py-2.5 px-0 w-full text-xs sm:text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
        id={name}
      />
      <label
        htmlFor={name}
        className="peer-focus:font-medium absolute text-xs sm:text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 sm:-translate-y-6 scale-75 top-2 sm:top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-900 peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 sm:peer-focus:-translate-y-6"
      >
        {label}
        {placeholder && (
          <span className="text-gray-400 text-xs sm:text-sm">
            {" "}
            ({placeholder})
          </span>
        )}
      </label>
    </div>
  );
};

export default Input;

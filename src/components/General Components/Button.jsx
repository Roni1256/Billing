import React from "react";

const Button = ({ label, click, type, style, icon }) => {
  return (
    <>
      <button
        type={type}
        className={`text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-xs sm:text-sm w-full sm:w-auto px-3 sm:px-5 py-2 sm:py-2.5 ${
          style
            ? style
            : " bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        } flex gap-2 sm:gap-5 items-center justify-center text-center h-fit`}
        onClick={click}
      >
        {icon ? icon : null}
        {label}
      </button>
    </>
  );
};

export default Button;

import React from "react";
import { twMerge } from "tailwind-merge";

const Header2 = ({ children, className }) => {
  return (
    <h1
      className={twMerge(
        "font-normal text-primary-900 leading-5 text-xl md:text-4xl",
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Header2;

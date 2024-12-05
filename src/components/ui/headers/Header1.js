import React from "react";
import { twMerge } from "tailwind-merge";

const Header1 = ({ children, className }) => {
  return (
    <h1 className={twMerge("font-normal text-primary-900 text-8xl", className)}>
      {children}
    </h1>
  );
};

export default Header1;

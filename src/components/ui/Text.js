import React from "react";
import { twMerge } from "tailwind-merge";

const Text = ({ children, className }) => {
  return (
    <p className={twMerge("text-text-color text-sm md:text-base", className)}>
      {children}
    </p>
  );
};

export default Text;

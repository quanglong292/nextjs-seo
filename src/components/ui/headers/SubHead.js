import React from "react";
import { twMerge } from "tailwind-merge";

const SubHead = ({ children, type = "italic" }) => {
  return (
    <div
      className={twMerge(
        "text-secondary text-sm font-medium flex items-center justify-center",
        type === "italic" ? "italic" : "uppercase"
      )}
    >
      {type === "italic" && (
        <div className="border-t border-secondary mr-2 w-3"></div>
      )}
      {children}
      {type === "italic" && (
        <div className="border-t border-secondary ml-2 w-3"></div>
      )}
    </div>
  );
};

export default SubHead;

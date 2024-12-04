import React from "react";

const SubHead = ({ children }) => {
  return (
    <div className="text-secondary text-sm font-medium flex items-center justify-center italic">
      <div className="border-t border-secondary mr-2 w-3"></div>
      {children}
      <div className="border-t border-secondary ml-2 w-3"></div>
    </div>
  );
};

export default SubHead;

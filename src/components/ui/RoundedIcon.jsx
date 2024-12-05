import React, { memo } from "react";
import { twMerge } from "tailwind-merge";

const RoundedIcon = ({ svg, color }) => {
  return (
    <div className={twMerge(`border-2 border-${color} p-6 rounded-full`)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={twMerge(`size-8 text-${color}`)}
      >
        {svg}
      </svg>
    </div>
  );
};

export default memo(RoundedIcon);

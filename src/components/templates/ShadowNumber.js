import React from "react";

const ShadowNumber = () => {
  return (
    <div className="flex flex-col items-center justify-center w-[300px] h-[300px]">
      {/* Background 180 */}
      <div className="absolute text-[160px] font-bold text-gray-200 leading-none tracking-tighter">
        180
      </div>
      {/* 180K */}
      <div className="relative z-10 text-[48px] font-bold text-[#26255D] leading-none">
        180K
      </div>
      {/* Caption */}
      <p className="relative z-10 text-base text-gray-500 mt-2">
        Completed Projects
      </p>
    </div>
  );
};

export default ShadowNumber;

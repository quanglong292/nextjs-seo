import React, { memo } from "react";
import { twMerge } from "tailwind-merge";
import Text from "./Text";

const HoverCard = ({ className, title, content, icon }) => {
  return (
    <div
      className={twMerge(
        "relative group p-4 md:p-6 shadow-lg rounded-md overflow-hidden flex gap-8 items-center w-[90%] mx-auto md:w-full",
        className
      )}
    >
      <div className="absolute inset-x-0 bottom-0 bg-secondary h-1 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
      {icon}
      <div>
        <h3 className="text-primary-900 text-xl mb-4">{title}</h3>
        <Text className="text-gray-700 font-light">{content}</Text>
      </div>
    </div>
  );
};

export default memo(HoverCard);


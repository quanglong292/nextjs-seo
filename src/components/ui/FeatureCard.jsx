import React, { cloneElement } from "react";
import { twMerge } from "tailwind-merge";
import Text from "./Text";

const FeatureCard = ({ icon, title, description, className }) => {
  return (
    <div
      className={twMerge(
        "bg-white rounded-md shadow-lg p-6 text-left hover:shadow-lg transition-shadow max-w-[305px]",
        className
      )}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 flex items-center justify-center rounded-full">
          {cloneElement(icon, {
            className: `text-secondary`,
            size: 32,
          })}
        </div>
      </div>
      <Text className="text-primary-900 lg:text-xl">{title}</ Text>
      <Text className="lg:text-sm">{description}</Text>
    </div>
  );
};

export default FeatureCard;

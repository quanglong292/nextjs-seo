import React from "react";
import { twMerge } from "tailwind-merge";
import Text from "./Text";

const FeatureCard = ({ icon, title, description, className }) => {
  return (
    <div
      className={twMerge(
        "bg-white rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-shadow max-w-[305px]",
        className
      )}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full">
          {icon}
        </div>
      </div>
      <Text className="text-primary-900 lg:text-xl">{title}</Text>
      <Text className="lg:text-sm">{description}</Text>
    </div>
  );
};

export default FeatureCard;

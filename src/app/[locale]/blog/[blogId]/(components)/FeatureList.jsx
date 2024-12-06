import Header2 from "@/components/ui/headers/Header2";
import Text from "@/components/ui/Text";
import React from "react";
import { twMerge } from "tailwind-merge";

const FeatureList = ({ title, items, className }) => {
  return (
    <div className={twMerge("my-8 space-y-4", className)}>
      <Header2 className="lg:text-xl font-bold">{title}</Header2>
      <ul className="space-y-3 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <div className="w-2 h-2 flex-shrink-0 rounded-full border-2 border-primary-dark flex items-center justify-center">
              <div className="w-2 h-2 bg-primary-dark rounded-full"></div>
            </div>
            <Text className="lg:text-sm">{item}</Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureList;

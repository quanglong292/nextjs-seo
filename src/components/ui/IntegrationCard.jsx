import React, { memo } from "react";
import { twMerge } from "tailwind-merge";

const Card = ({ title, description, features, className, children }) => {
  return (
    <div
      className={twMerge(
        "bg-primary text-white shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-xl rounded-lg p-6",
        className
      )}
    >
      <div className="flex items-center justify-center w-12 h-12 bg-secondary text-primary-dark rounded-full mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <span className="text-secondary">&#10003;</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default memo(Card);

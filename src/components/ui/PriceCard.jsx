import React from "react";
import { twMerge } from "tailwind-merge";
import AnimatedButton from "./AnimatedButton";
import SubHead from "./headers/SubHead";

const PricingCard = ({
  plan,
  price,
  per,
  features,
  isPopular,
  className,
  children,
}) => {
  return (
    <div
      className={twMerge(
        "group bg-white hover:bg-primary hover:text-white shadow-xl rounded-lg p-6 text-center flex flex-col items-center justify-between space-y-4 md:space-y-6 transition-all hover:shadow-2xl",
        isPopular ? "w-[404px] md:w-[450px] bg-primary" : "w-[404px] md:w-[436px]",
        className
      )}
    >
      <SubHead
        type="straight"
        className={twMerge(
          "transition-all group-hover:text-white text-lg uppercase",
          isPopular ? "text-white" : ""
        )}
      >
        {plan}
      </SubHead>
      <div
        type="straight"
        className={twMerge(
          "transition-all group-hover:text-white text-5xl font-bold text-primary-900",
          isPopular ? "text-white" : ""
        )}
      >
        {price}$
      </div>
      <SubHead
        type="straight"
        className={twMerge(
          "transition-all group-hover:text-white",
          isPopular ? "text-white" : ""
        )}
      >
        Per {per}
      </SubHead>
      <ul className="text-gray-700 space-y-2">
        {features.map((feature, index) => (
          <li
            className={twMerge(
              "transition-all group-hover:text-white flex justify-center items-center",
              isPopular ? "text-white" : ""
            )}
            key={index}
          >
            <span className="mr-2">-</span> {feature}
          </li>
        ))}
      </ul>
      <AnimatedButton
        type="secondary"
        showIcon
        iconClassName={twMerge(
          "group-hover:fill-primary-900",
          isPopular ? "fill-primary-900" : ""
        )}
        className={twMerge(
          "group-hover:bg-white group-hover:text-primary-900 w-full",
          isPopular ? "text-primary-900 bg-white" : ""
        )}
      >
        Sign Up
      </AnimatedButton>
      {children}
    </div>
  );
};

export default PricingCard;

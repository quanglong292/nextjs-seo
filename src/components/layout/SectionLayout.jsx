import React from "react";
import { twMerge } from "tailwind-merge";
import SubHead from "../ui/headers/SubHead";
import Header2 from "../ui/headers/Header2";
import Text from "../ui/Text";

const SectionLayout = ({ children, className, subHead, header, text }) => {
  return (
    <div
      className={twMerge(
        "my-[5%] lg:my-[10%] py-[5%] flex flex-col items-center gap-4",
        className
      )}
    >
      {subHead ||
        header ||
        (text && (
          <div className="flex flex-col items-center gap-4 my-4">
            {subHead && <SubHead>{subHead}</SubHead>}
            {header && <Header2 className="text-center">{header}</Header2>}
            {text && <Text className="text-center mx-4">{text}</Text>}
          </div>
        ))}
      {children}
    </div>
  );
};

export default SectionLayout;

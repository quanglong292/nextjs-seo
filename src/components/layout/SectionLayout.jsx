import React from "react";
import { twMerge } from "tailwind-merge";
import SubHead from "../ui/headers/SubHead";
import Header2 from "../ui/headers/Header2";
import Text from "../ui/Text";

const SectionLayout = ({
  children,
  className,
  headerClassName,
  subHead,
  header,
  text,
}) => {
  return (
    <div
      className={twMerge(
        "my-[5%] lg:my-[10%] py-[5%] flex flex-col items-center gap-4",
        className
      )}
    >
      {subHead || header || text ? (
        <div
          className={twMerge(
            "flex flex-col items-center gap-4 my-4",
            headerClassName
          )}
        >
          {subHead && <SubHead className="capitalize">{subHead}</SubHead>}
          {header && <Header2 className="capitalize text-center">{header}</Header2>}
          {text && <Text className="capitalize text-center mx-4">{text}</Text>}
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default SectionLayout;

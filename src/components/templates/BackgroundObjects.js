import clsx from "clsx";
import Image from "next/image";
import React from "react";

export const DotObject = ({ top, left, right, zIndex = -1, className }) => {
  return (
    <div
      className={clsx(
        "absolute w-32 h-32 bg-[#ff786aa3] rounded-full animate-breathing z-[-1]",
        `top-[${top}px] left-[${left}px] z-[${zIndex}]`,
        right ? `right-[${right}px]` : "",
        className
      )}
    ></div>
  );
};

const BackgroundObjects = () => {
  return (
    <>
      <DotObject className="w-24 h-24 top-[250px] left-[250px]" />
      <div className="absolute top-12 right-[-68px] z-[-1] animate-upDown">
        <Image
          src="/images/bg-shape-1.png"
          width={555}
          height={100}
          alt="background"
        />
      </div>
    </>
  );
};

export default BackgroundObjects;

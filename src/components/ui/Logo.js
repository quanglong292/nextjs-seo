import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";

const Logo = ({ className }) => {
  return (
    <div className={twMerge(className)}>
      <Image src="/logo-1.png" alt="Main logo" width={52} height={100} />
    </div>
  );
};

export default Logo;

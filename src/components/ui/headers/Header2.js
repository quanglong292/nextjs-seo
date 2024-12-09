import React from "react";
import { useTranslations } from "next-intl";
import { twMerge } from "tailwind-merge";

const Header2 = ({ children, className }) => {
  const t = useTranslations();
  return (
    <h1
      className={twMerge(
        "font-normal text-primary-900 leading-5 text-xl md:text-4xl",
        className
      )}
    >
      {t(children)}
    </h1>
  );
};

export default Header2;

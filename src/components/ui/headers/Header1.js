import { useTranslations } from "next-intl";
import React from "react";
import { twMerge } from "tailwind-merge";

const Header1 = ({ children, className }) => {
  const t = useTranslations();
  const localeText = t(children) ?? children;

  return (
    <h1 className={twMerge("font-normal text-primary-900 text-8xl", className)}>
      {localeText}
    </h1>
  );
};

export default Header1;

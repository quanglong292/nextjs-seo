import { useTranslations } from "next-intl";
import React from "react";
import { twMerge } from "tailwind-merge";

const Text = ({ children, className, ...props }) => {
  const t = useTranslations();
  return (
    <p {...props} className={twMerge("text-text-color text-sm md:text-base", className)}>
      {t(children)}
    </p>
  );
};

export default Text;

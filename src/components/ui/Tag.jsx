import React, { cloneElement, memo } from "react";
import Text from "./Text";

const Tag = ({ text, icon }) => {
  return (
    <div className="flex items-center gap-4">
      {cloneElement(icon, {
        className: `text-secondary`,
      })}
      <Text className="text-primary-900">{text}</Text>
    </div>
  );
};

export default memo(Tag);

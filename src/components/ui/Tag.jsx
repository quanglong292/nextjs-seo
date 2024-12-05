import React, { memo } from "react";
import Text from "./Text";

const Tag = ({ text, icon }) => {
  return (
    <div className="flex items-center gap-4">
      {icon}
      <Text className="text-primary-900">{text}</Text>
    </div>
  );
};

export default memo(Tag);

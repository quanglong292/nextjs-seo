import Image from "next/image";
import React, { memo } from "react";

const Img = ({ src, width = 100, height = 100, alt = "Image", className, ...props }) => {
  return (
    <Image
      {...props}
      className={className}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
};

export default memo(Img);

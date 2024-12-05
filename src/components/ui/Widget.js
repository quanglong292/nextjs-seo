import React from "react";

const Widget = ({ title, children, className, src }) => {
  return (
    <div
      className={`bg-white border-[1px] border-primary rounded-lg shadow-md p-2 md:p-6 ${className}`}
    >
      {title && (
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      )}
      <div className="w-full h-full">
        {src ? (
          <iframe
            src={src}
            className="w-full h-full border-0"
            allowFullScreen
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default Widget;

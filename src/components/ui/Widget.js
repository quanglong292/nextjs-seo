import React from "react";

const Widget = ({ title, children, className, src, id }) => {
  return (
    <>
      <div className={`bg-white rounded-lg ${className}`}>
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
            <div
              id={id ?? "embeddedChatId"}
              style={{
                width: "100%",
                height: "100%",
                border: "1px solid #ccc",
                borderRadius: "8px",
                // position: "relative",
                boxSizing: "border-box",
              }}
              className="rounded-lg shadow-md"
            ></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Widget;

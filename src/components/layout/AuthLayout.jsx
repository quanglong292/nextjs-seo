import React from "react";
import { DotObject } from "../templates/BackgroundObjects";

const AuthLayout = ({ children }) => {
  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="w-full m-4 max-w-md p-4 py-8 md:p-8 space-y-14 md:space-y-6 bg-section-background rounded shadow-md">
        {children}
      </div>

      <DotObject className="w-32 h-32 top-[635px] left-[25%] bg-primary animate-upDown" />
      <DotObject className="w-32 h-32 top-[74%] left-[57%] bg-cyan-400" />
      <DotObject className="w-32 h-32 top-[300px] left-[8%] bg-red-300 animate-upDown" />
      <DotObject className="w-32 h-32 top-[150px] left-[75%] bg-pink-300" />
    </div>
  );
};

export default AuthLayout;

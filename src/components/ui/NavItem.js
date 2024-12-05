import React from "react";
import clsx from "clsx";
// import { MdKeyboardArrowDown } from "react-icons/md";

const ActiveMenuItem = ({ text, isActive, className }) => {
  return (
    <div className={clsx("flex items-center", className)}>
      {isActive && <span className="text-secondary mr-2">—</span>}
      <span
        className={clsx("font-medium", {
          "text-secondary": isActive,
          "text-gray-700": !isActive,
        })}
      >
        {text}
      </span>
    </div>
  );
};

const NavItem = ({ className, text, ...props }) => {
  return (
    <div className={clsx("relative group", className)}>
      <button className="text-text-color hover:text-secondary focus:outline-none font-light text-sm">
        {text}
        {/* <MdKeyboardArrowDown
          size={24}
          className="inline-block transform group-hover:rotate-180 transition-transform"
        /> */}
      </button>
      {/* <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all">
        <div className="p-4">
          <ActiveMenuItem text="Any" />
          <ActiveMenuItem text="Hehe" isActive />
          <ActiveMenuItem text="Blabla" />
        </div>
      </div> */}
    </div>
  );
};

export default NavItem;

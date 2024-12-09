import React from "react";
import { X } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { ROUTES } from "@/shared/routes";

const SideMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={twMerge(
        "flex justify-end md:hidden absolute top-0 right-0 bg-slate-400 bg-opacity-[0.5] w-full h-screen",
        isOpen ? "flex overflow-hidden" : "hidden"
      )}
      onClick={toggleMenu}
    >
      <menu
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={twMerge("h-screen w-2/3 flex flex-col bg-slate-400 p-4")}
      >
        <X className="text-secondary" onClick={toggleMenu} />
        <ul>
          {ROUTES.map((item) => {
            return <li key={item.id}>{item.text}</li>;
          })}
        </ul>
      </menu>
    </div>
  );
};

export default SideMenu;

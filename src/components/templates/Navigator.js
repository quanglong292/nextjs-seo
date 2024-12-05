import React from "react";
import NavItem from "../ui/NavItem";
import AnimatedButton from "../ui/AnimatedButton";
import Logo from "../ui/Logo";

const NAV_ITEMS = [
  { id: 1, text: "Features", isActive: false, route: "asd" },
  { id: 2, text: "Integrations", isActive: false, route: "asd" },
  { id: 3, text: "Pricing", isActive: false, route: "asd" },
  { id: 4, text: "Live Demo", isActive: false, route: "asd" },
  { id: 5, text: "Blog", isActive: false, route: "asd" },
];

const Navigator = () => {
  return (
    <div className="w-[90%] mx-auto md:w-full flex justify-between items-center py-6 xl:px-[100px]">
      <div className="flex-[2]">
        <Logo />
      </div>
      <div className="hidden lg:flex flex-[4] gap-4 lg:gap-12 justify-center">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.id} text={item.text} isActive={item.isActive} />
        ))}
      </div>
      <div className="flex flex-[2] gap-4">
        <AnimatedButton type="text" className="hidden xl:block">
          Become a partner
        </AnimatedButton>
        <AnimatedButton type="text" className="hidden xl:block">
          Sign in
        </AnimatedButton>
        <AnimatedButton
          showIcon
          type="secondary"
          className="hidden lg:flex w-[200px]"
        >
          Start a free trial
        </AnimatedButton>
      </div>
      <div className="menu block lg:hidden transition-all cursor-pointer hover:bg-hover rounded-full p-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navigator;

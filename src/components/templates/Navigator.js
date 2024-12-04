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
    <div className="flex justify-between items-center">
      <div className="flex-[2]">
        <Logo />
      </div>
      <div className="flex flex-[4] gap-4 lg:gap-12 justify-center">
        {NAV_ITEMS.map((item) => (
          <NavItem key={item.id} text={item.text} isActive={item.isActive} />
        ))}
      </div>
      <div className="flex flex-[2] gap-4">
        <AnimatedButton type="text" className="hidden xl:block">Become a partner</AnimatedButton>
        <AnimatedButton type="text" className="hidden xl:block">Sign in</AnimatedButton>
        <AnimatedButton showIcon type="secondary" className="w-[200px]">
          Start a free trial
        </AnimatedButton>
      </div>
    </div>
  );
};

export default Navigator;

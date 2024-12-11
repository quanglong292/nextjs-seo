"use client";
import React, { useState } from "react";
import NavItem from "../ui/NavItem";
import AnimatedButton from "../ui/AnimatedButton";
import Logo from "../ui/Logo";
import { Link, useRouter } from "@/i18n/routing";
import { ROUTES } from "@/shared/routes";

const NAV_ITEMS = ROUTES;

const Navigator = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickSignin = () => {
    router.push("/sign-in");
  };

  return (
    <nav className="w-[90%] mx-auto md:w-full flex justify-between items-center py-6 xl:px-[100px]">
      <div className="flex-[2]">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="hidden xl:flex flex-[4] gap-4 lg:gap-12 justify-center">
        {NAV_ITEMS.map((item) => (
          <NavItem
            {...item}
            key={item.id}
            text={item.text}
            isActive={item.isActive}
          />
        ))}
      </div>
      <div className="hidden xl:flex flex-[2] gap-4">
        <AnimatedButton type="text" className="">
          Become a partner
        </AnimatedButton>
        <AnimatedButton
          onClick={handleClickSignin}
          type="text"
        >
          Sign in
        </AnimatedButton>
        <AnimatedButton
          showIcon
          type="secondary"
          className="lg:flex w-[200px]"
        >
          Start a free trial
        </AnimatedButton>
      </div>
      <menu
        onClick={toggleMenu}
        className="menu block xl:hidden transition-all cursor-pointer hover:bg-hover rounded-full p-2"
      >
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
      </menu>
      <menu
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <Logo />
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.route}
                className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
              >
                {item.text}
              </Link>
            ))}
            <div className="flex flex-col gap-4 p-4">
              <AnimatedButton type="text">Become a partner</AnimatedButton>
              <AnimatedButton type="text">Sign in</AnimatedButton>
              <AnimatedButton showIcon type="secondary">
                Start a free trial
              </AnimatedButton>
            </div>
          </div>
        </div>
      </menu>
    </nav>
  );
};

export default Navigator;

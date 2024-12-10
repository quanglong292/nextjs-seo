import Header2 from "@/components/ui/headers/Header2";
import Logo from "@/components/ui/Logo";
import Text from "@/components/ui/Text";
import { Link } from "@/i18n/routing";
import { ROUTES } from "@/shared/routes";
import React from "react";
import { twMerge } from "tailwind-merge";

export const SocialIcon = ({ children, link }) => {
  return (
    <Link
      href={link}
      target="_blank"
      prefetch={false}
      className="transition-all hover:bg-primary w-10 h-10 flex justify-center items-center bg-primary-900 text-white rounded-md"
    >
      {children}
    </Link>
  );
};

const LinkToPage = ({ href, children }) => {
  return (
    <div className="flex gap-1 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={3}
        stroke="currentColor"
        className="size-4 text-secondary"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>

      <Link
        href={href}
        className="hover:text-secondary text-primary-900 transition-all duration-300"
      >
        {children}
      </Link>
    </div>
  );
};

const EmailInput = ({ value, onChange, placeholder, className }) => {
  return (
    <div className={twMerge("relative flex flex-col gap-2", className)}>
      <input
        type="email"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required
        className="transition-all w-full border-b-[1px] border-gray-200 focus:border-red-400 outline-none text-sm px-2 py-1 text-gray-700 bg-transparent placeholder:text-base pb-5"
      />
      <button
        type="submit"
        className="absolute top-0 right-0 w-8 h-8 flex justify-center items-center bg-white text-primary-900 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
          />
        </svg>
      </button>
      <p className="text-xs text-gray-500">
        For Any Question/Query Email:{" "}
        <span className="text-primary-dark">talkiehelp@gmail.com</span>
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-section-background pt-[5%] lg:pt-[10%] pb-16">
      <div className="w-9/12 mx-auto flex flex-col md:flex-row gap-12 justify-between flex-wrap border-gray-200 pb-[5%] border-b-[1px]">
        <div className="flex flex-col gap-4 w-full md:w-2/6">
          <Logo />
          <Text className="text-primary-900">
            Instantly answer your visitors' questions with a personalized
            chatbot trained on your website content.
          </Text>
          <div className="flex gap-4">
            <SocialIcon link="https://www.facebook.com/p/QKIT-Software-100076370654780/?locale=vi_VN">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 320 512"
                className="size-6"
              >
                <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="size-6"
              >
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="size-6"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
              </svg>
            </SocialIcon>
            <SocialIcon link="https://vn.linkedin.com/company/qkit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 448 512"
                className="size-6"
              >
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </SocialIcon>
          </div>
          <EmailInput className="mt-4" placeholder="Email address" />
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/6">
          <Header2 className="md:text-2xl">Product</Header2>
          <div className="flex flex-col gap-4">
            {["Features", "Integrations", "AI Chatbot", "AI Service"]
              .map((text) => {
                const item = ROUTES[0];
                return { ...item, text };
              })
              .map((item) => {
                return (
                  <LinkToPage key={item.route} href={item.route}>
                    {item.text}
                  </LinkToPage>
                );
              })}
            {/* <LinkToPage href="#">Chatbots</LinkToPage>
            <LinkToPage href="#">Chatbots</LinkToPage> */}
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full md:w-1/6">
          <Header2 className="md:text-2xl">Information</Header2>
          <div className="flex flex-col gap-4">
            {ROUTES.slice(1, ROUTES.length).map((item) => (
              <LinkToPage key={item.route} href={item.route}>
                {item.text}
              </LinkToPage>
            ))}
          </div>
        </div>
        {/* <div className="flex flex-col gap-4 w-full md:w-1/6">
          <Header2 className="md:text-2xl">Free Tools</Header2>
          <div className="flex flex-col gap-4">
            <LinkToPage href="#">Chatbots</LinkToPage>
            <LinkToPage href="#">Chatbots</LinkToPage>
          </div>
        </div> */}
      </div>
      <Text className="text-center mt-6 md:text-sm">
        Copyright 2024 talkie All Rights Reserved.
      </Text>
    </footer>
  );
};

export default Footer;

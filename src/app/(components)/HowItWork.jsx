import Header2 from "@/components/ui/headers/Header2";
import SubHead from "@/components/ui/headers/SubHead";
import HoverCard from "@/components/ui/HoverCard";
import Img from "@/components/ui/Img";
import React from "react";

const hoverCardData = [
  {
    iconClass: "border-primary text-primary",
    pathData:
      "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10",
    title: "Sync training data",
    content:
      "Enter your URL for SiteGPT to scan, or upload files, or drop in raw text content.",
  },
  {
    iconClass: "border-secondary text-secondary",
    pathData:
      "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z",
    title: "Install on your site",
    content:
      "Embed a chatbot on as many sites as you want — your marketing site, in-app, help center… wherever.",
  },
  {
    iconClass: "border-cyan-400 text-cyan-400",
    pathData:
      "M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z",
    title: "Learn and refine",
    content:
      "Use real chat history to improve your chatbot by providing feedback that allows it to improve with every interaction.",
  },
];

const HowItWork = () => {
  return (
    <div className="my-[5%] lg:my-[10%]">
      <div className="flex flex-col items-center gap-4 my-4">
        <SubHead>What We Do</SubHead>
        <Header2 className="text-center">
          You're three easy steps away from your own personalized AI support
          chatbot
        </Header2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center my-8 gap-12 lg:px-[10%]">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:gap-12">
          {hoverCardData.map((card, index) => (
            <HoverCard
              key={index}
              icon={
                <div
                  className={`border-2 ${card.iconClass} p-4 md:p-10 rounded-full`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 md:size-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={card.pathData}
                    />
                  </svg>
                </div>
              }
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
        <Img
          className="p-12 mx-auto w-2/3 lg:w-1/2 max-w-full flex justify-center items-center"
          src="/images/howitwork.png"
          alt="How it works"
          width={600}
          height={500}
        />
      </div>
    </div>
  );
};

export default HowItWork;

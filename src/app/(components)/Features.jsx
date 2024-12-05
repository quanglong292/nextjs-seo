import AnimatedButton from "@/components/ui/AnimatedButton";
import Header2 from "@/components/ui/headers/Header2";
import SubHead from "@/components/ui/headers/SubHead";
import HoverCard from "@/components/ui/HoverCard";
import React from "react";
import { twMerge } from "tailwind-merge";

const Card = ({ svg, title, content, color }) => {
  return (
    <HoverCard
      className="transition-all bg-none hover:bg-white w-[90%] md:w-[415px] mx-auto shadow-none flex-col items-start"
      icon={
        <div className={twMerge(`border-2 border-${color} p-6 rounded-full`)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={twMerge(`size-8 text-${color}`)}
          >
            {svg}
          </svg>
        </div>
      }
      title={title}
      content={content}
    />
  );
};

const Features = () => {
  return (
    <div className="bg-section-background my-[5%] lg:my-[10%] py-[5%] flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4 my-4">
        <SubHead>Features</SubHead>
        <Header2 className="text-center">Our Core Features</Header2>
      </div>
      <div className="flex flex-row flex-wrap justify-center my-8 gap-12 lg:px-[10%]">
        <Card
          color="primary"
          title="Build a custom chatbot trained on your own content"
          content="Ever wanted to clone yourself to answer customer queries? Now you can! Train your chatbot with your content and let it echo your brand's voice. Who knew a chatbot could be your digital doppelgänger?"
          svg={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z"
            />
          }
        />
        <Card
          color="secondary"
          title="Help users start conversations with quick prompts"
          content="Give users a digital icebreaker to kick things off. Include frequently asked questions or questions you wish more users would ask to get value out of your product or service."
          svg={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
            />
          }
        />
        <Card
          color="cyan-400"
          title="Stay up to date with daily email summaries"
          content="Keep a pulse on chatbot interactions with daily summaries delivered to your inbox. Upload more training data where needed, track the chatbot's performance, and gain insights into user behavior."
          svg={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          }
        />
        <Card
          color="primary"
          title="Escalate to a human when necessary"
          content="While AI can handle a vast majority of inquiries, some conversations require human touch. Users can seamlessly transition the conversation to a live agent at the push of a button. This hybrid approach ensures that users always receive the best possible assistance."
          svg={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z"
            />
          }
        />
        <Card
          color="secondary"
          title="Generate leads to follow up with later"
          content="Don't just answer questions, seize opportunities. Our chatbot captures interested visitors' details, allowing you to build a list of potential leads."
          svg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          }
        />
        <Card
          color="cyan-400"
          title="Turn natural language commands into in-app actions"
          content="Functions allows users to automate tasks just by interacting with your chatbot. Your chatbot can listen, understand, and interact with other systems based on chat interactions."
          svg={
            <>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </>
          }
        />
      </div>
      <AnimatedButton showIcon type="secondary">
        View More
      </AnimatedButton>
    </div>
  );
};

export default Features;

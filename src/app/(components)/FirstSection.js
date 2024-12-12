"use client";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Header1 from "@/components/ui/headers/Header1";
import Text from "@/components/ui/Text";
import Widget from "@/components/ui/Widget";
import Script from "next/script";
import React from "react";

const FirstSection = () => {
  return (
    <>
      <Script
        src="https://unpkg.com/qkai-chatbot@latest/dist/qkai-chatbot.js"
        onLoad={() => {
          window.QKAIChatbot.initialize({
            token: "451507c1-3c4e-49a3-a892-c34a560161d8",
            embedMode: true,
            targetElement: `#embeddedChatId3`,
          });
          window.QKAIChatbot.initialize({
            token: "451507c1-3c4e-49a3-a892-c34a560161d8",
            embedMode: true,
            targetElement: `#embeddedChatId2`,
          });
        }}
      ></Script>
      <div className="flex flex-col lg:flex-row min-h-[90vh] justify-center items-center lg:px-[200px] gap-12 lg:gap-[184px]">
        <div className="flex flex-col gap-4 w-[95%] md:w-[80%] lg:w-[50%] lg:h-auto">
          <Header1 className="text-2xl md:text-4xl lg:text-7xl">
            Make AI your expert customer support agent
          </Header1>
          <Text>
            It's like having ChatGPT specifically for your product. Instantly
            answer your visitors' questions with a personalized chatbot trained
            on your website content
          </Text>
          <div className="flex gap-4 lg:justify-normal">
            <AnimatedButton type="text">Start free trial</AnimatedButton>
            <AnimatedButton showIcon type="primary">
              Book a demo
            </AnimatedButton>
          </div>
        </div>
        <div className="relative w-[90%] md:w-[80%] lg:w-[50%] h-1/2 lg:h-auto mb-4">
          <Widget className="h-[500px] lg:h-[70vh]" id="embeddedChatId3" />
        </div>
      </div>
    </>
  );
};

export default FirstSection;

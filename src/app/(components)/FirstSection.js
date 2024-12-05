import { DotObject } from "@/components/templates/BackgroundObjects";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Header1 from "@/components/ui/headers/Header1";
import Text from "@/components/ui/Text";
import Widget from "@/components/ui/Widget";
import React from "react";

const FirstSection = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[90vh] justify-center items-center lg:px-[200px] gap-12 lg:gap-[184px]">
      <div className="flex flex-col gap-4 w-[95%] md:w-[80%] lg:w-[50%] lg:h-auto">
        <Header1 className="text-2xl md:text-4xl lg:text-7xl">
          Make AI your expert customer support agent
        </Header1>
        <Text>
          It's like having ChatGPT specifically for your product. Instantly
          answer your visitors' questions with a personalized chatbot trained on
          your website content.
        </Text>
        <div className="flex justify-between lg:justify-normal lg:gap-4">
          <AnimatedButton type="text">Start free trial</AnimatedButton>
          <AnimatedButton showIcon type="primary">
            Book a demo
          </AnimatedButton>
        </div>
      </div>
      {/* <Img src="/images/phone.png" /> */}
      <div className="relative w-[90%] md:w-[80%] lg:w-[50%] h-1/2 lg:h-auto">
        <Widget className="h-[500px] lg:h-[70vh]" src="https://www.youtube.com/embed/dQw4w9WgXcQ" />
        {/* <DotObject className="w-12 h-12 top-[250px] left-[250px]" />
        <DotObject className="w-8 h-8 top-[-100px] left-[100px]" />
        <DotObject className="w-6 h-6 top-[-20px] left-[150px]" />
        <DotObject className="w-12 h-12 top-[250px] left-[250px]" /> */}
      </div>
    </div>
  );
};

export default FirstSection;

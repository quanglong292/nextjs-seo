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
          It's like having ChatGPT specifically for your product. Instantly answer your visitors' questions with a personalized chatbot trained on your website content
        </Text>
        <div className="flex gap-4 lg:justify-normal">
          <AnimatedButton type="text">Start free trial</AnimatedButton>
          <AnimatedButton showIcon type="primary">
            Book a demo
          </AnimatedButton>
        </div>
      </div>
      {/* <Img src="/images/phone.png" /> */}
      <div className="relative w-[90%] md:w-[80%] lg:w-[50%] h-1/2 lg:h-auto mb-4">
        <Widget className="h-[500px] lg:h-[70vh]" />
        {/* <DotObject className="123 w-8 h-8 top-[-25px] left-[50%]" />
        <DotObject className="123 w-12 h-12 top-[-15px] left-[-25px]" />
        <DotObject className="123 w-7 h-w-7 bottom-[-25px] left-[50%]" />
        <DotObject className="123 w-16 h-16 bottom-[-15px] right-[-25px]" />
        <DotObject className="123 w-12 h-12 bottom-[-25px] left-[-10px]" />
        <DotObject className="123 w-12 h-12 bottom-[250px] right-[-35px]" />
        <DotObject className="123 w-4 h-4 bottom-[300px] left-[-50px]" /> */}
      </div>
    </div>
  );
};

export default FirstSection;

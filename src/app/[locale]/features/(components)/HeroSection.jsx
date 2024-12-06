import React from "react";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Header2 from "@/components/ui/headers/Header2";
import SubHead from "@/components/ui/headers/SubHead";
import Img from "@/components/ui/Img";
import Text from "@/components/ui/Text";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center gap-12 items-center lg:flex-row w-full lg:w-[60%] mx-auto my-[5%] lg:my-[10%]">
      <div className="w-2/3">
        <div className="flex flex-col items-center lg:items-start gap-4 my-4">
          <SubHead type="straight" className="">
            Features
          </SubHead>
          <Header2 className="">
            The AI chatbot that's an expert on your products
          </Header2>
          <Text>
            It's like having ChatGPT specifically for your products. Instantly
            answer your visitors' questions with a personalized chatbot trained
            on your website content.
          </Text>
        </div>
        <div className="mx-auto flex justify-center lg:justify-start lg:gap-4">
          <AnimatedButton type="text">Start free trial</AnimatedButton>
          <AnimatedButton showIcon type="primary">
            Book a demo
          </AnimatedButton>
        </div>
      </div>
      <Img className="mx-auto w-1/3" src="/images/demo-img.png" width={515} />
    </div>
  );
};

export default HeroSection;

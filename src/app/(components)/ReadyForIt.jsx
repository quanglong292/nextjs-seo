import AnimatedButton from "@/components/ui/AnimatedButton";
import Header1 from "@/components/ui/headers/Header1";
import Header2 from "@/components/ui/headers/Header2";
import Img from "@/components/ui/Img";
import Text from "@/components/ui/Text";
import React from "react";

const ReadyForIt = () => {
  return (
    <div className="relative bg-[#302F5B] mt-[5%] lg:mt-[10%] py-[5%]">
      <div className="flex flex-col items-center gap-12 mx-auto">
        <Header1 className="text-white text-center text-6xl">
          Ready to take SiteGPT for a spin?
        </Header1>
        <Text className="text-white text-center">
          Find out if a personalized AI support chatbot is a good fit for you in
          just a few hours.
        </Text>
        <div className="flex justify-between lg:justify-normal lg:gap-4">
          <AnimatedButton type="text">Start free trial</AnimatedButton>
          <AnimatedButton
            showIcon
            type="secondary"
            className="bg-transparent border-2 border-secondary hover:bg-transparent"
          >
            Book a demo
          </AnimatedButton>
        </div>
      </div>
      <Img className="absolute top-0 right-8" src="/images/dec-1.png" width={323} />
      <Img className="absolute bottom-12 left-12" src="/images/dec-2.png" width={107} />
    </div>
  );
};

export default ReadyForIt;
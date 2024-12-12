import AnimatedButton from "@/components/ui/AnimatedButton";
import Header2 from "@/components/ui/headers/Header2";
import Img from "@/components/ui/Img";
import Text from "@/components/ui/Text";
import React from "react";
import { twMerge } from "tailwind-merge";

const ReadyForIt = ({ className }) => {
  return (
    <section className={twMerge("relative bg-[#302F5B] mt-[5%] lg:mt-[10%] py-[5%] px-4", className)}>
      <div className="flex flex-col items-center gap-12 mx-auto">
        <Header2 className="text-white text-center text-3xl md:text-6xl">
          Ready to take SiteGPT for a spin?
        </Header2>
        <Text className="text-white text-center">
          Find out if a personalized AI support chatbot is a good fit for you in
          just a few hours.
        </Text>
        <div className="flex justify-between lg:justify-normal gap-4">
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
      <Img
        className="absolute top-0 right-8"
        src="/images/dec-1.png"
        width={323}
      />
      <Img
        className="absolute bottom-12 left-12"
        src="/images/dec-2.png"
        width={107}
      />
    </section>
  );
};

export default ReadyForIt;

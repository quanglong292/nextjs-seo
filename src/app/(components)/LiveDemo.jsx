import Header2 from "@/components/ui/headers/Header2";
import SubHead from "@/components/ui/headers/SubHead";
import Text from "@/components/ui/Text";
import Widget from "@/components/ui/Widget";
import React from "react";
import { twMerge } from "tailwind-merge";

const LiveDemo = ({ className }) => {
  return (
    <div
      className={twMerge(
        "flex flex-col lg:flex-row min-h-[90vh] justify-center items-center lg:px-[200px] gap-12 lg:gap-[184px]",
        className
      )}
    >
      <div className="flex flex-col items-start gap-4 w-[80%] lg:w-[50%] lg:h-auto">
        <SubHead type="null">Live demo</SubHead>
        <Header2 className="text-4xl lg:text-7xl">See for yourself</Header2>
        <Text>Ask the SiteGPT chatbot a question about itself</Text>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[50%] h-1/2 lg:h-auto">
        <Widget className="h-[500px] lg:h-[70vh]" id="embeddedChatId2" />
      </div>
    </div>
  );
};

export default LiveDemo;

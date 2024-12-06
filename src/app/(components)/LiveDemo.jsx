import { DotObject } from "@/components/templates/BackgroundObjects";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Header1 from "@/components/ui/headers/Header1";
import SubHead from "@/components/ui/headers/SubHead";
import Text from "@/components/ui/Text";
import Widget from "@/components/ui/Widget";
import React from "react";

const LiveDemo = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-[90vh] justify-center items-center lg:px-[200px] gap-12 lg:gap-[184px]">
      <div className="flex flex-col items-start gap-4 w-[80%] lg:w-[50%] lg:h-auto">
        <SubHead type="null">Live demo</SubHead>
        <Header1 className="text-4xl lg:text-7xl">See for yourself</Header1>
        <Text>Ask the SiteGPT chatbot a question about itself</Text>
      </div>
      <div className="w-[90%] md:w-[80%] lg:w-[50%] h-1/2 lg:h-auto">
        <Widget
          className="h-[500px] lg:h-[70vh]"
          // src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        />
      </div>
    </div>
  );
};

export default LiveDemo;

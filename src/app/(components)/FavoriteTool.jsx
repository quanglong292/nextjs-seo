import Header2 from "@/components/ui/headers/Header2";
import SubHead from "@/components/ui/headers/SubHead";
import Text from "@/components/ui/Text";
import React from "react";

const FavoriteTool = () => {
  return (
    <div className="my-[5%] lg:my-[10%] py-[5%] flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4 my-4 lg:max-w-[40%]">
        <SubHead>Supercharge your chatbot</SubHead>
        <Header2 className="text-center">
          Direct integrations with your favorite tools
        </Header2>
        <Text className="text-center">
          With native integrations into platforms like Crisp, Intercom, and
          Zendesk, our chatbot becomes an extended arm of your existing toolkit.
        </Text>
      </div>
    </div>
  );
};

export default FavoriteTool;

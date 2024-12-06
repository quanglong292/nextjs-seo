import React, { memo } from "react";
import Header2 from "../ui/headers/Header2";
import Text from "../ui/Text";
import { ChevronRight } from "lucide-react";

const PageLayout = ({ routeName, children }) => {
  const routeNames = routeName.split("/");
  const header = routeNames[routeNames.length - 1]
  return (
    <>
      <div className="bg-[url('/images/banner-bg.png')] bg-cover bg-center rounded-lg pt-[5%] md:pt-[8%] flex justify-center">
        <div className="bg-white w-fit p-[34px] md:py-[80px] md:px-[200px] flex flex-col justify-center items-center gap-4">
          <Header2>{header}</Header2>
          <div className="flex items-center gap-4">
            <Text className="text-primary">Home</Text>
            {routeNames.map((i, index) => (
              <div className="flex items-center gap-4" key={i}>
                <ChevronRight className="text-primary" />
                <Text
                  className={
                    index === routeNames.length - 1
                      ? "text-secondary"
                      : "text-primary-900"
                  }
                >
                  {i}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
      <>{children}</>
    </>
  );
};

export default memo(PageLayout);

import SectionLayout from "@/components/layout/SectionLayout";
import FeatureCard from "@/components/ui/FeatureCard";
import Header2 from "@/components/ui/headers/Header2";
import Text from "@/components/ui/Text";
import { FEATURE_LIST } from "@/shared/constants/features.constant";
import { FileUp } from "lucide-react";
import React from "react";

const FeatureSection = ({ sectionHeader, sectionDescription, features }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-start gap-12 w-full md:w-[60%]">
      <div className="flex-1 grid grid-cols-2 gap-6">
        {features.map((feature) => (
          <FeatureCard
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            key={feature.title}
          />
        ))}
      </div>
      <div className="flex-1 flex flex-col w-[90%] md:w-full mx-auto gap-6 md:mt-12">
        <Header2>{sectionHeader}</Header2>
        <Text>{sectionDescription}</Text>
      </div>
    </div>
  );
};

const FeatureList = () => {
  return (
    <SectionLayout className="flex flex-col gap-12 lg:my-[0%]">
      {FEATURE_LIST.map((feature) => (
        <FeatureSection {...feature} key={feature.sectionHeader} />
      ))}
    </SectionLayout>
  );
};

export default FeatureList;

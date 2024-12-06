import SectionLayout from "@/components/layout/SectionLayout";
import Tag from "@/components/ui/Tag";
import Text from "@/components/ui/Text";
import { FEATURE_LIST } from "@/shared/constants/features.constant";
import { FileUp } from "lucide-react";
import React from "react";

const FeatureTags = () => {
  return (
    <SectionLayout
      className="bg-section-background lg:my-[0%]"
      subHead="Services"
      text="SiteGPT is a production-ready support solution that does the work of a
        full support staff but at a fraction of the cost."
      header="Everything you need to roll out your own AI chatbot"
    >
      <div className="w-[90%] lg:w-[60%] mt-4 flex justify-center flex-wrap gap-4">
        {FEATURE_LIST.map((i) => i.features)
          .flat()
          .map((feature) => (
            <Tag key={feature.title} icon={feature.icon} text={feature.title} />
          ))}
      </div>
    </SectionLayout>
  );
};

export default FeatureTags;

import SectionLayout from "@/components/layout/SectionLayout";
import Tag from "@/components/ui/Tag";
import Text from "@/components/ui/Text";
import { FileUp } from "lucide-react";
import React from "react";

const FeatureTags = () => {
  return (
    <SectionLayout
      className="bg-section-background"
      subHead="Services"
      text="SiteGPT is a production-ready support solution that does the work of a
        full support staff but at a fraction of the cost."
      header="Everything you need to roll out your own AI chatbot"
    >
      <div className="w-[90%] lg:w-[60%] mt-4 flex justify-center flex-wrap gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <Tag
            key={index}
            icon={<FileUp className="text-secondary" />}
            text="Import Training Content"
          />
        ))}
      </div>
    </SectionLayout>
  );
};

export default FeatureTags;

import FeatureCard from "@/components/ui/FeatureCard";
import { FileUp } from "lucide-react";
import React from "react";

const FeatureSection = () => {
  return (
    <FeatureCard
      icon={<FileUp className="text-secondary" />}
      title="123"
      description="asd"
    />
  );
};

const FeatureList = () => {
  return (
    <div>
      <FeatureSection />
    </div>
  );
};

export default FeatureList;

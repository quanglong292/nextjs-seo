import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import HeroSection from "./(components)/HeroSection";
import FeatureTags from "./(components)/FeatureTags";
import FeatureList from "./(components)/FeatureList";

const Page = () => {
  return (
    <PageLayout routeName="Features">
      <HeroSection />
      <FeatureTags />
      <FeatureList />
    </PageLayout>
  );
};

export default Page;

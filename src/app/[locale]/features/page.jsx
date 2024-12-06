import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import HeroSection from "./(components)/HeroSection";
import FeatureTags from "./(components)/FeatureTags";
import FeatureList from "./(components)/FeatureList";
import CustomerTestimonials from "@/app/(components)/CustomerTestimonials";
import FAQ from "@/app/(components)/FAQ";
import ReadyForIt from "@/app/(components)/ReadyForIt";
import LiveDemo from "@/app/(components)/LiveDemo";

const Page = () => {
  return (
    <PageLayout routeName="Features">
      <HeroSection />
      <FeatureTags />
      <FeatureList />
      <LiveDemo />
      <CustomerTestimonials />
      <FAQ />
      <ReadyForIt />
    </PageLayout>
  );
};

export default Page;

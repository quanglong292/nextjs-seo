import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import HeroSection from "./(components)/HeroSection";
import FeatureTags from "./(components)/FeatureTags";
import FeatureList from "./(components)/FeatureList";
import CustomerTestimonials from "@/app/(components)/CustomerTestimonials";
import FAQ from "@/app/(components)/FAQ";
import ReadyForIt from "@/app/(components)/ReadyForIt";
import LiveDemo from "@/app/(components)/LiveDemo";
import TrustedCompany from "@/app/(components)/TrustedCompany";

const Page = () => {
  return (
    <PageLayout routeName="Features">
      <HeroSection />
      <FeatureTags />
      <FeatureList />
      <div className="bg-section-background">
        <LiveDemo />
      </div>
      <CustomerTestimonials className="mb-0 lg:mb-0 pb-0" />
      <TrustedCompany showHeader={false} className="bg-transparent my-4 lg:my-0 px-4 md:px-8 lg:px-[10%]" /> 
      <FAQ />
      <ReadyForIt />
    </PageLayout>
  );
};

export default Page;

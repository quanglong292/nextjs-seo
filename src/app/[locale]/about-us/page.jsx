import ReadyForIt from "@/app/(components)/ReadyForIt";
import React from "react";
import OurTeam from "./(components)/OurTeam";
import HeroSection from "../features/(components)/HeroSection";
import CustomerTestimonials from "@/app/(components)/CustomerTestimonials";
import PageLayout from "@/components/layout/PageLayout";
import VideoAboutUs from "./(components)/VideoAboutUs";
import WhatWeDo from "./(components)/WhatWeDo";
import TrustedCompany from "@/app/(components)/TrustedCompany";

const Page = () => {
  return (
    <PageLayout routeName="About Us">
      <HeroSection />
      <VideoAboutUs />
      <OurTeam />
      <WhatWeDo />
      <CustomerTestimonials className="mb-0 lg:mb-0 pb-0" />
      <TrustedCompany showHeader={false} className="bg-transparent my-4 lg:my-0 px-4 md:px-8 lg:px-[10%]" />
      <ReadyForIt />
    </PageLayout>
  );
};

export default Page;

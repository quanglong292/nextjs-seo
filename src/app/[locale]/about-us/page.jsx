import ReadyForIt from "@/app/(components)/ReadyForIt";
import React from "react";
import OurTeam from "./(components)/OurTeam";
import HeroSection from "../features/(components)/HeroSection";
import CustomerTestimonials from "@/app/(components)/CustomerTestimonials";
import PageLayout from "@/components/layout/PageLayout";
import VideoAboutUs from "./(components)/VideoAboutUs";
import WhatWeDo from "./(components)/WhatWeDo";

const Page = () => {
  return (
    <PageLayout routeName="About Us">
      <HeroSection />
      <VideoAboutUs />
      <OurTeam />
      <WhatWeDo />
      <CustomerTestimonials />
      <ReadyForIt />
    </PageLayout>
  );
};

export default Page;

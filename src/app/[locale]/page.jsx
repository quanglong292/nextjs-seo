import { DotObject } from "@/components/templates/BackgroundObjects";
import FirstSection from "../(components)/FirstSection";
import TrustedCompany from "../(components)/TrustedCompany";
import HowItWork from "../(components)/HowItWork";
import Features from "../(components)/Features";
import FavoriteTool from "../(components)/FavoriteTool";
import LiveDemo from "../(components)/LiveDemo";
import CustomerTestimonials from "../(components)/CustomerTestimonials";
import Image from "next/image";
import FAQ from "../(components)/FAQ";
import ReadyForIt from "../(components)/ReadyForIt";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "AI Chat Bot",
    image: "/logo-1.png",
    description:
      "Turn AI into your expert customer support agent with QKit Chat Bot. Automate responses, improve support efficiency, and enhance customer satisfaction.",
  };

  return (
    <div className="relative max-w-full overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FirstSection />
      <TrustedCompany />
      <HowItWork />
      <Features />
      <FavoriteTool />
      <div className="bg-section-background">
        <LiveDemo />
      </div>
      <CustomerTestimonials />
      <div className="bg-section-background">
        <FAQ />
      </div>
      <ReadyForIt />
      {/* <BackgroundObjects /> */}
      <DotObject className="w-24 h-24 top-[250px] left-[25%]" />
      <DotObject className="hidden md:block w-24 h-24 top-[300px] right-[25%]" />
      <DotObject className="w-12 h-12 top-[500px] left-[15%]" />
      <DotObject className="w-12 h-12 top-[350px] left-[10%]" />
      {/* <DotObject className="w-4 h-4 top-[50px] right-[10%]" />
      <DotObject className="w-4 h-4 top-[25px] right-[35%]" /> */}
      <DotObject className="w-4 h-4 top-[150px] left-[10%]" />
      <DotObject className="w-4 h-4 top-[200px] left-[30%]" />
      <Image
        className="absolute top-12 right-[68px] lg:right-[-68px] z-[-1] animate-upDown w-[100px] lg:w-[555px]"
        src="/images/bg-shape-1.png"
        width={555}
        height={100}
        alt="background"
      />
    </div>
  );
}

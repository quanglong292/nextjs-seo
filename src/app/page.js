import { DotObject } from "@/components/templates/BackgroundObjects";
import Navigator from "@/components/templates/Navigator";
import FirstSection from "./(components)/FirstSection";
import TrustedCompany from "./(components)/TrustedCompany";
import HowItWork from "./(components)/HowItWork";
import Features from "./(components)/Features";
import FavoriteTool from "./(components)/FavoriteTool";
import LiveDemo from "./(components)/LiveDemo";
import CustomerTestimonials from "./(components)/CustomerTestimonials";
import Image from "next/image";
import FAQ from "./(components)/FAQ";
import ReadyForIt from "./(components)/ReadyForIt";

export default function Home() {
  return (
    <div className="relative max-w-full overflow-hidden">
      <FirstSection />
      <TrustedCompany />
      <HowItWork />
      <Features />
      <FavoriteTool />
      <LiveDemo />
      <CustomerTestimonials />
      <FAQ />
      <ReadyForIt />
      {/* <Logo /> */}
      {/* <Header1>Make AI your expert customer support agent</Header1>
      <Text>
        It's like having ChatGPT specifically for your product. Instantly answer
        your visitors' questions with a personalized chatbot trained on your
        website content.
      </Text>
      <ShadowNumber />
      <SubHead>Hello</SubHead>
      <Header2>Discover Our AI Chatbot Assistant - talkie</Header2> */}
      {/* <BackgroundObjects /> */}
      <DotObject className="w-24 h-24 top-[250px] left-[25%]" />
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

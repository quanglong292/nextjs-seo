import ShadowNumber from "@/components/templates/ShadowNumber";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Header1 from "@/components/ui/headers/Header1";
import Header2 from "@/components/ui/headers/Header2";
import SubHead from "@/components/ui/headers/SubHead";
import Logo from "@/components/ui/Logo";
import Text from "@/components/ui/Text";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-4">
      <Logo />
      <Header1>Make AI your expert customer support agent</Header1>
      <Text>
        It's like having ChatGPT specifically for your product. Instantly answer
        your visitors' questions with a personalized chatbot trained on your
        website content.
      </Text>
      <ShadowNumber />
      <div className="w-32 h-32 bg-blue-500 rounded-full animate-breathing"></div>
      <div className="w-16 h-16 bg-green-500 rounded-full animate-upDown"></div>
      <AnimatedButton />
      <SubHead>Hello</SubHead>
      <Header2>Discover Our AI Chatbot Assistant - talkie</Header2>
    </div>
  );
}

import BackgroundObjects from "@/components/templates/BackgroundObjects";
import Navigator from "@/components/templates/Navigator";
import ShadowNumber from "@/components/templates/ShadowNumber";
import Header1 from "@/components/ui/headers/Header1";
import Header2 from "@/components/ui/headers/Header2";
import SubHead from "@/components/ui/headers/SubHead";
import Text from "@/components/ui/Text";

export default function Home() {
  return (
    <div className="p-4">
      <Navigator />
      {/* <Logo /> */}
      <Header1>Make AI your expert customer support agent</Header1>
      <Text>
        It's like having ChatGPT specifically for your product. Instantly answer
        your visitors' questions with a personalized chatbot trained on your
        website content.
      </Text>
      <ShadowNumber />
      <SubHead>Hello</SubHead>
      <Header2>Discover Our AI Chatbot Assistant - talkie</Header2>
      <BackgroundObjects />
    </div>
  );
}

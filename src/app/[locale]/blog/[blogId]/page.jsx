import PageLayout from "@/components/layout/PageLayout";
import React from "react";
import { BLOG_PLACEHOLDER } from "../page";
import Img from "@/components/ui/Img";
import { Calendar, User } from "lucide-react";
import Header2 from "@/components/ui/headers/Header2";
import Text from "@/components/ui/Text";
import TestimonialCard from "./(components)/TestimonialSection";
import FeatureList from "./(components)/FeatureList";

const Page = async ({ params }) => {
  const blogId = (await params).blogId;
  const decodedBlogId = decodeURIComponent(blogId);
  const { image, categories, title, description } = BLOG_PLACEHOLDER;

  return (
    <PageLayout routeName={`Blog / ${decodedBlogId}`}>
      <div className="flex flex-col gap-4 p-4 md:p-0 md:w-[70%] mx-auto md:my-[5%]">
        <Img src={image} width={1400} />
        <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
          {categories.map((category, index) => {
            return (
              <div key={index} className="flex items-center gap-4">
                {!index && <User className="text-secondary" />}
                {index === 1 && <Calendar className="text-secondary" />}
                <span className="capitalize">{category}</span>
                {index < categories.length - 1 && (
                  <span className="p-[3px] bg-slate-200 rounded-full"></span>
                )}
              </div>
            );
          })}
        </div>
        <Header2>{title}</Header2>
        <Text>{description}</Text>
        {/* CONTENT SECTION */}
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          doloribus incidunt sed expedita quidem. Praesentium doloribus soluta
          cum temporibus perferendis tempore in nihil, iste consectetur error
          eaque laboriosam magnam facere.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          doloribus incidunt sed expedita quidem. Praesentium doloribus soluta
          cum temporibus perferendis tempore in nihil, iste consectetur error
          eaque laboriosam magnam facere.
        </Text>
        <TestimonialCard
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. that has Lorem Ipsum has been the industry's standard dummy text."
          authorImage="/images/avt-2.png"
          author="Lyndon"
        />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          doloribus incidunt sed expedita quidem. Praesentium doloribus soluta
          cum temporibus perferendis tempore in nihil, iste consectetur error
          eaque laboriosam magnam facere.
        </Text>
        <FeatureList
          title="Revolutionizing Customer Interaction"
          items={[
            "using machine learning and NLP, chatbots can provide personalized customer service by understanding customer's intent",
            "Chatbots are available 24/7 to answer customer queries, which improves customer experience & accurate responses",
            "Chatbots can handle multiple customer queries simultaneously, improving efficiency",
          ]}
        />
      </div>
    </PageLayout>
  );
};

export default Page;

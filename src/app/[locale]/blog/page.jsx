import PageLayout from "@/components/layout/PageLayout";
import SectionLayout from "@/components/layout/SectionLayout";
import ReadyForIt from "@/app/(components)/ReadyForIt";
import React from "react";
import BlogCard from "./(components)/BlogCard";

export const BLOG_PLACEHOLDER = {
  image: "/images/blog-cover-1.webp", // Replace with actual image URL
  title: "Chatbots: Revolutionizing Customer Service",
  description:
    "As the world becomes increasingly digital, chatbots have become a popular way for businesses to engage with customers and automate various processes.",
  date: "2020-02-28",
  categories: ["Wordpress", "February 28, 2020", "Business", "Fashion"],
  tags: ["AI", "BigData", "SearchEngine"],
  to: "/blog/Chatbots",
};

const Page = () => {
  return (
    <PageLayout routeName="Blog">
      <SectionLayout
        header="SiteGPT Blog"
        text="Official Blog of SiteGPT. Become a chatbot expert - learn about everything from normal chatbots to AI chatbots, ecommerce chatbots, customer service chatbots, and everything in between!"
        className="justify-center items-center flex-wrap lg:my-12 lg:w-[80%] mx-auto"
        headerClassName="md:w-[60%] mx-auto mb-12"
      >
        <div className="flex flex-wrap gap-4 justify-center w-full">
          <BlogCard {...BLOG_PLACEHOLDER} />
          <BlogCard {...BLOG_PLACEHOLDER} />
          <BlogCard {...BLOG_PLACEHOLDER} />
          <BlogCard {...BLOG_PLACEHOLDER} />
        </div>
      </SectionLayout>
      <ReadyForIt />
    </PageLayout>
  );
};

export default Page;

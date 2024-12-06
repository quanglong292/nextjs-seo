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
      <SectionLayout className="flex flex-col justify-center items-center md:flex-row flex-wrap lg:my-12 lg:w-[80%] mx-auto">
        <BlogCard {...BLOG_PLACEHOLDER} />
        <BlogCard {...BLOG_PLACEHOLDER} />
        <BlogCard {...BLOG_PLACEHOLDER} />
        <BlogCard {...BLOG_PLACEHOLDER} />
      </SectionLayout>
      <ReadyForIt />
    </PageLayout>
  );
};

export default Page;

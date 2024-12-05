"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SubHead from "@/components/ui/headers/SubHead";
import Header2 from "@/components/ui/headers/Header2";
import Img from "@/components/ui/Img";
import { twMerge } from "tailwind-merge";
import Text from "@/components/ui/Text";

const faqList = [
  {
    id: "item-1",
    question: "How quickly can I generate a website?",
    answer:
      "Within minutes. Our AI-powered system creates a complete, customized website based on your inputs and preferences.",
  },
  {
    id: "item-2",
    question: "Can I customize the generated design?",
    answer:
      "Yes. You have full control over colors, fonts, layouts, and content. The AI generates a starting point that you can refine to match your vision perfectly.",
  },
  {
    id: "item-3",
    question: "What type of websites can I create?",
    answer:
      "You can create various types including business websites, portfolios, landing pages, and blogs. The AI adapts to your specific needs and industry.",
  },
  {
    id: "item-4",
    question: "Is the generated code production-ready?",
    answer:
      "Yes. The generated code follows best practices, is fully responsive, and optimized for performance and SEO.",
  },
  {
    id: "item-5",
    question: "Do I need coding knowledge?",
    answer:
      "No coding required. Our AI handles all the technical aspects while you focus on your content and design preferences.",
  },
];

const FAQ = () => {
  const [activeItem, setActiveItem] = React.useState("item-1");

  return (
    <div className="my-[5%] lg:my-[10%] py-[5%] flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-4 my-8">
        <SubHead>FAQ</SubHead>
        <Header2 className="text-center">Frequently Asked Questions</Header2>
      </div>
      <div className="flex justify-center items-center gap-8 w-[80%] mx-auto">
        <Img
          className="hidden md:block md:w-[50%]"
          src="/images/question-img.png"
          width={500}
        />
        <div className="md:w-[50%]">
          <Accordion
            value={activeItem}
            onValueChange={setActiveItem}
            type="single"
            collapsible
            className="w-[350px] mx-auto md:w-full"
          >
            {faqList.map((faq) => (
              <AccordionItem
                className="mb-2 border-0"
                key={faq.id}
                value={faq.id}
              >
                <AccordionTrigger
                  className={twMerge(
                    "p-4 border-0 hover:none",
                    activeItem === faq.id
                      ? "rounded-t-lg text-white bg-secondary"
                      : "rounded-lg bg-section-background text-primary"
                  )}
                >
                  <Text
                    className={twMerge(
                      activeItem === faq.id ? "text-white" : "text-primary-900"
                    )}
                  >
                    {faq.question}
                  </Text>
                </AccordionTrigger>
                <AccordionContent className="border-[1px] border-t-0 border-gray-100 p-4 rounded-b-lg text-text-color">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

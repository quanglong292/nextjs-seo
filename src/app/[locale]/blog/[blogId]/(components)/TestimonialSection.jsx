import Img from "@/components/ui/Img";
import Text from "@/components/ui/Text";
import React from "react";
import { twMerge } from "tailwind-merge";

const TestimonialCard = ({ text, author, authorImage, className }) => {
  return (
    <section
      className={twMerge(
        "relative bg-primary-900 text-white rounded-lg px-6 py-8 flex flex-col items-center justify-center space-y-4 text-center shadow-md pt-16 my-8",
        className
      )}
    >
      <Text className="relative marker:text-3xl italic leading-relaxed text-white">
        {text}
      </Text>
      <div className="flex items-center space-x-3 mt-4">
        <Img
          src={authorImage}
          alt={author}
          width={50}
          className="w-10 h-10 rounded-full border-2 border-primary"
        />
        <div className="text-sm font-semibold">{author}</div>
      </div>
      <Img
        className="absolute top-0 left-4"
        src="/images/mark.png"
        width={50}
      />
    </section>
  );
};

export default TestimonialCard;

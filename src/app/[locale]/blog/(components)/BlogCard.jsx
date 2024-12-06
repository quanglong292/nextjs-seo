"use client";
import React, { memo } from "react";
import Img from "@/components/ui/Img";

import { twMerge } from "tailwind-merge";
import { Calendar, Tag, User } from "lucide-react";
import Header2 from "@/components/ui/headers/Header2";
import Text from "@/components/ui/Text";
import AnimatedButton from "@/components/ui/AnimatedButton";
import { useRouter } from "@/i18n/routing";

const BlogCard = ({
  image,
  title,
  description,
  date,
  categories,
  tags,
  to,
  className,
}) => {
  const router = useRouter();

  return (
    <div
      onClick={() =>
        router.push({
          pathname: "/blog/" + title,
        })
      }
      className={twMerge(
        "cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all flex flex-col space-y-4 w-[90%] md:w-[657px]",
        className
      )}
    >
      <div className="relative">
        <Img
          src={image}
          alt={title}
          className="w-full h-64 object-cover"
          width={668}
        />
      </div>
      <div className="p-6 space-y-4">
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
        <Header2 className="text-xl md:leading-8">{title}</Header2>
        <Text className="">{description}</Text>
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <Tag className="text-secondary" size={20} />
            <Text>Tags:</Text>
          </div>
          <div className="flex flex-wrap space-x-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-700 rounded-full px-3 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <AnimatedButton
          showIcon
          type="text"
          iconClassName="fill-primary-900"
          className="border-none p-0 min-w-0 w-fit bg-transparent hover:bg-transparent hover:text-primary-900"
        >
          Read more
        </AnimatedButton>
      </div>
    </div>
  );
};

export default memo(BlogCard);

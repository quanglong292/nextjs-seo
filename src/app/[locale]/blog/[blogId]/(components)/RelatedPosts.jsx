"use client";
import Image from "next/image";
import Header2 from "@/components/ui/headers/Header2";
import Text from "@/components/ui/Text";
import { Calendar, User } from "lucide-react";
import { Link } from "@/i18n/routing";

const RelatedPosts = ({ posts }) => {
  return (
    <div className="py-8 lg:py-16 mx-auto">
      <div className="mb-8">
        <Header2 className="lg:text-2xl font-bold">Related Posts</Header2>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {posts?.map((post, i) => (
          <article key={i} className="group">
            <Link href={`/blog/${post.title}`}>
              <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                <Image
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={300}
                />
              </div>
              <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
                {post.categories.map((category, index) => {
                  return (
                    <div key={index} className="flex items-center gap-4">
                      {!index && (
                        <User className="text-secondary w-4 h-4 md:w-6 md:h-6" />
                      )}
                      {index === 1 && (
                        <Calendar className="text-secondary w-4 h-4 md:w-6 md:h-6" />
                      )}
                      <span className="text-xs md:text-base capitalize">
                        {category}
                      </span>
                      {index < post.categories.length - 1 && (
                        <span className="p-[3px] bg-slate-200 rounded-full"></span>
                      )}
                    </div>
                  );
                })}
              </div>
              <Header2 className="mb-2 lg:text-xl font-bold leading-tight">
                {post.title}
              </Header2>
              <Text className="text-gray-600 dark:text-gray-400 line-clamp-2">
                {post.description}
              </Text>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;

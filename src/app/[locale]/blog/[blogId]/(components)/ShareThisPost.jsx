"use client";
import { useState } from "react";
import { Copy, Facebook, Linkedin, Twitter } from "lucide-react";
import Header2 from "@/components/ui/headers/Header2";

const ShareThisPost = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex justify-between items-center my-8">
      <Header2 className="lg:text-lg font-semibold mb-4">
        Share this post
      </Header2>
      <div className="flex gap-4">
        <button
          onClick={handleCopyLink}
          className="flex items-center justify-center p-3 border rounded-full hover:bg-gray-100 transition duration-300"
          title={copied ? "Link Copied!" : "Copy Link"}
        >
          <Copy className="w-5 h-5" />
        </button>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            window.location.href
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 border rounded-full hover:bg-gray-100 transition duration-300"
          title="Share on X"
        >
          <Twitter className="w-5 h-5" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            window.location.href
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 border rounded-full hover:bg-gray-100 transition duration-300"
          title="Share on Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
            window.location.href
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center p-3 border rounded-full hover:bg-gray-100 transition duration-300"
          title="Share on LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default ShareThisPost;

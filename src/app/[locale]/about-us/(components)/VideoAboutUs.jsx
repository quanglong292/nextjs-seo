"use client";
import Img from "@/components/ui/Img";
import { X } from "lucide-react";
import React, { useState } from "react";

const VideoAboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePlayButtonClick = () => {
    setIsOpen(true);
  };

  const handleCloseButtonClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative my-[5%]">
      {/* onClick={handlePlayButtonClick} */}
      <Img
        onClick={handlePlayButtonClick}
        className="min-w-[100vw] cursor-pointer"
        src="/images/video.png"
        width={1400}
      />
      {isOpen && (
        <div
          onClick={handleCloseButtonClick}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="relative p-4 pt-9 rounded-lg"
          >
            <button
              className="absolute top-2 right-2 text-white text-xl font-bold"
              onClick={handleCloseButtonClick}
            >
              <X />
            </button>
            <iframe
              className="w-full xl:w-[900px] h-[500px]"
              //   width="960"
              //   height="500"
              src="https://www.youtube.com/embed/fGPLOPhkdis?si=lVfcRa0gFxkA1ooE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoAboutUs;

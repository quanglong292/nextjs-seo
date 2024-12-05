"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Img from "@/components/ui/Img";
import React from "react";
import Header2 from "@/components/ui/headers/Header2";

const TrustedCompany = () => {
  return (
    <div className="bg-[#F2F4FF] p-8 md:p-[84px] max-w-full overflow-hidden">
      <Header2 className="text-xl text-center mb-12">
        Trusted by these leading companies
      </Header2>
      <Carousel
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem className="basis-1/2 lg:basis-1/6 p-0 flex justify-center">
            <Img src="/images/carousel-comp-1.png" width={120} height={50} />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/6 p-0 flex justify-center">
            <Img src="/images/carousel-comp-1.png" width={120} height={50} />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/6 p-0 flex justify-center">
            <Img src="/images/carousel-comp-3.png" width={120} height={50} />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/6 p-0 flex justify-center">
            <Img src="/images/carousel-comp-4.png" width={120} height={50} />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/6 p-0 flex justify-center">
            <Img src="/images/carousel-comp-5.png" width={120} height={50} />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/6 p-0 flex justify-center">
            <Img src="/images/carousel-comp-6.png" width={120} height={50} />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/6 p-0 flex justify-center">
            <Img src="/images/carousel-comp-1.png" width={120} height={50} />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/6 p-0 flex justify-center">
            <Img src="/images/carousel-comp-4.png" width={120} height={50} />
          </CarouselItem>
          <CarouselItem className="basis-1/2 lg:basis-1/6 p-0 flex justify-center">
            <Img src="/images/carousel-comp-3.png" width={120} height={50} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default TrustedCompany;

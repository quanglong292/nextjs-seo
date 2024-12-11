import SectionLayout from "@/components/layout/SectionLayout";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Header2 from "@/components/ui/headers/Header2";
import Img from "@/components/ui/Img";
import Text from "@/components/ui/Text";
import React from "react";

const teamMembers = [
  { name: "John Doe", role: "Developer", photo: "/images/avt-big-1.jpg" },
  { name: "Jane Smith", role: "Designer", photo: "/images/avt-big-1.jpg" },
  {
    name: "Sam Wilson",
    role: "Project Manager",
    photo: "/images/avt-big-1.jpg",
  },
  { name: "Sara Connor", role: "QA Engineer", photo: "/images/avt-big-1.jpg" },
  {
    name: "Mike Johnson",
    role: "DevOps Engineer",
    photo: "/images/avt-big-1.jpg",
  },
];

const OurTeam = () => {
  return (
    <SectionLayout subHead="Our Team" header="Unified Dream Team" className="lg:my-[5%]">
      <Carousel className="space-x-4 w-[90%] lg:w-5/6 mx-auto container py-8">
        <CarouselContent className="py-12">
          {teamMembers.map((member, index) => (
            <CarouselItem
              key={index}
              className="group basis-1/2 md:basis-1/3 p-0 flex justify-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex flex-col items-center w-[350px] p-4 bg-white shadow-lg rounded-md">
                <Img src={member.photo} alt={member.name} width={478} />
                <Header2 className="text-sm md:text-base lg:text-xl font-semibold transition-all group-hover:text-secondary mt-4">
                  {member.name}
                </Header2>
                <Text className="lg:text-sm">{member.role}</Text>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </SectionLayout>
  );
};

export default OurTeam;

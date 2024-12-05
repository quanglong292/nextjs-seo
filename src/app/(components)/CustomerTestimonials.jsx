"use client";
import Header2 from "@/components/ui/headers/Header2";
import SubHead from "@/components/ui/headers/SubHead";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import React from "react";
import Img from "@/components/ui/Img";
import Text from "@/components/ui/Text";

const testimonialData = [
  {
    id: 1,
    avatar: "/images/avt-1.png",
    name: "Denver Mark",
    role: "UX Designer",
    stars: 5,
    testimonial:
      "The attention to detail and professional service provided by the team exceeded our expectations. Highly recommended!",
  },
  {
    id: 2,
    avatar: "/images/avt-2.png",
    name: "Sarah Johnson",
    role: "Product Manager",
    stars: 4,
    testimonial:
      "Working with this team transformed our business. Their innovative solutions made a real impact.",
  },
  {
    id: 3,
    avatar: "/images/avt-3.png",
    name: "Michael Chen",
    role: "Tech Lead",
    stars: 5,
    testimonial:
      "Outstanding expertise and dedication. They delivered exactly what we needed, when we needed it.",
  },
  {
    id: 4,
    avatar: "/images/avt-1.png",
    name: "Emma Davis",
    role: "Marketing Director",
    stars: 5,
    testimonial:
      "The results speak for themselves. Our metrics improved significantly after implementing their solutions.",
  },
  {
    id: 5,
    avatar: "/images/avt-2.png",
    name: "Alex Turner",
    role: "CEO",
    stars: 4,
    testimonial:
      "A game-changing partnership that helped us scale our operations efficiently.",
  },
  {
    id: 6,
    avatar: "/images/avt-3.png",
    name: "Lisa Wong",
    role: "Project Manager",
    stars: 5,
    testimonial:
      "Exceptional communication and project delivery. They're now our go-to team for all projects.",
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex justify-center lg:justify-start gap-1 mb-2">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill={index < rating ? "currentColor" : "none"}
          stroke="currentColor"
          className="w-5 h-5 text-yellow-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
    </div>
  );
};

const CustomerTestimonials = () => {
  const [api, setApi] = React.useState();
  const [api2, setApi2] = React.useState();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const handleNavigate = (index) => {
    if (index < 0) {
      api?.scrollTo(count - 1);
      api2?.scrollTo(count - 1);
    } else if (index >= count) {
      api?.scrollTo(0);
      api2?.scrollTo(0);
    } else {
      api?.scrollTo(index);
      api2?.scrollTo(index);
    }
    // console.log("🚀 ~ handleNavigate ~ index:", { index, count });
  };

  React.useEffect(() => {
    if (!api || !api2) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCount(api2.scrollSnapList().length);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
    api2.on("select", () => {
      setCurrent(api2.selectedScrollSnap());
    });
  }, [api, api2]);

  React.useEffect(() => {
    console.log("🚀 ~ React.useEffect ~ current:", current);
  }, [current]);

  return (
    <div className="max-w-full my-[5%] lg:my-[10%] py-[5%] flex flex-col items-center gap-4 px-4 md:px-8 lg:px-[10%] overflow-hidden">
      <div className="flex flex-col items-center gap-4 my-4">
        <SubHead>Testimonial</SubHead>
        <Header2 className="text-center">What our client says</Header2>
      </div>
      <div className="relative z-10 flex flex-col lg:flex-row justify-center my-8 gap-12 lg:px-[10%] max-w-full md:h-[200px] overflow-hidden">
        <div className="w-[50%] lg:w-[30%] mx-auto flex flex-col gap-2 md:gap-6">
          <Carousel
            setApi={setApi2}
            opts={{
              align: "center",
              slidesToScroll: 1,
              containScroll: false,
              loop: true,
              dragFree: false,
              draggable: false,
              axis: {
                drag: false,
                move: false,
              },
              inViewThreshold: 0.6,
            }}
            className="w-full cursor-grab active:cursor-grabbing"
          >
            <CarouselContent className="-ml-4">
              {testimonialData.map((item, index) => (
                <CarouselItem
                  key={`${item.id}-${index}`}
                  className={`pl-4 py-4 lg:basis-1/3 transition-all duration-300 ${
                    current === index
                      ? "scale-125 opacity-100"
                      : "scale-75 opacity-50"
                  }`}
                >
                  <div className="flex items-center justify-center">
                    <Img
                      className="w-[80px] lg:w-[60px]"
                      src={item.avatar}
                      width={60}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex flex-col gap-3">
            <Header2 className="text-center text-xl">
              {testimonialData[current]?.name}
            </Header2>
            <Text className="text-center text-sm italic">
              {testimonialData[current]?.role}
            </Text>
          </div>
        </div>
        <div className="hidden lg:block h-auto min-h-[1em] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>
        <div className="lg:absolute right-12 top-0 flex flex-row justify-center gap-4">
          <svg
            width="32"
            height="28"
            viewBox="0 0 32 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.62985 0.802002C3.40985 0.802002 0.797852 3.488 0.797852 6.802C0.797852 10.114 3.40985 12.802 6.62985 12.802C12.4599 12.802 8.57385 24.4 0.797852 24.4V27.2C14.6759 27.202 20.1139 0.802002 6.62985 0.802002ZM23.4299 0.802002C20.2119 0.802002 17.5999 3.488 17.5999 6.802C17.5999 10.114 20.2119 12.802 23.4299 12.802C29.2619 12.802 25.3759 24.4 17.5999 24.4V27.2C31.4759 27.202 36.9139 0.802002 23.4299 0.802002Z"
              fill="#FF7F72"
            ></path>
          </svg>
        </div>
        <Carousel
          opts={{
            draggable: false,
            dragFree: false,
            axis: {
              drag: false,
              move: false,
            },
          }}
          setApi={setApi}
          className="mx-auto w-[50%] md:w-[70%]"
        >
          <CarouselContent>
            {testimonialData.map((item) => (
              <CarouselItem
                key={item.id}
                className="flex flex-col gap-12 justify-center max-w-full text-wrap"
              >
                <Header2 className="italic text-sm md:text-lg font-light text-center lg:text-left text-wrap">
                  "{item.testimonial}"
                </Header2>
                <StarRating rating={item.stars} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="lg:absolute right-12 bottom-0 flex flex-row justify-center gap-4">
          <button
            onClick={() => handleNavigate(current - 1)}
            className="transition-all cursor-pointer border-2 border-gray-400 hover:border-primary rounded-full p-2 hover:text-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition-all text-gray-400 hover:text-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => handleNavigate(current + 1)}
            className="transition-all cursor-pointer border-2 border-gray-400 hover:border-primary rounded-full p-2 hover:text-secondary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 transition-all text-gray-400 hover:text-secondary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonials;

import { twMerge } from "tailwind-merge";

const AnimatedButton = ({
  children,
  showIcon,
  type = "primary",
  className,
}) => {
  const types = {
    primary: "bg-primary hover:bg-secondary text-white",
    secondary: "bg-secondary hover:bg-primary text-white",
    text: "bg-white hover:bg-secondary text-black border hover:text-white",
  };
  return (
    <>
      <button
        className={twMerge(
          "group relative flex h-12 min-w-[170px] items-center rounded-lg font-medium bg-primary transition-all duration-300 ease-in-out px-2",
          !showIcon ? "justify-center" : "justify-center gap-2",
          types[type],
          className
        )}
      >
        <span className={"uppercase font-poppins font-medium text-sm"}>
          {children}
        </span>
        {showIcon && (
          <div className="relative h-4 w-4 overflow-hidden rounded-full mr-1">
            <div className="absolute top-[0.7em] left-[-0.1em] grid place-content-center transition-all w-full h-full duration-200 group-hover:-translate-y-5 group-hover:translate-x-4 ">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5  fill-white "
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mb-1 -translate-x-4 fill-white"
              >
                <path
                  d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>{" "}
          </div>
        )}
      </button>
    </>
  );
};
export default AnimatedButton;

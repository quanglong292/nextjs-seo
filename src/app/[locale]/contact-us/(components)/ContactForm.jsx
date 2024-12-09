"use client";
import SectionLayout from "@/components/layout/SectionLayout";
import AnimatedButton from "@/components/ui/AnimatedButton";
import Header2 from "@/components/ui/headers/Header2";
import SubHead from "@/components/ui/headers/SubHead";
import Text from "@/components/ui/Text";
import React from "react";
import { twMerge } from "tailwind-merge";

const ContactForm = () => {
  const [error, setError] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = e.target;
    if (!name.value || !email.value || !message.value) return setError(true);
    setForm({
      name: name.value,
      email: email.value,
      message: message.value,
    });
    setError(false);
  };

  return (
    <SectionLayout className="lg:my-[5%] justify-start items-center mx-auto">
      <div
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row justify-between items-center gap-12 p-4 md:p-0 md:w-[80%]"
      >
        <form className="w-full md:w-1/2 flex flex-col gap-4">
          <div className={twMerge("flex flex-col items-start gap-4 my-4")}>
            <SubHead className="capitalize">Leave A Message</SubHead>
            <Header2 className="capitalize">get in touch with us</Header2>
            <Text className="capitalize text-left">
              You can contact us at any time you like. We will get back to you
              as soon as possible.
            </Text>
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter Your Name *"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email *"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Enter Your Message"
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          {error && (
            <Text
              className="m-0 border-[1px] p-1 px-4 border-secondary
            "
            >
              Please fill in all the required fields *
            </Text>
          )}
          <AnimatedButton showIcon type="secondary" htmltype="submit">
            Submit
          </AnimatedButton>
        </form>
        <iframe
          className="border-0 w-full md:w-1/2 h-[500px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1354403764776!2d106.80772877583911!3d10.877301657323335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d9111bc44233%3A0xdb9dd32f986c0c65!2sc%C3%B4ng%20ty%20TNHH%20QKIT%20Software!5e0!3m2!1svi!2s!4v1733713689152!5m2!1svi!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </SectionLayout>
  );
};

export default ContactForm;

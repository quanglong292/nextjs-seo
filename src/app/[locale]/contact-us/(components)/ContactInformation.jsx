"use client";
import { SocialIcon } from "@/app/(components)/Footer";
import SectionLayout from "@/components/layout/SectionLayout";
import Header2 from "@/components/ui/headers/Header2";
import SubHead from "@/components/ui/headers/SubHead";
import Img from "@/components/ui/Img";
import Text from "@/components/ui/Text";
import { ADDRESS, EMAIL, PHONE } from "@/shared/constants/information.constant";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import React from "react";
import { twMerge } from "tailwind-merge";

const ContactInformation = () => {
  const handleClickMail = () => {
    window.location.href = "mailto:" + EMAIL;
  };
  return (
    <SectionLayout className="bg-section-background lg:my-[5%] justify-start items-center mx-auto">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 p-4 md:p-0 md:w-[80%]">
        <Img
          className="border-0 w-full md:w-1/2 max-w-full md:p-12"
          width={600}
          src="/images/contact-img.png"
        />
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className={twMerge("flex flex-col items-start gap-4 my-4")}>
            <SubHead className="capitalize">Contact Us</SubHead>
            <Header2 className="capitalize">
              we are always ready to help you
            </Header2>
            <Text className="capitalize text-left">
              You can contact us at any time you like. We will get back to you
              as soon as possible.
            </Text>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <Phone className="w-6 h-6" />
                <Text className="lg:text-sm capitalize transition-all hover:text-secondary cursor-pointer">
                  {PHONE}
                </Text>
              </div>
              <div
                onClick={handleClickMail}
                className="flex items-center gap-6"
              >
                <Mail className="w-6 h-6" />
                <Text className="lg:text-sm transition-all hover:text-secondary cursor-pointer">
                  {EMAIL}
                </Text>
              </div>
              <div className="flex items-center gap-6">
                <MapPin className="w-6 h-6" />
                <Text className="lg:text-sm capitalize transition-all hover:text-secondary cursor-pointer">
                  {ADDRESS}
                </Text>
              </div>
              <div className="flex justify-start items-center gap-4 mt-4">
                <SocialIcon link="https://www.facebook.com/p/QKIT-Software-100076370654780/?locale=vi_VN">
                  <Facebook />
                </SocialIcon>
                <SocialIcon link="https://vn.linkedin.com/company/qkit">
                  <Linkedin />
                </SocialIcon>
                <SocialIcon>
                  <Twitter />
                </SocialIcon>
                <SocialIcon>
                  <Instagram />
                </SocialIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

export default ContactInformation;

import React from "react";
import ContactForm from "./(components)/ContactForm";
import ReadyForIt from "@/app/(components)/ReadyForIt";
import PageLayout from "@/components/layout/PageLayout";
import ContactInformation from "./(components)/ContactInformation";

const ContactUs = () => {
  return (
    <PageLayout routeName="Contact Us">
      <ContactForm />
      <ContactInformation />
      <ReadyForIt />
    </PageLayout>
  );
};

export default ContactUs;

import CustomerTestimonials from "@/app/(components)/CustomerTestimonials";
import FAQ from "@/app/(components)/FAQ";
import ReadyForIt from "@/app/(components)/ReadyForIt";
import PageLayout from "@/components/layout/PageLayout";
import SectionLayout from "@/components/layout/SectionLayout";
import PricingCard from "@/components/ui/PriceCard";
import { PRICE_CARDS } from "@/shared/constants/price.constant";
import React from "react";

const Page = () => {
  return (
    <PageLayout routeName="Pricing Plan">
      <SectionLayout
        subHead="Pricing Plan"
        header="Pays for itself in saved support time"
      >
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center mt-6 p-4 md:p-0 w-full mx-auto">
          {PRICE_CARDS.map((card) => (
            <PricingCard
              {...card}
              key={card.id}
              plan={card.title}
              price={card.price}
              features={card.features}
              isPopular={card.isPopular}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </SectionLayout>
      <div className="bg-section-background">
        <CustomerTestimonials />
      </div>
      <FAQ />
      <ReadyForIt />
    </PageLayout>
  );
};

export default Page;

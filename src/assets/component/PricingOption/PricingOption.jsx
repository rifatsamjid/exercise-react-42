import React, { use } from "react";
import PricingCard from "./PricingCard";

const PricingOption = ({ pricingPromise }) => {
  const data = use(pricingPromise);
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl">Get our MemberShip</h1>
      <div>
        {data.map((pricing) => (
          <PricingCard key={pricing.id} pricing={pricing}></PricingCard>
        ))}
      </div>
    </div>
  );
};

export default PricingOption;

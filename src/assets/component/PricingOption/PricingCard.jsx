import React from "react";
import Feature from "./Feature";

const PricingCard = ({ pricing }) => {
  const { name, price, duration, description, features } = pricing;
  return (
    <div className="bg-amber-600 flex flex-col rounded-2xl p-4">
      <div>
        <h1 className="text-4xl">{name}</h1>
        <h4 className="text-xl my-3">
          ${price}/{duration}
        </h4>
      </div>
      <div className="bg-amber-400 p-3 rounded-xl flex-1">
        <p className="mb-5">{description} </p>
        <span>
          {features.map((feature, index) => (
            <Feature key={index} feature={feature}></Feature>
          ))}
        </span>
      </div>
      <button className="btn w-full mt-4">Subscribe</button>
    </div>
  );
};

export default PricingCard;

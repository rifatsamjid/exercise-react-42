import { CircleCheck } from "lucide-react";
import React from "react";

const Feature = ({ feature }) => {
  return (
    <div className="flex items-center gap-2">
      <CircleCheck className="text-green-800" />
      <p className="mt-2">{feature}</p>
    </div>
  );
};

export default Feature;

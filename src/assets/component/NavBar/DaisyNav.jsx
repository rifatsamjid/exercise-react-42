import React from "react";

const DaisyNav = ({ data }) => {
  return (
    <div>
      <li className="px-5  hover:bg-green-200">{data.label}</li>
    </div>
  );
};

export default DaisyNav;

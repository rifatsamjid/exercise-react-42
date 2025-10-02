import React from "react";

const NavBar = () => {
  return (
    <div>
      <ul className="flex gap-3">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Account</a>
        </li>
        <li>
          <a href="">Log Out</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;

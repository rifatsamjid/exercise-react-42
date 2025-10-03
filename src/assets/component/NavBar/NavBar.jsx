import React, { useState } from "react";
import DaisyNav from "./DaisyNav";
import { Menu, X } from "lucide-react";

const navbarItems = [
  {
    id: 1,
    label: "Home",
    path: "/",
  },
  {
    id: 2,
    label: "About",
    path: "/about",
  },
  {
    id: 3,
    label: "Services",
    path: "/services",
    submenu: [
      { id: 31, label: "Web Development", path: "/services/web-dev" },
      { id: 32, label: "Mobile Apps", path: "/services/mobile-apps" },
      { id: 33, label: "UI/UX Design", path: "/services/ui-ux" },
    ],
  },
  {
    id: 4,
    label: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    label: "Contact",
    path: "/contact",
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const links = navbarItems.map((data) => (
    <DaisyNav key={data.id} data={data}></DaisyNav>
  ));
  return (
    <nav className="flex justify-between mt-4 mx-10">
      <span className="flex gap-3.5" onClick={() => setOpen(!open)}>
        {open ? (
          <X className="md:hidden"></X>
        ) : (
          <Menu className="md:hidden"></Menu>
        )}
        <ul
          className={`md:hidden absolute text-black ${
            open ? "top-8" : "-top-40"
          } bg-amber-500 duration-1000 rounded-xl`}
        >
          {links}
        </ul>
        <h3>My Navbar</h3>
      </span>
      <ul className="md:flex hidden gap-3">
        {links}
        {/* <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Account</a>
        </li>
        <li>
          <a href="">Log Out</a>
        </li> */}
      </ul>
      <h3>Login</h3>
    </nav>
  );
};

export default NavBar;

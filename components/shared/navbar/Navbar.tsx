import React from "react";
import PrimaryNav from "./PrimaryNav";
import SecoendaryNav from "./SecoendaryNav";

const Navbar = () => {
  return (
    <div className="bg-[#1A1A1A] z-50 sticky top-0 w-full">
      <PrimaryNav />
      <SecoendaryNav />
    </div>
  );
};

export default Navbar;

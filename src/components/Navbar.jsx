import React from "react";
import { Logo } from "../images";

const Navbar = () => {
  return (
    <nav className="bg-gray-500 p-4 flex items-center justify-between dir-ltr  ">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-8 w-8 mr-2" />
        <span className="text-xs to-black     ">
          ایران ساین راهکار جامع امضای دیجیتال
        </span>
      </div>
      <div>{/* Add your navigation links here */}</div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Logo, Vector } from "../images";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white p-4 flex items-center justify-between border dir-ltr lg:px-[235px]">
      <div className="flex items-center text-myblue">
        <div className="flex items-center">
          <img src={Vector} alt=" " className="h-6 w-6 mr-2" />
          <span className=" mr-4">EN|</span>
        </div>
        <Link to="/about" className="mr-4 ">
          درباره ما
        </Link>
        <Link to="/blog" className="mr-4">
          بلاگ
        </Link>
        <Link to="/products" className="mr-4">
          {" "}
          محصولات
        </Link>
        <Link to="/" className="mr-4">
          {" "}
          خانه
        </Link>
      </div>
      <div className=" flex items-center">
        <span className=" font-medium text-myblue"> ایران ساین </span>{" "}
        <img src={Logo} alt="Logo" className=" " />
      </div>
    </header>
  );
};
export default Header;

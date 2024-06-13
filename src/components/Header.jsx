import React from "react";
import { Logo, Vector } from "../images";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white p-4 flex items-center justify-between border dir-ltr lg:px-[235px]">
      <div className="flex items-center gap-4 text-myblue">
        <div className="flex items-center">
          <img src={Vector} alt=" " className="h-6 w-6 mr-2" />
          <span>EN|</span>
        </div>
        <Link to="/about">درباره ما</Link>
        <Link to="/blog">بلاگ</Link>
        <Link to="/products"> محصولات</Link>
        <Link to="/"> خانه</Link>
      </div>
      <div className=" flex items-center">
        <span className=" font-medium text-myblue"> ایران ساین </span>{" "}
        <img src={Logo} alt="Logo" className=" " />
      </div>
    </header>
  );
};
export default Header;

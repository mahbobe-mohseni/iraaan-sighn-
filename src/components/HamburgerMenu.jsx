import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "./Icon";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative lg:hidden">
      <button className="text-dark focus:outline-none" onClick={toggleMenu}>
        <Icon name="menu" className="text-dark text-[36px]" />
      </button>
      {isOpen && (
        <div className="absolute left-0 w-48 bg-white rounded-md border border-complementary-50 shadow-lg z-20 text-right">
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            خانه
          </Link>
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            محصولات
          </Link>
          <Link
            to="/"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            درباره ما
          </Link>
        </div>
      )}
    </div>
  );
};

<div className="App">
  <header className="bg-white shadow">
    <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="text-blue-500 text-xl font-bold">لوگو</div>
      <nav className="hidden md:flex space-x-4">
        <Link to="/" className="text-gray-800 hover:text-blue-500">
          خانه
        </Link>
        <Link to="/" className="text-gray-800 hover:text-blue-500">
          محصولات
        </Link>
        <Link to="/" className="text-gray-800 hover:text-blue-500">
          درباره ما
        </Link>
      </nav>
      <div className="md:hidden">
        <HamburgerMenu />
      </div>
    </div>
  </header>
</div>;

export default HamburgerMenu;

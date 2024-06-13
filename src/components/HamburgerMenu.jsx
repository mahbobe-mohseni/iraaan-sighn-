import React, { useState } from 'react';
import { Logo, Vector } from "../images";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="text-blue-500 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">خانه</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">محصولات</a>
          <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">درباره ما</a>
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
      <a href="#" className="text-gray-800 hover:text-blue-500">خانه</a>
      <a href="#" className="text-gray-800 hover:text-blue-500">محصولات</a>
      <a href="#" className="text-gray-800 hover:text-blue-500">درباره ما</a>
    </nav>
    <div className="md:hidden">
      <HamburgerMenu />
    </div>
  </div>
</header>
</div>

export default HamburgerMenu;
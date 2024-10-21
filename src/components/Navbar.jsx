import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [colorChange, setColorChange] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    <div
      className={`h-[80px] text-gray-400 fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        colorChange ? "bg-[#01002c]" : "nav-bg"
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex justify-between items-center h-full">
        <h1 className="ml-4 text-3xl font-bold primary-color">
          Ishara Stanley
        </h1>

        <ul className="hidden md:flex">
          <li className="p-5">
            <a href="#about">About</a>
          </li>
          <li className="p-5">
            <a href="#skills">Skills</a>
          </li>
          <li className="p-5">
            <a href="#work">Work</a>
          </li>
          <li className="p-5">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <div
          onClick={handleNav}
          className="block mr-6 cursor-pointer md:hidden"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div
        className={
          nav
            ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="m-4 text-3xl primary-color">Ishara Stanley</h1>

        <ul className="p-8 text-2xl">
          <li className="p-2">
            <a href="#about">About</a>
          </li>
          <li className="p-2">
            <a href="#work">Work</a>
          </li>
          <li className="p-2">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

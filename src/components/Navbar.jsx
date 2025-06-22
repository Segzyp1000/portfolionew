import React, { useState } from "react";
import logo from "../assets/SEGUN.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function Navbar() {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;
    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <nav className="px-8 md:px-16 lg:px-24 p-4">
      <div
        className={`w-full py-2 flex justify-between item-center  ${
          openNavigation ? "bg-black/40" : "bg-black/5 backdrop-blur-sm"
        }`}
      >
        <div className="py-2">
          <img src={logo} alt="" width={85} height={85} className="p-2" />
        </div>
        <div className="hidden md:flex space-x-6 p-2">
          <a href="#home" className="h hover:text-gray-400">
            Home
          </a>
          <a href="#aboutme" className=" hover:text-gray-400">
            About me
          </a>
          <a href="#projects" className=" hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className=" hover:text-gray-400 ">
            Contact
          </a>
        </div>
        <a
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact me
        </a>
        <div className="md:hidden p-3">
          {openNavigation ? (
            <AiOutlineClose
              size={25}
              className="text-white"
              onClick={toggleNavigation}
            />
          ) : (
            <RxHamburgerMenu
              size={25}
              className="text-white"
              onClick={toggleNavigation}
            />
          )}
        </div>
        <div
          className={`${
            openNavigation ? "flex" : "hidden"
          } md:hidden fixed flex-col py-10 justify-center items-center bg-gray-800 text-white p-4  top-16 left-0 z-50 w-full h-[92%] space-y-7`}
        >
          <ul className="space-y-20 mt-12 flex flex-col justify-center items-center">
            <li className="py-2">
              <a
                href="#home"
                onClick={handleClick}
                className="hover:text-gray-400"
              >
                Home
              </a>
            </li>
            <li className="py-2">
              <a
                href="#aboutme"
                onClick={handleClick}
                className="hover:text-gray-400"
              >
                About me
              </a>
            </li>

            <li className="py-2">
              <a
                href="#projects"
                onClick={handleClick}
                className="hover:text-gray-400"
              >
                Projects
              </a>
            </li>
            <li className="py-2">
              <a
                href="#contact"
                onClick={handleClick}
                className="hover:text-gray-400"
              >
                Contact
              </a>
            </li>
          </ul>
          <a href="#contact">
            <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-2 py-4 rounded-full items-center">
              Contact me
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

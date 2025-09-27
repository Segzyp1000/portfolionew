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
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 lg:px-24 py-3 bg-black/30 backdrop-blur-md shadow-md">
      <div
        className={`w-full py-2 flex justify-between items-center ${
          openNavigation ? "bg-black/40" : "bg-black/5 backdrop-blur-sm"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            loading="lazy"
            alt="Logo"
            width={85}
            height={85}
            className="p-2 hover:scale-105 transition-transform"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-white font-medium">
          {["Home", "About me", "Projects"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "")}`}
              className="relative group"
            >
              {link}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          Contact me
        </a>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden p-3 z-50 ">
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
      </div>

      {/* Backdrop Overlay */}
      {openNavigation && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-500"
          onClick={handleClick}
        ></div>
      )}

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed top-0 right-0 z-40 w-4/5 max-w-sm h-screen bg-gray-900 text-white flex flex-col justify-center items-center transform transition-transform duration-500 ease-in-out
          ${openNavigation ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
      >
        <ul className="space-y-10 text-2xl font-medium">
          <li>
            <a href="#home" onClick={handleClick} className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#aboutme" onClick={handleClick} className="hover:text-gray-400">
              About me
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleClick} className="hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleClick} className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
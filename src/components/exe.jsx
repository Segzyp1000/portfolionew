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
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 lg:px-24 py-3 bg-black/40 backdrop-blur-md shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
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
        <div className="md:hidden">
          {openNavigation ? (
            <AiOutlineClose
              size={28}
              className="text-white cursor-pointer"
              onClick={toggleNavigation}
            />
          ) : (
            <RxHamburgerMenu
              size={28}
              className="text-white cursor-pointer"
              onClick={toggleNavigation}
            />
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`${
          openNavigation ? "flex" : "hidden"
        } md:hidden fixed top-0 left-0 w-full h-full bg-black/90 backdrop-blur-sm flex-col items-center justify-center space-y-12 text-white text-lg font-semibold transition`}
      >
        {["Home", "About me", "Projects", "Contact"].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(" ", "")}`}
            onClick={handleClick}
            className="hover:text-green-400 transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;

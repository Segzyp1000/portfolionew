import React, { useState, useEffect } from "react";
import logo from "../assets/SEGUN.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function Navbar() {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const minSwipeDistance = 60;

  /* ----------------------------
     Scroll Lock Safety Cleanup
  ----------------------------- */
  useEffect(() => {
    return () => enablePageScroll();
  }, []);

  /* ----------------------------
     Toggle Menu
  ----------------------------- */
  const toggleNavigation = () => {
    setOpenNavigation((prev) => {
      const next = !prev;
      next ? disablePageScroll() : enablePageScroll();
      return next;
    });
  };

  /* ----------------------------
     Close Menu
  ----------------------------- */
  const closeMenu = () => {
    setOpenNavigation(false);
    enablePageScroll();
  };

  /* ----------------------------
     Swipe Handlers
  ----------------------------- */
  const onTouchStart = (e) => {
    setTouchEndX(null);
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    // Swipe LEFT → RIGHT (close)
    if (distance < -minSwipeDistance && openNavigation) {
      closeMenu();
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 lg:px-24 py-3 bg-black/30 backdrop-blur-md shadow-md">
      {/* Navbar Content */}
      <div className="container w-full py-2 flex justify-between items-center">
        {/* Logo */}
        <img
          src={logo}
          loading="lazy"
          alt="Logo"
          width={85}
          height={85}
          className="p-2 hover:scale-105 transition-transform"
        />

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

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:scale-105 transition-transform"
        >
          Contact me
        </a>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50 p-3">
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

      {/* Backdrop */}
      {openNavigation && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 z-40 w-4/5 max-w-sm h-screen bg-gray-900 text-white
        flex flex-col justify-center items-center transform transition-transform duration-500 ease-in-out
        ${openNavigation ? "translate-x-0" : "translate-x-full"}`}
        onClick={closeMenu}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <ul
          className="space-y-10 text-2xl font-medium"
          onClick={(e) => e.stopPropagation()}
        >
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#aboutme" onClick={closeMenu}>About me</a></li>
          <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
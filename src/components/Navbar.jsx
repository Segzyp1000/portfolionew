import { useState, useEffect, useRef } from "react";
import logo from "../assets/SEGUN.png";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

function Navbar() {
  const [openNavigation, setOpenNavigation] = useState(false);
  const menuRef = useRef(null); // Reference to the mobile menu

  /* 1. Close menu when clicking outside */
  useEffect(() => {
    const handleOutsideClick = (event) => {
      // If the menu is open AND the click is NOT inside the menuRef
      if (openNavigation && menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    // Add listener when menu is open
    if (openNavigation) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openNavigation]);

  /* 2. Scroll Lock Cleanup */
  useEffect(() => {
    return () => enablePageScroll();
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      closeMenu();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const closeMenu = () => {
    setOpenNavigation(false);
    enablePageScroll();
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 lg:px-24 py-3 bg-black/30 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <img src={logo} alt="Logo" width={85} height={85} className="p-2" />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8 text-white">
          <a href="#home">Home</a>
          <a href="#aboutme">About me</a>
          <a href="#projects">Projects</a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="md:hidden z-[60] text-white p-2" 
          onClick={(e) => {
            e.stopPropagation(); // Prevent this click from triggering handleOutsideClick
            toggleNavigation();
          }}
        >
          {openNavigation ? <AiOutlineClose size={25} /> : <RxHamburgerMenu size={25} />}
        </button>
      </div>

      {/* BACKDROP (The dark overlay) */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          openNavigation ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ zIndex: 40 }}
      />

      {/* MOBILE MENU (The side panel) */}
      <div
        ref={menuRef} // Connect the Ref here
        className={`md:hidden fixed top-0 right-0 h-screen w-4/5 max-w-sm bg-gray-900 text-white shadow-2xl transform transition-transform duration-500 ease-in-out ${
          openNavigation ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 50 }}
      >
        <ul className="flex flex-col items-center justify-center h-full space-y-10 text-2xl">
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
import { useEffect, useState } from "react";
import logo from "../assets/SEGUN.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#aboutme" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      sections.forEach((section) => {
        if (section) {
          const top = section.offsetTop - 120;
          const height = section.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock scroll when mobile menu opens
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between h-20">
            
            {/* LOGO */}
            <a
              href="#home"
              className="text-2xl font-bold tracking-wide"
            >
                <img src={logo} alt="Logo" width={85} height={85} className="p-2" />
            </a>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-medium transition duration-300 hover:text-green-400 ${
                      active === sectionId
                        ? "text-green-400"
                        : "text-white/80"
                    }`}
                  >
                    {link.name}

                    {/* Active Dot */}
                    {active === sectionId && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-green-400"
                      />
                    )}
                  </a>
                );
              })}

              
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center z-50"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-green-500/10 blur-2xl rounded-full" />

              {/* Hamburger */}
              <div className="relative w-6 h-6">
                <span
                  className={`absolute left-0 w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                    isOpen
                      ? "rotate-45 top-3"
                      : "top-1"
                  }`}
                />

                <span
                  className={`absolute left-0 top-3 w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />

                <span
                  className={`absolute left-0 w-6 h-0.5 bg-white rounded transition-all duration-300 ${
                    isOpen
                      ? "-rotate-45 top-3"
                      : "top-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-xl z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* MENU PANEL */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 w-[80%] h-screen bg-black/90 backdrop-blur-2xl border-l border-white/10 z-50 md:hidden"
            >
              {/* Glow */}
              <div className="absolute top-20 right-0 w-72 h-72 bg-green-500/10 blur-3xl rounded-full" />

              <div className="flex flex-col justify-center h-full px-10">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.12,
                      },
                    },
                  }}
                  className="flex flex-col gap-8"
                >
                  {navLinks.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 30,
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                        },
                      }}
                      className="text-3xl font-semibold text-white/80 hover:text-green-400 transition duration-300"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
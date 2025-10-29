import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaJs, FaGithub, FaCss3Alt } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

function About() {
  const techIcons = [
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML" },
    { icon: <FaCss3Alt className="text-blue-600" />, name: "CSS3" },
    { icon: <RiNextjsFill className="text-white" />, name: "Next.js" },
    { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind" },
    { icon: <FaGithub className="text-gray-400" />, name: "GitHub" },
  ];

  // Floating warm animation for icons
  const iconVariants = {
    floating: {
      y: [0, -10, 0],
      scale: [1, 1.1, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    },
  };

  // Fade in when scrolled into view
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  // Parent animation to stagger children (icons)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // delay each icon
        delayChildren: 0.3,
      },
    },
  };

  // Each icon reveal animation
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="aboutme"
      className="container relative bg-black/5 py-20 px-6 md:px-16 lg:px-24 overflow-hidden mx-auto"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        {/* LEFT — About Text */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left space-y-6"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-bold">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Me
            </span>
          </h2>

          <p className="text-gray-400 leading-relaxed">
            I'm a passionate Frontend Developer who enjoys crafting elegant,
            responsive, and user-focused web applications. I transitioned from
            sales to tech, driven by a deep curiosity and love for innovation.
          </p>

          <p className="text-gray-400 leading-relaxed">
            My goal is to merge creativity and logic — building interactive,
            accessible, and efficient solutions that delight users and drive
            results.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            {[
              { number: "2+", label: "Years Experience" },
              { number: "35+", label: "Projects" },
              { number: "2+", label: "Internships" },
            ].map((stat) => (
              <div key={stat.label}>
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {stat.number}
                </h3>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Animated Tech Icons */}
        <motion.div
          className="lg:w-1/2 relative flex flex-col items-center"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl font-bold mb-5">
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Stack
            </span>
          </h2>

          {/* Glowing Background */}
          <div className="absolute w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-500/20 blur-3xl rounded-full animate-pulse"></div>

          {/* Tech Icons Grid */}
          <motion.div
            className="grid grid-cols-3 gap-6 z-10 mt-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {techIcons.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.2,
                  rotate: 3,
                  boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.5)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <motion.div
                  className="text-5xl p-4 rounded-full bg-white/5 hover:bg-white/10 transition duration-300 cursor-pointer"
                  variants={iconVariants}
                  animate="floating"
                >
                  {tech.icon}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
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

  // Floating animation
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

  // Fade animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  // Stagger container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  // Each icon
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
      className="relative bg-black/5 py-20 px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* 🌌 Background Layers */}

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-20 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Left Glow */}
      <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] bg-green-500/20 blur-3xl rounded-full" />

      {/* Right Glow */}
      <div className="absolute bottom-0 right-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* Center Blend Glow */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-green-400/10 to-blue-500/10 blur-3xl rounded-full" />
      </div>

      {/* 🌐 Main Content */}
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
            I have over 5 years of experience in sales and fintech, working
            directly with merchants and customers. I also build frontend
            applications using React and JavaScript, focusing on tools that
            improve business operations, customer experience, and revenue growth.
          </p>

          <p className="text-gray-400 leading-relaxed">
            I bridge the gap between business needs and technology by creating
            solutions that are not only functional but also user-friendly and scalable.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            {[
              { number: "5+", label: "Years Experience" },
              { number: "35+", label: "Tech Projects" },
              { number: "2+", label: "Internships" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 backdrop-blur-md p-4 rounded-xl hover:scale-105 transition"
              >
                <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {stat.number}
                </h3>
                <p className="text-gray-500 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT — Tech Stack */}
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

          {/* Glow Background */}
          <div className="absolute w-80 h-80 bg-gradient-to-r from-green-400/20 to-blue-500/20 blur-3xl rounded-full animate-[pulse_4s_ease-in-out_infinite]" />

          {/* Rotating Ring */}
          <div className="absolute w-96 h-96   animate-spin-slow" />

          {/* Icons */}
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
                  className="text-5xl p-4 rounded-full bg-white/5 hover:bg-white/10 transition duration-300 cursor-pointer backdrop-blur-md"
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
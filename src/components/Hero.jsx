import segun from "../assets/segx.jpg";

export default function Hero() {
  return (
    <section
      className="text-center py-16 md:py-24 bg-black/5 px-4 mt-20"
      id="home"
    >
      {/* Profile Image */}
      <img
        src={segun}
        alt="Segun Olowoyeye"
        className="mx-auto mb-6 h-32 w-32 md:h-48 md:w-48 rounded-full object-cover object-top shadow-lg ring-4 ring-white/10"
      />

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold leading-snug">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Segun Olowoyeye
        </span>
        , <br className="md:hidden" /> a Frontend Developer
      </h1>

      {/* Subtext */}
      <p className="mt-3 text-sm md:text-lg text-gray-500 max-w-lg mx-auto">
        I specialize in building modern and responsive web applications that
        deliver great user experiences.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
        <a
          href="https://drive.google.com/file/d/1t5DipNiPvzmD0Fxe4yqGjMGq3HMFt7V5/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-red-500 to-blue-500 text-white px-6 py-2 rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          📄 Resume
        </a>

        <a
          href="#projects"
          className="border border-gray-400 text-gray-700 dark:text-gray-200 px-6 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
        >
          👨‍💻 View Projects
        </a>
      </div>
    </section>
  );
}
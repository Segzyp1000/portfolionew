import segun from "../assets/segx.jpg";

export default function () {
  return (
    <div className="text-center py-20 mt-5 md:mt-0 bg-black/5" id="#home ">
      <img
        src={segun}
        alt="image of Segun Olowoyeye"
        className="img-reset-cursor hidden md:block mx-auto mb-8 h-48 w-48 rounded-full object-cover object-top "
      />

      <h1 className="h1 text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 overflow-x-auto">
          Segun Olowoyeye
        </span>
        , a Frontend Developer
      </h1>
      <p className="mt-4 text-mono font-mono text-gray-400">
        I specialize in building modern and responsive web applications
      </p>
      <div className="mt-8 space-x-4">
        <a
          href="https://drive.google.com/file/d/1t5DipNiPvzmD0Fxe4yqGjMGq3HMFt7V5/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-gradient-to-r from-red-500 to-blue-500 text-white inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
}

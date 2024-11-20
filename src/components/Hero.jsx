import React from "react";
import segun from "../assets/segx.jpg";

export default function () {
  return (
    <div className="text-center pt-20 bg-black/5">
      <img
        src={segun}
        alt=""
        className="hidden md:block mx-auto mb-8 h-48 w-48 rounded-full onject-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="h1 text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Segun Olowoyeye
        </span>
        , a Frontend Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications
      </p>
      <div className="mt-8 space-x-4">
        <button className="bg-gradient-to-r from-gray-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact me
        </button>
        <button className="bg-gradient-to-r from-red-500 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Resume
        </button>
      </div>
    </div>
  );
}

import React from "react";
import Segzy from "../assets/Segzy.png";

function About() {
  return (
    <div id="aboutme">
      <div className="container mx-auto  md:px-16 lg:px-24 space-x-0 md:space-x-10 py-12">
        <h2 className="text-4xl font-bold text-center py-12">About me</h2>
        <div className="flex flex-col lg:flex-row items-center md:space-x-12 p">
          <img
            src={Segzy}
            alt=""
            className="rounded oject-cover mb-8 md:mb-0"
          />
          <div className="flex-1 py-8 ">
            <p className="text-mono font-mono text-gray-400 text-center md:text-left">
              I'm a driven web developer dedicated to building cutting-edge,
              responsive web applications. My transition from sales to
              development was fueled by a genuine passion for technology. Now,
              I'm committed to creating intuitive, efficient, and user-centric
              digital experience
            </p>
            <div className="space-y-4 py-5">
              <h2 className="flex justify-center items-center text-center text-3xl font-bold pt-7">
                TechStack
              </h2>
              <div className="space-y-9">
                <div className="flex flex-wrap items-center md:flex-nowrap">
                  <label
                    htmlFor="htmlandcss"
                    className="w-full md:w-2/12 text-center md:text-left"
                  >
                    HTML & CSS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 md:ml-4">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-12/12"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-9">
                <div className="flex items-center">
                  <label
                    htmlFor="htmlandcss"
                    className="w-full md:w-2/12 text-center md:text-left"
                  >
                    JAVASCRIPT
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 md:ml-4">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>
              </div>

              <div className="space-y-9">
                <div className="flex items-center">
                  <label
                    htmlFor="htmlandcss"
                    className="w-full md:w-2/12 text-center md:text-left"
                  >
                    REACTJS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 ml-0 md:ml-4">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-9">
                <div className="flex items-center">
                  <label
                    htmlFor="htmlandcss"
                    className="w-full md:w-2/12 text-center md:text-left"
                  >
                    SCSS
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 md:ml-4">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-9">
                <div className="flex items-center">
                  <label
                    htmlFor="htmlandcss"
                    className="w-full md:w-2/12 text-center md:text-left"
                  >
                    TAILWIND
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 md:ml-4">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                  </div>
                </div>
              </div>
              <div className="space-y-9">
                <div className="flex items-center">
                  <label
                    htmlFor="htmlandcss"
                    className="w-full md:w-2/12 text-center md:text-left"
                  >
                    GIT & GITHUB
                  </label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 md:ml-4">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between max-w-[650px] text-center">
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  2+
                </h3>
                <p>Years Experience</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  25+
                </h3>
                <p>Completed Projects</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  2+
                </h3>
                <p>Completed Internships</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

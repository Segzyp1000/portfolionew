import React from "react";
import Segzy from "../assets/Segzy.png";

function About() {
  return (
    <section id="aboutme" className="bg-black/5 py-16 px-6 md:px-16 lg:px-24">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Me</span>
        </h2>

        {/* Flex Container */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          {/* Profile Image */}
          <img
            src={Segzy}
            alt="Segun Olowoyeye"
            className="rounded-xl object-cover shadow-lg mb-8 lg:mb-0 w-56 h-56 md:w-72 md:h-72 transition-transform duration-300 hover:scale-105"
          />

          {/* Text + TechStack */}
          <div className="flex-1 text-center lg:text-left">
            {/* About Text */}
            <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              I'm a driven web developer dedicated to building cutting-edge,
              responsive web applications. My transition from sales to
              development was fueled by a genuine passion for technology. Now,
              I'm committed to creating intuitive, efficient, and user-centric
              digital experiences.
            </p>

            {/* Tech Stack */}
            <div className="mt-10">
              <h3 className="text-3xl font-bold text-center lg:text-left mb-8">
                Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Stack</span>
              </h3>

              <div className="space-y-6">
                {[
                  { name: "HTML & CSS", width: "w-full" },
                  { name: "JavaScript", width: "w-10/12" },
                  { name: "TypeScript", width: "w-10/12" },
                  { name: "ReactJS", width: "w-10/12" },
                  { name: "SCSS", width: "w-10/12" },
                  { name: "Tailwind", width: "w-11/12" },
                  { name: "Git & GitHub", width: "w-10/12" },
                ].map((skill) => (
                  <div key={skill.name} className="flex items-center">
                    <span className="w-28 font-medium">{skill.name}</span>
                    <div className="flex-1 bg-gray-800 rounded-full h-2.5 ml-4">
                      <div
                        className={`${skill.width} bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-all duration-500 hover:brightness-110`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Section */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center lg:text-left">
              {[
                { number: "2+", label: "Years Experience" },
                { number: "35+", label: "Completed Projects" },
                { number: "2+", label: "Completed Internships" },
              ].map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {stat.number}
                  </h3>
                  <p className="text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
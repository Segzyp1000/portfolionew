import { useState } from "react";
import brainwaveimg from "../assets/brainwave.png";
import nike from "../assets/NIKE.png";
import barbshow from "../assets/barbshow.png";
import lendsqr from "../assets/lendsq.png";
import movie from "../assets/movie.png";
import shop from "../assets/shop.png";
import khuefue from "../assets/khuefue.png";

const projects = [
  {
    id: 1,
    name: "Dashboard",
    image: khuefue,
    technology: "React, Tailwind, ContextAPI, ChartJs, React-Router-Dom",
    github: "https://github.com/Segzyp1000/khueproject",
    website: "https://khueproject.vercel.app/",
    description:
      "A comprehensive dashboard application built with React and Tailwind CSS, featuring data visualization using Chart.js and routing with React Router.",
  },
  {
    id: 2,
    name: "Brainwave",
    image: brainwaveimg,
    technology: "React, Tailwindcss",
    github: "https://github.com/Segzyp1000/brainwaves",
    website: "https://brainwaves-s6as.vercel.app/",
    description:
      "A modern web application designed to enhance productivity and mental well-being, built with React and styled using Tailwind CSS.",
  },
  {
    id: 3,
    name: "Barb-shows",
    image: barbshow,
    technology: "React, Firebase, Tailwindcss",
    github: "https://github.com/Segzyp1000/barb-show",
    website: "https://barb-shows.vercel.app/",
    description:
      "An interactive platform for booking barbershop appointments, built with React and Firebase for real-time data management and Tailwind CSS for styling.",
  },
  {
    id: 4,
    name: "Nike Landing Page",
    image: nike,
    technology: "React, Tailwndcss",
    github: "https://github.com/Segzyp1000/Nike-landing-page",
    website: "https://nike-landing-page-xi-three.vercel.app/",
    description:
      "A sleek and modern landing page for Nike, showcasing products and promotions, built with React and styled using Tailwind CSS.",
  },
  {
    id: 5,
    name: "Lendsqr",
    image: lendsqr,
    technology: "React, SCSS, TypeScript",
    github: "https://github.com/Segzyp1000/lendsqr",
    website: "https://segun-olowoyeye-lendsqr-fe-test.vercel.app/",
    description:
      "A feature-rich web application for financial services, built with React and TypeScript, styled using SCSS for a modern look and feel.",
  },
  {
    id: 6,
    name: "Movie",
    image: movie,
    technology: "React, Tailwindcss",
    github: "https://github.com/Segzyp1000/movie",
    website: "https://movieboxlist.vercel.app/",
    description:
      "A movie discovery platform that allows users to browse and search for movies, built with React and Firebase for backend services, styled with Tailwind CSS.",
  },
  {
    id: 7,
    name: "eCommerce",
    image: shop,
    technology: "React, Tailwind, ContextAPI",
    github: "https://github.com/Segzyp1000/timbo-shop",
    website: "https://timbo-shop.vercel.app/",
    description:
      "An eCommerce application that provides a seamless shopping experience, built with React and styled using Tailwind CSS, featuring product listings and a shopping cart.",
  },
];

export default function Projects() {
  const [flippedProjects, setFlippedProjects] = useState(false);

  const handleFlip = (id) => {
    setFlippedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="py-10 mt-8" id="projects">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="relative w-full h-96 perspective">
              <div
                className={`relative w-full h-full transition-transform duration-500 ease-in-out transform-style-3d ${
                  flippedProjects[project.id] ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute w-full h-full bg-gray-800 text-white rounded-lg backface-hidden">
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative w-full h-48 overflow-hidden rounded-lg mb-4">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </a>
                  <div className="px-4">
                    <h3 className="text-xl font-semibold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">
                      {project.technology}{" "}
                      <button
                        onClick={() => handleFlip(project.id)}
                        className="text-blue-400 hover:text-white ml-2"
                      >
                        click here for more...
                      </button>
                    </p>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Back */}
                <div
                  className="absolute w-full h-full bg-gray-900 text-white rounded-lg backface-hidden transform rotate-y-180 p-6"
                  style={{ backfaceVisibility: "false" }}
                >
                  <h3 className="text-xl font-bold mb-4">
                    {project.name} Description
                  </h3>
                  <p className="text-gray-300 text-sm mb-6">
                    {project.description}
                  </p>
                  <button
                    onClick={() => handleFlip(project.id)}
                    className="text-blue-400 hover:text-white"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind custom utilities */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
}

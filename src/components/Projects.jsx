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
      "Developed a dynamic dashboard application using React and Tailwind CSS, showcasing expertise in data visualization with Chart.js and seamless navigation via React Router. Implemented a responsive design with theme switching capabilities, allowing users to toggle between dark and light modes. Additionally, integrated pagination features to enhance user experience. The application also includes robust CRUD (Create, Read, Update, Delete) operations on select pages, demonstrating proficiency in managing complex data interactions. .",
  },

  {
    id: 2,
    name: "Barb-shows",
    image: barbshow,
    technology: "React, Firebase, Tailwindcss",
    github: "https://github.com/Segzyp1000/barb-show",
    website: "https://barb-shows.vercel.app/",
    description:
      "Developed a fully functional e-commerce shoe store using React and JavaScript, styled with Tailwind CSS. Implemented Firebase Authentication to enable secure user login, while also allowing guests to browse products, add items to their cart, and manage their cart contents. Utilized React Router DOM for seamless client-side routing between pages, ensuring a smooth and intuitive user experience",
  },
  {
    id: 3,
    name: "Brainwave",
    image: brainwaveimg,
    technology: "React, Tailwindcss",
    github: "https://github.com/Segzyp1000/brainwaves",
    website: "https://brainwaves-s6as.vercel.app/",
    description:
      "Designed and developed a visually stunning web application that showcases my expertise in crafting modern, responsive user interfaces. Implemented scroll-lock functionality on mobile devices to enhance user experience and leveraged absolute positioning to create a sleek, contemporary design aesthetic.",
  },
  {
    id: 4,
    name: "Nike Landing Page",
    image: nike,
    technology: "React, Tailwndcss",
    github: "https://github.com/Segzyp1000/Nike-landing-page",
    website: "https://nike-landing-page-xi-three.vercel.app/",
    description:
      "Designed and developed a cutting-edge landing page for a dummy Nike app, featuring a showcase of products and promotions. Built with React and styled with Tailwind CSS, this project demonstrates my ability to craft visually stunning and modern digital experiences that highlight brand identity and that showcase my user interface design skills. The landing page is fully responsive, ensuring an optimal viewing experience across all devices.",
  },
  {
    id: 5,
    name: "Movie",
    image: movie,
    technology: "React, Tailwindcss",
    github: "https://github.com/Segzyp1000/movie",
    website: "https://movieboxlist.vercel.app/",
    description:
      "A movie discovery platform that allows users to browse and search for movies, built with React and Firebase for backend services, styled with Tailwind CSS.",
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

import React from "react";
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
  },
  {
    id: 2,
    name: "Brainwave",
    image: brainwaveimg,
    technology: "React, Tailwindcss",
    github: "https://github.com/Segzyp1000/brainwaves",
    website: "https://brainwaves-s6as.vercel.app/",
  },
  {
    id: 3,
    name: "Barb-shows",
    image: barbshow,
    technology: "React, Firebase, Tailwindcss",
    github: "https://github.com/Segzyp1000/barb-show",
    website: "https://barb-shows.vercel.app/",
  },
  {
    id: 4,
    name: "Nike Landing Page",
    image: nike,
    technology: "React, Tailwndcss",
    github: "https://github.com/Segzyp1000/Nike-landing-page",
    website: "https://nike-landing-page-xi-three.vercel.app/",
  },

  {
    id: 5,
    name: "Lendsqr",
    image: lendsqr,
    technology: "React, SCSS, TypeScript",
    github: "https://github.com/Segzyp1000/lendsqr",
    website: "https://segun-olowoyeye-lendsqr-fe-test.vercel.app/",
  },
  {
    id: 6,
    name: "Movie",
    image: movie,
    technology: "React, Firebase, Tailwindcss, ContextAPI",
    github: "https://github.com/Segzyp1000/movie",
    website: "https://movieboxlist.vercel.app/",
  },
  {
    id: 7,
    name: "eCommerce",
    image: shop,
    technology: "React, Tailwind, ContextAPI",
    github: "https://github.com/Segzyp1000/timbo-shop",
    website: "https://timbo-shop.vercel.app/",
  },
];

export default function Projects() {
  return (
    <div className="py-10" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg"
            >
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="transition-transform duration-300 hover:scale-105 rounded-lg mb-4 w-full h-48 object-cover"
                />
              </a>
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technology}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full transition-transform duration-300 hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

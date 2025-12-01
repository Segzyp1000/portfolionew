import { useState } from "react";
import brainwaveimg from "../assets/brainwave.png";
import nike from "../assets/NIKE.png";
import barbshow from "../assets/barbshow.png";
import movie from "../assets/movie.png";
import khuefue from "../assets/khuefue.png";
import ShelfSync from "../assets/ShelfSync.png"

const projects = [
  {
     id: 1,
    name: "Inventory Dashboard",
    image: ShelfSync,
    technology: "Next,TypeScript,Tailwind, Recharts",
    github: "https://github.com/Segzyp1000/inventory-dashboard/",
    website: "https://inventory-dashboard-inky.vercel.app/",
    description:
      "Developed a full-stack Next.js application using TypeScript and React, leveraging Stackframe for data management and Neon as my database solution. The app features a responsive dashboard page, powered by Rechart, providing dynamic and data-driven visualizations. Through optimization, I improved dashboard load times by 30%, enhancing the overall user experiences"
  },
  {
    id: 2,
    name: "Barb-shows",
    image: barbshow,
    technology: "React, Typescript, Firebase, Tailwindcss",
    github: "https://github.com/Segzyp1000/barb-show",
    website: "https://barb-shows.vercel.app/",
    description:
      "Developed a fully functional e-commerce shoe store using React, Typescript and JavaScript, styled with Tailwind CSS. Implemented Firebase Authentication to enable secure user login, while also allowing guests to browse products, add items to their cart, and manage their cart contents.",
  },
  {
    id: 3,
    name: "Dashboard",
    image: khuefue,
    technology: "React, Tailwind, ContextAPI, ChartJs, React-Router-Dom",
    github: "https://github.com/Segzyp1000/khueproject",
    website: "https://khueproject.vercel.app/",
    description:
      "Developed a dynamic dashboard application using React and Tailwind CSS, showcasing expertise in data visualization with Chart.js and seamless navigation via React Router. Implemented a responsive design with theme switching capabilities, allowing users to toggle between dark and light modes. Additionally, integrated pagination features to enhance user experience.",
  },
  
  {
    id: 4,
    name: "Brainwave",
    image: brainwaveimg,
    technology: "React, Tailwindcss",
    github: "https://github.com/Segzyp1000/brainwaves",
    website: "https://brainwaves-s6as.vercel.app/",
    description:
      "Designed and developed a visually stunning web application that showcases my expertise in crafting modern, responsive user interfaces. Implemented scroll-lock functionality on mobile devices to enhance user experience.",
  },
  {
    id: 5,
    name: "Nike Landing Page",
    image: nike,
    technology: "React, Tailwindcss",
    github: "https://github.com/Segzyp1000/Nike-landing-page",
    website: "https://nike-landing-page-xi-three.vercel.app/",
    description:
      "Designed and developed a cutting-edge landing page for a dummy Nike app, featuring a showcase of products and promotions. Fully responsive, ensuring an optimal viewing experience across all devices.",
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
];

export default function Projects() {
  const [flippedProjects, setFlippedProjects] = useState(false);

  const handleFlip = (id ) => {
    setFlippedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-16 bg-black/5" id="projects">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="relative w-full h-[350px] perspective">
              <div
                className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-3d ${
                  flippedProjects[project.id] ? "rotate-y-180" : ""
                }`}
              >
                {/* Front */}
                <div className="absolute w-full h-full bg-gray-900 text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 backface-hidden">
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    <div className="w-full h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover rounded-t-xl transform transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  </a>
                  <div className="px-5 py-4">
                    <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.technology}
                      <button
                        onClick={() => handleFlip(project.id)}
                        className="ml-2 text-blue-400 hover:text-blue-200 underline"
                      >
                        More...
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
                <div className="absolute w-full h-full bg-gray-800 text-white rounded-xl shadow-lg p-6 backface-hidden transform rotate-y-180 flex flex-col justify-between">
                  <div className="overflow-y-auto">
                    <h3 className="text-xl font-bold mb-4">{project.name}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <button
                    onClick={() => handleFlip(project.id)}
                    className="mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform"
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
          perspective: 1200px;
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
    </section>
  );
}
import { useState } from "react";
import barbshow from "../assets/barbshow.png";
import kleen from "../assets/kleen.png";
import khuefue from "../assets/khuefue.png";
import ShelfSync from "../assets/ShelfSync.png";

const projects = [
  {
    id: 1,
    name: "Inventory Dashboard",
    image: ShelfSync,
    technology: "Next.js, TypeScript, Tailwind, Recharts",
    github: "https://github.com/Segzyp1000/inventory-dashboard/",
    website: "https://inventory-dashboard-inky.vercel.app/",
    description:
      "Developed a full-stack Next.js application using TypeScript and React, leveraging Stackframe for data management and Neon as a database solution. The app features a responsive dashboard powered by Recharts for dynamic data visualizations. Optimized dashboard load time by 30% to improve user experience.",
  },
  {
    id: 2,
    name: "Barb-shows",
    image: barbshow,
    technology: "React, TypeScript, Firebase, Tailwind CSS",
    github: "https://github.com/Segzyp1000/barb-show",
    website: "https://barb-shows.vercel.app/",
    description:
      "Developed a fully functional e-commerce shoe store using React and TypeScript styled with Tailwind CSS. Integrated Firebase Authentication for secure login while allowing guest browsing, cart management, and smooth shopping experiences.",
  },
  {
    id: 3,
    name: "Dashboard",
    image: khuefue,
    technology: "React, Tailwind, Context API, Chart.js, React Router",
    github: "https://github.com/Segzyp1000/khueproject",
    website: "https://khueproject.vercel.app/",
    description:
      "Built a dynamic dashboard application with React and Tailwind CSS featuring data visualization with Chart.js, responsive layouts, dark/light mode switching, and pagination for improved user experience.",
  },
  {
    id: 4,
    name: "TjayKleen Cleaning Services",
    image: kleen,
    technology: "React, Tailwind CSS",
    github: "https://github.com/Segzyp1000/tjkleen",
    website: "https://tjkleen.vercel.app/",
    description:
      "Created a responsive company website for TjayKleen Cleaning Services using React and Tailwind CSS. The website showcases services, testimonials, contact forms, and interactive UI elements for better engagement.",
  },
];

export default function Projects() {
  const [flippedProjects, setFlippedProjects] = useState({});

  const handleFlip = (id) => {
    setFlippedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      className="relative py-20 bg-black/5 overflow-hidden"
      id="projects"
    >
      {/* 🌌 Background Design */}

      {/* Grid Pattern */}
      <div className="absolute inset-0 -z-20 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* Left Glow */}
      <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] bg-green-500/20 blur-3xl rounded-full" />

      {/* Right Glow */}
      <div className="absolute bottom-10 right-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-3xl rounded-full" />

      {/* Center Glow */}
      <div className="absolute inset-0 flex justify-center items-center -z-10">
        <div className="w-[500px] h-[500px] bg-gradient-to-r from-green-400/10 to-blue-500/10 blur-3xl rounded-full" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-14">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
            Projects
          </span>
        </h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative w-full h-[380px] perspective"
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-3d ${
                  flippedProjects[project.id] ? "rotate-y-180" : ""
                }`}
              >
                {/* FRONT */}
                <div className="absolute w-full h-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-lg hover:shadow-2xl hover:shadow-green-500/10 transition-all duration-500 backface-hidden group">
                  
                  {/* Image */}
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-full h-52 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </a>

                  {/* Content */}
                  <div className="px-5 py-5">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {project.name}
                    </h3>

                    <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                      {project.technology}
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-3 flex-wrap">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-300 text-sm"
                      >
                        GitHub
                      </a>

                      <button
                        onClick={() => handleFlip(project.id)}
                        className="border border-white/10 text-gray-300 px-4 py-2 rounded-full hover:bg-white/10 transition duration-300 text-sm"
                      >
                        More Info
                      </button>
                    </div>
                  </div>
                </div>

                {/* BACK */}
                <div className="absolute w-full h-full rounded-2xl border border-white/10 bg-gray-900/90 backdrop-blur-md p-6 shadow-2xl backface-hidden transform rotate-y-180 flex flex-col justify-between">
                  
                  <div className="overflow-y-auto">
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      {project.name}
                    </h3>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleFlip(project.id)}
                    className="mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-white px-5 py-2 rounded-full hover:scale-105 transition-transform duration-300"
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Utilities */}
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
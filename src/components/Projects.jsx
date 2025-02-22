import React from "react";
import Cashify from "../assets/cashify.png";
import Movies from "../assets/movies.png";
import ems from "../assets/ems.png";

const projects = [
  {
    name: "Cashify Clone",
    image: Cashify,
    description:
      "A Cashify clone lets users sell old gadgets for instant cash with price estimation and pickup services. It ensures secure payments and a hassle-free selling experience.",
    features: [
      "Home page display,Mobile page display,Sell old device,Buy new device",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://priyanshuppp00.github.io/Cashify_Clone/",
    githubLink: "https://github.com/priyanshuppp00/Cashify_Clone",
    color: "border-gray-700 ",
  },
  {
    name: "Movies Finder",
    image: Movies,
    description:
      "MoviesFinder is a platform to search, explore trending movies, and create a personalized watchlist. It features a seamless UI with a dark/light mode toggle for a better viewing experience.",
    features: [
      "Search movies by title",
      "View trending movies",
      "Add movies to watchlist",
      "Toggle light/dark mode",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://priyanshuppp00.github.io/MoviesFinder/",
    githubLink: "https://github.com/priyanshuppp00/MoviesFinder",
    color: "border-gray-700 ",
  },
  {
    name: "EMS-Kitchen",
    image: ems,
    description:
      "Ems-Kitchen offers delicious meals with fresh ingredients and authentic flavors. Enjoy a variety of dishes with a seamless online ordering experience.",
    features: [
      "Browse a variety of dishes",
      "Order fresh meals online",
      "Quick and hassle-free delivery",
      "Toggle between light/dark modes",
      "View & manage cart items",
      "Secure payment processing",
    ],
    techStack: ["React", "Tailwind CSS", "HTML"],
    liveLink: "https://ems-kitchin.vercel.app/",
    githubLink: "https://github.com/priyanshuppp00/ems-kitchin",
    color: "border-gray-700 ",
  },
];

const Projects = () => {
  const openLink = (url) => window.open(url, "_blank");

  return (
    <div
      name="projects"
      className="bg-gradient-to-b h-full pt-4 md:h-full text-slate-300 bg-[radial-gradient(#111111,#0a071a)] w-full"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg mx-auto">
        <div className="pb-8 text-center ">
          <p className="text-4xl font-bold">Projects</p>
          <p className="py-6">These are some beautiful projects that I made</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 md:w-3/3 sm:px-24 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col max-w-screen-lg p-8 from-gray-900 to-gray-800 border-1 border-gray-700 rounded-lg shadow-xl sm:flex-row ${project.color}`}
            >
              <div className="text-gray-300 rounded-lg bg-gradient-to-r from-slate-600 to-blue-800 md:w-2/3">
                <div className="flex items-center justify-center ">
                  <button
                    onClick={() => openLink(project.liveLink)}
                    className="w-1/2 px-6 py-3 m-4 duration-200 cursor-pointer hover:scale-105"
                  >
                    Project
                  </button>
                  <button
                    onClick={() => openLink(project.githubLink)}
                    className="w-1/2 px-6 py-3 m-4 duration-200 cursor-pointer hover:scale-105"
                  >
                    GitHub
                  </button>
                </div>
                <img
                  onClick={() => openLink(project.liveLink)}
                  src={project.image}
                  alt={project.name}
                  className="duration-300 rounded-md hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center h-full pb-4 pl-8 border-blue-100 shadow-xl sm:w-1 md:w-2/3">
                <h1 className="mt-4 text-3xl font-bold md:mt-0">
                  {project.name}
                </h1>
                <p className="font-light">{project.description}</p>
                <br />
                <p className="text-xl font-bold text-slate-50">Features</p>
                <ul className="ml-5 list-disc">
                  {project.features.map((feature, i) => (
                    <li key={i} className="font-light">
                      {feature}
                    </li>
                  ))}
                </ul>
                <br />
                <p className="text-xl font-bold text-slate-50">Tech Stack</p>
                <p className="font-light">{project.techStack.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

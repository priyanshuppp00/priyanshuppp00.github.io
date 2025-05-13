import React from "react";
import Cashify from "../assets/cashify.png";
import Movies from "../assets/movies.png";
import ems from "../assets/ems.png";
import job from "../assets/job.png";

const projects = [
  {
    id: 1,
    name: "Cashify Clone",
    image: Cashify,
    description:
      "A Cashify clone lets users sell old gadgets instantly with price estimation and secure payments.",
    features: [
      "Home page display, Mobile page display, Sell old device, Buy new device",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://priyanshuppp00.github.io/Cashify_Clone/",
    githubLink: "https://github.com/priyanshuppp00/Cashify_Clone",
    color: "border-gray-700 ",
  },
  {
    id: 2,
    name: "Movies Finder",
    image: Movies,
    description:
      "MoviesFinder lets users search, explore trending movies, and create a watchlist with a seamless UI and dark/light mode.",
    features: [
      "Search movies by title,  View trending movies, Add movies to watchlist, Toggle light/dark mode ",
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    liveLink: "https://priyanshuppp00.github.io/MoviesFinder/",
    githubLink: "https://github.com/priyanshuppp00/MoviesFinder",
    color: "border-gray-700 ",
  },
  {
    id: 3,
    name: "EMS-Kitchen",
    image: ems,
    description:
      "Ems-Kitchen serves delicious meals with fresh ingredients and a seamless online ordering experience.",
    features: [
      "Browse a variety of dishes, Order fresh meals online, Quick and Explore Restaurants Near You , Toggle between light/dark modes, View & manage cart items, Apply Discount Coupon ",
    ],
    techStack: ["React", "Tailwind CSS", "HTML"],
    liveLink: "https://ems-kitchin.vercel.app/",
    githubLink: "https://github.com/priyanshuppp00/ems-kitchin",
    color: "border-gray-700 ",
  },
  {
    id: 4,
    name: "Job-Board",
    image: job,
    description:
      "A full-stack Job Board web app where employers post jobs and seekers apply. Built with React, Tailwind CSS, Node.js, and MongoDB.",
    features: [
      "User login/signup,Post and manage jobs, Apply for jobs,Mobile responsive design",
    ],
    techStack: [
      "React",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    liveLink: "https://job-board-frontend-iota.vercel.app/",
    githubLink: "https://github.com/priyanshuppp00/job-board",
    color: "border-gray-700 ",
  },
];

const Projects = () => {
  const openLink = (url) => window.open(url, "_blank");

  return (
    <div
      name="projects"
      className="bg-gradient-to-b h-full pt-4 md:h-full text-slate-300 bg-[radial-gradient(#111111,#0a071a)] w-full "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8 text-center ">
          <p className="text-4xl font-bold">Projects</p>
          <p className="py-6">These are some beautiful projects that I made</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 md:w-3/3 gap-8 px-12 sm:px-5">
          {projects.map((project, id) => (
            <div
              key={id}
              className={`flex flex-col sm:flex-row max-w-screen-lg`} // ${project.color}
            >
              <div className="text-gray-300 rounded-lg bg-gradient-to-r from-slate-600 to-blue-800 md:w-2/3">
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => openLink(project.liveLink)}
                    className="w-1/2 px-6 py-3 m-4 duration-200 cursor-pointer hover:scale-105
                    "
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
                  className="duration-300 rounded-md hover:scale-105 "
                />
              </div>
              <div
                className="flex flex-col justify-center  from-gray-900 to-gray-800 border-1 border-gray-700 rounded-lg shadow-xl h-full sm:w-full md:w-2/3 pl-8 pb-4      
              "
              >
                <h1 className="text-2xl font-bold mt-4 md:mt-0 ">
                  {project.name}
                </h1>
                <p className="font-light">{project.description}</p>
                <br />
                <p className="text-xl font-bold text-slate-50">Features</p>

                {project.features.map((feature, id) => (
                  <p key={id} className="font-light">
                    {feature}
                  </p>
                ))}

                <br />
                <p className="text-xl font-bold text-slate-50">Tech Stack</p>
                <p className="font-light">{project.techStack.join(" , ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;

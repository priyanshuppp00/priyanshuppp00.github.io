import React from "react";
import { Link } from "react-scroll";
import HeroImage from "../assets/heroimage.jpg";
import { ImArrowRight2 } from "react-icons/im";
import { FaEnvelope, FaGlobe } from "react-icons/fa";

const openWebsite = () => {
  window.open(
    "https://ems-kitchin.vercel.app/",
    "_blank",
    "noopener,noreferrer"
  );
};

const newtab = () => {
  window.open(
    "https://drive.google.com/file/d/12LWM0tVNi7Di3PRKH_T0lwVYsdP0BKCn/view?usp=sharing"
  );
};

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-full text-slate-300 bg-[radial-gradient(#111111,#0a071a)] flex items-center justify-center"
    >
      <div className="flex flex-col items-center justify-center w-full h-full max-w-screen-xl px-4 sm:px-20 md:flex-row md:space-x-10">
        {/* Text Content Section */}
        <div className="flex flex-col justify-center h-full mt-40 md:mt-40">
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
            Hello, I am Priyanshu Kumar
          </h2>
          <h2 className="mt-2 text-xl font-bold text-slate-100 sm:text-xl md:text-2xl">
            A passionate developer creating web solutions.
          </h2>
          <p className="max-w-md py-4 text-base leading-relaxed sm:text-lg">
            I'm a highly passionate and self-motivated developer, driven to
            craft creative and impactful web solutions. I take pride in being a
            quick learner, a team player, and someone who thrives on solving
            challenges with innovation.
          </p>

          <div className="flex flex-wrap items-center justify-center w-full gap-4 pt-4 md:justify-start">
            <a href="/Priyanshu_Kumar_Resume.pdf" download={true}>
              <button
                onClick={newtab}
                type="button"
                className="flex items-center justify-center px-6 py-3 text-sm font-medium text-center text-white transition-transform duration-300 rounded-md cursor-pointer whitespace-nowrap bg-gradient-to-r from-slate-600 to-blue-800 hover:scale-105 focus:ring-2 focus:ring-blue-500 group"
              >
                Resume
                <span className="ml-3 transition-transform duration-300 group-hover:rotate-90">
                  <ImArrowRight2 />
                </span>
              </button>
            </a>

            <Link to="contact" smooth duration={700} offset={-80}>
              <button
                type="button"
                className="flex items-center justify-center px-6 py-3 text-sm font-medium text-center text-white transition-transform duration-300 rounded-md cursor-pointer whitespace-nowrap bg-gradient-to-r from-slate-600 to-blue-800 hover:scale-105 focus:ring-2 focus:ring-blue-500"
              >
                <FaEnvelope className="mr-2" /> Get In Touch
              </button>
            </Link>

            <button
              type="button"
              onClick={openWebsite}
              className="flex items-center justify-center px-6 py-3 text-sm font-medium text-center text-white transition-transform duration-300 rounded-md cursor-pointer bg-gradient-to-r from-slate-600 to-blue-800 hover:scale-105 focus:ring-2 focus:ring-blue-500"
              aria-label="Visit website"
            >
              <FaGlobe className="mr-2" /> Website
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full mt-10 md:w-1/2 md:mt-28">
          <img
            src={HeroImage}
            loading="lazy"
            className="object-cover max-w-xs transition-all duration-300 border-4 border-blue-300 rounded-full shadow-lg sm:max-w-sm md:max-w-md lg:max-w-lg hover:shadow-blue-500"
            alt="Profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

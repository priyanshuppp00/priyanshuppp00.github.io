import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full text-gray-300 bg-[radial-gradient(#111111,#0a071a)] flex items-center"
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto ">
        <div className="pb-8 md:mt-10">
          <p className="text-4xl font-bold text-center">About Me</p>
        </div>

        <p className="mt-10 text-xl">
          I'm a highly passionate and self-motivated developer, driven to craft
          creative and impactful web solutions. I take pride in being a quick
          learner, a team player, and someone who thrives on solving challenges
          with innovation.
        </p>
        <br />
        <p className="text-xl">
          During my graduation, I faced misdirection and battled health issues
          that tested my resolve. These struggles taught me resilience,
          discipline, and the power of focus. I transformed setbacks into
          opportunities to grow, sharpening my skills through self-learning and
          hard work.
        </p>
        <br />
        <p className="mt-4 text-xl">
          Now, I am more determined than ever to bring creativity, teamwork, and
          dedication to every project I work on. My journey has shaped me into
          the adaptable, solution-driven developer I am today—ready to make a
          meaningful impact through technology.
        </p>
      </div>
    </div>
  );
};

export default About;

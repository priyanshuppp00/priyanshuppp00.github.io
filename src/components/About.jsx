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

        <p className="mt-10 text-xl font-light">
          I'm a highly passionate and self-motivated developer, driven to craft
          creative and impactful web solutions. I take pride in being a quick
          learner, a team player, and someone who thrives on solving challenges
          with innovation.
        </p>
        <br />
        <p className="text-xl font-light">
          My journey has not been without obstacles. Before my graduation, I
          faced misdirection, and during my graduation, I also struggled with
          health challenges that tested my determination. These experiences
          taught me resilience, discipline, and the power of focus. I turned
          setbacks into opportunities, honing my skills through self-learning
          and dedication.
        </p>
        <br />
        <p className="mt-4 text-xl font-light">
          Now, more determined than ever, I bring creativity, teamwork, and
          dedication to every project. My journey has shaped me into an
          adaptable, solution-driven developer, ready to make a meaningful
          impact through technology.
        </p>
      </div>
    </div>
  );
};

export default About;

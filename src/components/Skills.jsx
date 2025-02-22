import React from "react";
import htmlLogo from "../assets/htmlLogo.png";
import cssLogo from "../assets/cssLogo.png";
import javaScriptLogo from "../assets/javaScriptLogo.png";
import reactLogo from "../assets/reactLogo.png";
import reduxLogo from "../assets/reduxLogo.png";
import gitHubLogo from "../assets/gitHubLogo.png";
import tailwindLogo from "../assets/tailwindLogo.png";
import mongooseLogo from "../assets/mongoose.png";
import mongoLogo from "../assets/mongo.png";
import mysqlLogo from "../assets/mysqlLogo.png";
import bootstrapLogo from "../assets/bootstrapLogo.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      src: htmlLogo,
      title: "HTML",
      style: "shadow-orange-500",
      border: "border-orange-500",
    },
    {
      id: 2,
      src: cssLogo,
      title: "CSS",
      style: "shadow-blue-500",
      border: "border-blue-500",
    },
    {
      id: 3,
      src: javaScriptLogo,
      title: "JavaScript",
      style: "shadow-yellow-500",
      border: "border-yellow-500",
    },
    {
      id: 4,
      src: reactLogo,
      title: "React",
      style: "shadow-teal-600",
      border: "border-teal-600",
    },
    {
      id: 5,
      src: reduxLogo,
      title: "Redux",
      style: "shadow-purple-500",
      border: "border-purple-500",
    },
    {
      id: 6,
      src: mysqlLogo,
      title: "MySQL",
      style: "shadow-gray-400",
      border: "border-gray-400",
    },
    {
      id: 7,
      src: bootstrapLogo,
      title: "Bootstrap",
      style: "shadow-purple-500",
      border: "border-purple-500",
    },
    {
      id: 8,
      src: tailwindLogo,
      title: "Tailwind CSS",
      style: "shadow-blue-400",
      border: "border-blue-400",
    },
    {
      id: 9,
      src: gitHubLogo,
      title: "GitHub",
      style: "shadow-white",
      border: "border-white",
      imgStyle: "rounded-full",
    },
    {
      id: 10,
      src: mongoLogo,
      title: "MongoDB",
      style: "shadow-green-500",
      border: "border-green-500",
    },
    {
      id: 11,
      src: mongooseLogo,
      title: "Mongoose",
      style: "shadow-red-900",
      border: "border-red-900",
    },
  ];

  return (
    <div
      name="skills"
      className="w-full bg-[radial-gradient(#111111,#0a071a)] text-gray-300 "
    >
      <div className="flex flex-col justify-center w-full h-full max-w-screen-lg p-4 mx-auto ">
        <div className="text-center">
          <h2 className="pb-2 text-4xl font-bold ">Skills</h2>
          <p className="py-6 text-gray-400">
            These are some technical skills that I possess
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8 px-12 py-8 text-center sm:grid-cols-3 sm:px-24">
          {skills.map(({ id, src, title, style, border, imgStyle }) => (
            <div
              key={id}
              className={`flex flex-col items-center p-6 rounded-lg shadow-md ${style} hover:shadow-xl ${border} transition-all duration-300 `}
            >
              <img src={src} alt={title} className={`w-20 h-20 ${imgStyle}`} />
              <p className="mt-4 font-semibold">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

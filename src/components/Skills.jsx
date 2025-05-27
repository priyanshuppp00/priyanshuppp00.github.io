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
import bootstrapLogo from "../assets/bootstrapLogo.png";
import Node from "../assets/Node.png";

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
      style: "shadow-teal-500",
      border: "border-teal-500",
    },
    {
      id: 5,
      src: reduxLogo,
      title: "Redux",
      style: "shadow-purple-500",
      border: "border-purple-500",
    },
    // {
    //   id: 6,
    //   src: pythonlogo,
    //   title: "Python",
    //   style: "shadow-blue-500",
    //   border: "border-blue-500",
    // },
    // {
    //   id: 7,
    //   src: djangologo,
    //   title: "Django",
    //   style: "shadow-green-500",
    //   border: "border-green-500",
    // },
    // {
    //   id: 8,
    //   src: phplogo,
    //   title: "PHP",
    //   style: "shadow-indigo-500",
    //   border: "border-indigo-500",
    // },
    // {
    //   id: 9,
    //   src: mysqlLogo,
    //   title: "MySQL",
    //   style: "shadow-blue-500",
    //   border: "border-blue-500",
    // },

    {
      id: 6,
      src: tailwindLogo,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
      border: "border-sky-500",
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
      src: gitHubLogo,
      title: "GitHub",
      style: "shadow-gray-500",
      border: "border-gray-500",
      imgStyle: "rounded-full",
    },
    {
      id: 9,
      src: mongoLogo,
      title: "MongoDB",
      style: "shadow-green-500",
      border: "border-green-500",
    },
    {
      id: 10,
      src: mongooseLogo,
      title: "Mongoose",
      style: "shadow-red-500",
      border: "border-red-500",
    },
    {
      id: 10,
      src: Node,
      title: "Node JS",
      style: "shadow-green-500",
      border: "border-green-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-[radial-gradient(#111111,#0a071a)] text-gray-300 "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full ">
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
              className={`flex flex-col items-center p-6 rounded-lg shadow-md ${style} ${border} 
                        transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
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

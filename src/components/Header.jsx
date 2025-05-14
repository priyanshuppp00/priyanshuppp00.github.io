import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "projects" },
    { id: 4, link: "skills" },
    { id: 5, link: "github" },
    { id: 6, link: "contact" },
  ];

  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  const newtab = () => {
    window.open(
      "https://drive.google.com/file/d/1kQpqC5lqQgTSUaFZoeKXtP4fzrNEeIji/view?usp=drive_link"
    );
  };

  return (
    <div className="fixed z-40 flex items-center justify-between w-full h-20 px-4 text-slate-300 bg-[linear-gradient(to_right,#1e1e1e_70%,#051c5f)]">
      <div>
        <h1 className="ml-2 text-4xl transition-all hover:text-5xl hover:scale-105">
          PK
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="relative px-4 font-medium capitalize duration-200 cursor-pointer hover:scale-105"
          >
            <Link
              to={link}
              smooth
              duration={700}
              spy={true}
              offset={-80}
              onSetActive={handleSetActive}
              className="hover:text-slate-100"
            >
              {link}
            </Link>
          </li>
        ))}

        <a href="/Priyanshu_Kumar_Gangwar.pdf" download={true}>
          <button
            onClick={() => newtab()}
            className="px-4 font-medium capitalize duration-200 cursor-pointer hover:scale-105"
          >
            Resume
          </button>
        </a>
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="z-10 pr-4 cursor-pointer md:hidden"
        aria-label="Toggle navigation"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      <div
        className={`fixed top-20 left-0 w-full bg-[linear-gradient(to_right,#1e1e1e_70%,#051c5f)] transition-transform duration-300 ease-in-out ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center justify-center">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className={`px-2 py-3 text-2xl capitalize cursor-pointer hover:scale-105 w-full text-center ${
                activeLink === link
                  ? "font-bold text-slate-300"
                  : "text-slate-400"
              }`}
            >
              <Link
                onClick={() => setNav(false)}
                to={link}
                smooth
                duration={700}
                spy={true}
                offset={-80}
                onSetActive={handleSetActive}
              >
                {link}
              </Link>
            </li>
          ))}
          <a href="/Priyanshu_Kumar_Resume.pdf" download={true}>
            <button
              onClick={() => newtab()}
              className="w-1/2 px-4 py-3 mb-3 text-2xl text-center capitalize cursor-pointer hover:scale-105"
            >
              Resume
            </button>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Header;

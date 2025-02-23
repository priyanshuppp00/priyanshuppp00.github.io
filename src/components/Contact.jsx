import React, { useState, useEffect } from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiGmail, SiInstagram } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { IoPaperPlane } from "react-icons/io5";
import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mbldejag");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: "", email: "", message: "" });
      setShowSuccess(true);

      const timeout = setTimeout(() => {
        setShowSuccess(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [state.succeeded]);

  return (
    <div
      name="contact"
      className="w-full h-full text-slate-300 bg-[radial-gradient(#111111,#0a071a)]"
    >
      <div className="container max-w-screen-lg p-4 px-6 mx-auto md:px-16">
        <div className="mb-10 text-center">
          <h3 className="pb-2 text-3xl font-bold text-slate-300">Contact Me</h3>
          <p className="mt-3 text-gray-400">
            Feel free to reach out via the form below!
          </p>
          {showSuccess && (
            <div className="mt-4 font-semibold text-green-400">
              ✅ Your message has been sent successfully!
            </div>
          )}
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 text-white bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 bg-gray-800 border border-gray-600 rounded-md text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
              <button
                type="submit"
                disabled={state.submitting}
                className="flex items-center justify-center w-full py-2 space-x-2 transition-transform duration-300 rounded-md cursor-pointer text-slate-300 bg-gradient-to-r from-slate-600 to-blue-800 hover:scale-105"
              >
                <span>Send Message</span>
                <IoPaperPlane className="text-xl text-slate-300 animate-pulse" />
              </button>
            </form>
          </div>

          <div className="flex flex-col items-center p-6 rounded-lg shadow-lg">
            <h4 className="mb-4 text-2xl font-semibold text-slate-300">
              Get in Touch
            </h4>
            <div className="flex flex-col space-y-4">
              {[
                {
                  href: "https://www.linkedin.com/in/priyanshu-kumar-849a8a263",
                  icon: <AiFillLinkedin />,
                  text: "LinkedIn",
                  color: "text-blue-600",
                },
                {
                  href: "https://github.com/priyanshuppp00",
                  icon: <AiFillGithub />,
                  text: "GitHub",
                  color: "text-gray-400",
                },
                {
                  href: "mailto:priynanshugangwar00@gmail.com",
                  icon: <SiGmail />,
                  text: "Mail",
                  color: "text-red-500",
                },
                {
                  href: "https://www.instagram.com/priyanshuppp/",
                  icon: <SiInstagram />,
                  text: "Instagram",
                  color: "text-pink-500",
                },
                {
                  href: "tel:+919720153058",
                  icon: <IoMdCall />,
                  text: "+91 9720153058",
                  color: "text-green-500",
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center p-3 space-x-3 transition-transform transform rounded-md hover:scale-110 ${item.color}`}
                >
                  <span className="text-2xl transition-transform duration-200 hover:scale-125">
                    {item.icon}
                  </span>
                  <span className="text-lg font-medium text-slate-300">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

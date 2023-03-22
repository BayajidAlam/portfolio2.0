import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineLink } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
import project1 from "../../assets/Bayajid.jpg";

const Projects = () => {
  const projectOneTech = [
    { name: "Html" },
    { name: "Css" },
    { name: "Scss" },
    { name: "Bootstrap" },
    { name: "Tailwind Css" },
    { name: "Javascript" },
    { name: "ES6" },
    { name: "React Js" },
    { name: "Node Js" },
    { name: "Express Js" },
    { name: "MongoDB" },
    { name: "JWt" },
    { name: "Firebase" },
  ];

  return (
    <div className="lg:py-16 px-4" id="projects">
      <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-4 text-center">
        My projects
      </p>

      <div className="lg:flex lg:w-2/3 mx-auto lg:pt-16 pt-4">
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <img className="h-80 w-full" src={project1} alt="" />
        </div>
        <div className="lg:w-1/2">
          <div className="px-4 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">Resume Builder</p>
              <div className="flex items-center">
                <Link>
                  <div className="flex items-center bg-blue-500 text-md px-6 mr-2 py-2 rounded-full">
                    <AiOutlineLink />
                    <p>Code</p>
                  </div>
                </Link>
                <Link>
                  <div className="flex items-center bg-blue-500 text-md px-6 py-2 rounded-full animate-pulse">
                    <FiExternalLink className="font-bold mr-2" />
                    <p>Live</p>
                  </div>
                </Link>
              </div>
            </div>
            <p className="font-semibold">Resume Builder Web Applications</p>
            <div>
              <p className="mb-2">Description</p>
              <hr className="w-[60%]" />
            </div>
            <p>
              Resume Builder is a online resume builder web application, help
              user to make their resume in a short time.A user can make their
              resume just his details.
            </p>

            <div>
              <p className="mb-2">Used Technology</p>
              <hr className="w-[60%]" />
            </div>

            <div className="flex flex-wrap container mx-auto gap-3 py-8">
              {projectOneTech.map((skill) => (
                <p className="border border-white px-4 py-1 text-md rounded-full cursor-pointer hover:bg-blue-500">
                  {skill.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex lg:flex-row-reverse lg:w-2/3 mx-auto lg:pt-16 pt-4">
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <img className="h-80 w-full" src={project1} alt="" />
        </div>
        <div className="lg:w-1/2">
          <div className="px-4 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">Resume Builder</p>
              <div className="flex items-center">
                <Link>
                  <div className="flex items-center bg-blue-500 text-md px-6 mr-2 py-2 rounded-full">
                    <AiOutlineLink />
                    <p>Code</p>
                  </div>
                </Link>
                <Link>
                  <div className="flex items-center bg-blue-500 text-md px-6 py-2 rounded-full animate-pulse">
                    <FiExternalLink className="font-bold mr-2" />
                    <p>Live</p>
                  </div>
                </Link>
              </div>
            </div>
            <p className="font-semibold">Resume Builder Web Applications</p>
            <div>
              <p className="mb-2">Description</p>
              <hr className="w-[60%]" />
            </div>
            <p>
              Resume Builder is a online resume builder web application, help
              user to make their resume in a short time.A user can make their
              resume just his details.
            </p>

            <div>
              <p className="mb-2">Used Technology</p>
              <hr className="w-[60%]" />
            </div>

            <div className="flex flex-wrap container mx-auto gap-3 py-8">
              {projectOneTech.map((skill) => (
                <p className="border border-white px-4 py-1 text-md rounded-full cursor-pointer hover:bg-blue-500">
                  {skill.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:w-2/3 mx-auto lg:pt-16 pt-4">
        <div className="lg:w-1/2 mb-4 lg:mb-0">
          <img className="h-80 w-full" src={project1} alt="" />
        </div>
        <div className="lg:w-1/2">
          <div className="px-4 space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">Resume Builder</p>
              <div className="flex items-center">
                <Link>
                  <div className="flex items-center bg-blue-500 text-md px-6 mr-2 py-2 rounded-full">
                    <AiOutlineLink />
                    <p>Code</p>
                  </div>
                </Link>
                <Link>
                  <div className="flex items-center bg-blue-500 text-md px-6 py-2 rounded-full animate-pulse">
                    <FiExternalLink className="font-bold mr-2" />
                    <p>Live</p>
                  </div>
                </Link>
              </div>
            </div>
            <p className="font-semibold">Resume Builder Web Applications</p>
            <div>
              <p className="mb-2">Description</p>
              <hr className="w-[60%]" />
            </div>
            <p>
              Resume Builder is a online resume builder web application, help
              user to make their resume in a short time.A user can make their
              resume just his details.
            </p>

            <div>
              <p className="mb-2">Used Technology</p>
              <hr className="w-[60%]" />
            </div>

            <div className="flex flex-wrap container mx-auto gap-3 py-8">
              {projectOneTech.map((skill) => (
                <p className="border border-white px-4 py-1 text-md rounded-full cursor-pointer hover:bg-blue-500">
                  {skill.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Projects;

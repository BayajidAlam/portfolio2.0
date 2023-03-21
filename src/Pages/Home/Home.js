import React from "react";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../../assets/Bayajid.jpg";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import './Home.css';

const Home = () => {
  const handleDwonloadResume = () => {};

  return (
    <>
      <section id="home">
        <div className="flex lg:flex-row justify-between container mx-auto py-20 items-center">
          <div>
            <h1 className="text-4xl text-left font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-4">
              Bayajid Alam Joyel
            </h1>
            <p className="text-left w-1/2 mb-4">
            I'm a Mern Stack Developer focused on developing Javascript based web applications. I love to manage everything from complex logic to the awesome layout of a web application.
            </p>
            <div className="text-left font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-4">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "React JS Developer",
                  1000,
                  "Front End Developer",
                  1000,
                  "Backend End Developer",
                  1000,
                  "MERN Stack Developer",
                  1000,
                ]}
                //  Continuing previous Text
                style={{ fontSize: "2.5em" }}
                wrapper="div"
                repeat={Infinity}
              />
            </div>

            <button
              onClick={handleDwonloadResume}
              className="btn btn-primary rounded-none text-white bg-gradient-to-r from-cyan-500 to-blue-500 absolute hover:border-none"
            >
              DOWNLOAD RESUME
            </button>
          </div>
          <div className="max-w-sm w-80">
            <img
              src={profilePic}
              className="w-full rounded-full   hover:scale-110 transition duration-300 ease-in-out"
              alt=""
            />
          </div>
        </div>

      </section>

      <section>
        <Education />
      </section>

      <section>
        <Skills />
      </section>

      <section>
        <Projects />
      </section>

      <section>
        <Contact />
      </section>
    </>
  );
};

export default Home;

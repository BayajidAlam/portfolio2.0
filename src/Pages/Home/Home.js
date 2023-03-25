import React from "react";
import { TypeAnimation } from "react-type-animation";
import profilePic from "../../assets/Bayajid.jpg";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import './Home.css';
import AOS from "aos";
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { BsGithub,BsLinkedin,BsTwitter } from 'react-icons/bs';

const Home = () => {
  const handleDwonloadResume = () => {};

  AOS.init({
    duration: 1000,
    easing: "ease-in",
    once: false
  });

  return (
    <>
      <section className="mt-8 lg:mt-8"id="home">
        <div className="flex flex-col-reverse lg:flex-row justify-between px-4 lg:w-2/3 mx-auto lg:py-28 py-12 items-center">
          <div data-aos="fade-right">
            <h1 className="text-4xl text-left font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-4">
              Bayajid Alam Joyel
            </h1>
            <p className="text-left lg:w-1/2 mb-4">
            I'm a Mern Stack Developer focused on developing Javascript based web applications. I love to manage everything from complex logic to the awesome layout of a web application.
            </p>
            <div className="text-left font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 mb-4">
              <TypeAnimation
                id="animation"
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

            <div className="flex items-center mt-20 gap-4 ml-8">
              <Link target="_blank" to="https://github.com/BayajidAlam">
                    <BsGithub className="text-3xl"/>
              </Link>
              <Link target="_blank" to="https://www.linkedin.com/in/bayajid-alam-joyel/">
                    <BsLinkedin className="text-3xl"/>
              </Link>
              <Link target="_blank" to="https://twitter.com/bayajid_alam">
                    <BsTwitter className="text-3xl"/>
              </Link>
            </div>
      
          </div>

          <div data-aos="fade-left" className="max-w-sm w-80">
            <img
              src={profilePic}
              className="w-full rounded-full  mb-4 lg:mb-0 hover:scale-110 transition duration-300 ease-in-out"
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

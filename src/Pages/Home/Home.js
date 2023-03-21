import React from "react";
import { TypeAnimation } from "react-type-animation";
import profilePic from '../../assets/Bayajid.jpg';
import AboutMe from "../../components/AboutMe/AboutMe";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";

const Home = () => {

  const handleDwonloadResume = () => {

  }

  return (
    <>
      <section  id="home">
      
      </section>
      <section>
                <AboutMe/>
      </section>

      <section>
        <Education/>
      </section>

      <section>
        <Skills/>
      </section>

      <section>
        <Projects/>
      </section>

      <section>
        <Contact/>
      </section>
    </>
  );
};

export default Home;

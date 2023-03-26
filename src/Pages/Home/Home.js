import React from "react";
import Education from "../../components/Education/Education";
import Skills from "../../components/Skills/Skills";
import Projects from "../../components/Projects/Projects";
import Contact from "../../components/Contact/Contact";
import './Home.css';
import AOS from "aos";
import 'aos/dist/aos.css';
import Banner from "../../components/Banner/Banner";

const Home = () => {

  AOS.init({
    duration: 1000,
    easing: "ease-in",
    once: false
  });

  return (
    <>
      <section >
        <Banner/>
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

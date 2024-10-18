import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1200 });
      });
      
  return (
    <div className="text-white max-w-[1200px] mx-auto flex flex-col justify-start h-[50vh] py-6 text-center md:mt-30 md:py-0" id="about">
        
        <h2 className="mb-10 text-4xl font-bold primary-color pt-28" data-aos="flip-left" >About Me</h2>

        <p className="text-base lg:text-xl" data-aos="zoom-in">
          I’m Ishara Stanley, a dedicated software engineering undergraduate at
          The Open University of Sri Lanka. With a strong foundation in mobile
          and web development, I am passionate about building innovative
          solutions that solve real-world problems. My technical expertise
          includes Java, React Native, Firebase, and SQL, alongside experience
          in frameworks like React JS and Tailwind CSS. I’m a quick learner,
          self-motivated, and enjoy working collaboratively in teams. Currently,
          I am seeking an internship to apply my academic knowledge and further
          enhance my skills in software development, contributing to impactful
          projects in the ever-evolving tech industry.
        </p>
        
    </div>
  )
}

export default About

import React, { useEffect } from "react";
import heroimage from "../assets/Me/heroImg.png";
import { TypeAnimation } from "react-type-animation";
import github from "../assets/Icons/github.png";
import linkedin from "../assets/Icons/linkedin.png";
import whatsapp from "../assets/Icons/whatsapp.png";
import mail from "../assets/Icons/gmail.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[90vh] mx-auto mt-20">
      <div className="col-span-1 mx-auto my-auto w-[300px] h-auto lg:w-[600px]">
        <img src={heroimage} alt="hero" data-aos="fade-right" />
      </div>

      <div className="col-span-2 px-5 my-auto sm:ml-20" data-aos="fade-left">
        <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-7xl md:text-5xl">
          <span className="primary-color">I'm a</span>
          <br />
          <TypeAnimation
            sequence={[
              "Software Engineer",
              1000,
              "Passionate Developer",
              1000,
              "Problem Solver",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="my-6 text-white sm:text-lg lg:text-3xl">
          Hi, I’m Ishara Stanley, a passionate software engineering student
          eager to create innovative tech solutions.
        </p>

        <div className="flex items-center gap-3 my-9">
        
          <a className="flex items-center justify-center rounded-full p-[1.5px] bg-gradient-to-b to-purple-600 from-blue-600 "
            href="https://github.com/ITStanley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="relative group cursor-pointer">
              <div class="absolute -inset-1 bg-gradient-to-t from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-1 py-1 rounded-full bg-black">
                <img src={github} alt="" className="h-9" />
              </div>
            </div>
          </a>

          <a className="flex items-center justify-center rounded-full p-[1.5px] bg-gradient-to-b to-purple-600 from-blue-600 "
            href="https://www.linkedin.com/in/ishara-stanley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="relative group cursor-pointer">
              <div class="absolute -inset-1 bg-gradient-to-t from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-1 py-1 rounded-full bg-black">
                <img src={linkedin} alt="" className="h-9" />
              </div>
            </div>
          </a>

          <a className="flex items-center justify-center rounded-full p-[1.5px] bg-gradient-to-b to-purple-600 from-blue-600 "
            href="https://wa.me/94770680475"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="relative group cursor-pointer">
              <div class="absolute -inset-1 bg-gradient-to-t from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-1 py-1 rounded-full bg-black">
                <img src={whatsapp} alt="" className="h-9" />
              </div>
            </div>
          </a>

          <a className="flex items-center justify-center rounded-full p-[1.5px] bg-gradient-to-b to-purple-600 from-blue-600 "
            href="mailto: isharastanley2000@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="relative group cursor-pointer">
              <div class="absolute -inset-1 bg-gradient-to-t from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-1 py-1 rounded-full bg-black">
                <img src={mail} alt="" className="h-9" />
              </div>
            </div>
          </a>

          <a className="flex items-center justify-center h-[46px] rounded-full p-[2px] bg-gradient-to-b to-purple-600 from-blue-600 "
            href="https://drive.google.com/file/d/1qGUWJSHRyL-U3Forfi2lxZ0MaQJAbj50/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="relative group cursor-pointer">
              <div class="absolute -inset-1 bg-gradient-to-t from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-6 py-1 h-[42px] rounded-full bg-black">
                <p class="primary-color font-bold text-2xl">Resume</p>
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Hero;

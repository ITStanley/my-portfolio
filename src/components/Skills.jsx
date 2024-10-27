import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import vscode from "../assets/Icons/vscode.svg";
import git from "../assets/Icons/git.svg";
import github from "../assets/Icons/github.svg";
import firebase from "../assets/Icons/firebase.svg";
import mssql from "../assets/Icons/microsoftsqlserver.svg";
import astudio from "../assets/Icons/androidstudio.svg";
import figma from "../assets/Icons/figma.svg";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <div
      className="text-white max-w-[1200px] mx-auto mt-10 py-6 text-center md:mt-30 md:py-0"
      id="skills"
    >
      <h2
        className="pt-24 mb-4 text-4xl font-bold primary-color"
        data-aos="flip-left"
      >
        Skills
      </h2>

      <div className="grid grid-cols-1 gap-32 p-3 lg:grid-cols-2">
        <div >
          <h3
            className="mb-8 text-2xl font-bold text-purple-600 underline"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Languages & Frameworks
          </h3>

          <div data-aos="zoom-in" data-aos-delay="700">
            <div className="flex flex-row">
              <p className="text-left basis-1/2">HTML</p>
              <p className="text-sm text-right text-gray-500 basis-1/2">80%</p>
            </div>
            <div className="h-2 mb-2 bg-gray-800 rounded-full">
              <div className="w-[80%] h-2 bg-primary-color rounded-full" data-aos="zoom-in-right" data-aos-delay="700"></div>
            </div>

            <div className="flex flex-row">
              <p className="text-left basis-1/2">CSS</p>
              <p className="text-sm text-right text-gray-500 basis-1/2">60%</p>
            </div>
            <div className="h-2 mb-2 bg-gray-800 rounded-full">
              <div className="w-[60%] h-2 bg-primary-color rounded-full" data-aos="zoom-in-right" data-aos-delay="700"></div>
            </div>

            <div className="flex flex-row">
              <p className="text-left basis-1/2">Java Script</p>
              <p className="text-sm text-right text-gray-500 basis-1/2">50%</p>
            </div>
            <div className="h-2 mb-2 bg-gray-800 rounded-full">
              <div className="w-[50%] h-2 bg-primary-color rounded-full" data-aos="zoom-in-right" data-aos-delay="700"></div>
            </div>

            <div className="flex flex-row">
              <p className="text-left basis-1/2">Java</p>
              <p className="text-sm text-right text-gray-500 basis-1/2">70%</p>
            </div>
            <div className="h-2 mb-2 bg-gray-800 rounded-full">
              <div className="w-[70%] h-2 bg-primary-color rounded-full" data-aos="zoom-in-right" data-aos-delay="700"></div>
            </div>

            <div className="flex flex-row">
              <p className="text-left basis-1/2">Python</p>
              <p className="text-sm text-right text-gray-500 basis-1/2">55%</p>
            </div>
            <div className="h-2 mb-2 bg-gray-800 rounded-full">
              <div className="w-[55%] h-2 bg-primary-color rounded-full" data-aos="zoom-in-right" data-aos-delay="700"></div>
            </div>

            <div className="flex flex-row">
              <p className="text-left basis-1/2">SQL</p>
              <p className="text-sm text-right text-gray-500 basis-1/2">65%</p>
            </div>
            <div className="h-2 mb-2 bg-gray-800 rounded-full">
              <div className="w-[65%] h-2 bg-primary-color rounded-full" data-aos="zoom-in-right" data-aos-delay="700"></div>
            </div>

            <div className="flex flex-row">
              <p className="text-left basis-1/2">React Native</p>
              <p className="text-sm text-right text-gray-500 basis-1/2">75%</p>
            </div>
            <div className="h-2 mb-2 bg-gray-800 rounded-full">
              <div className="w-[75%] h-2 bg-primary-color rounded-full" data-aos="zoom-in-right" data-aos-delay="700"></div>
            </div>

            <div className="flex flex-row">
              <p className="text-left basis-1/2">React Js</p>
              <p className="text-sm text-right text-gray-500 basis-1/2">60%</p>
            </div>
            <div className="h-2 mb-2 bg-gray-800 rounded-full">
              <div className="w-[60%] h-2 bg-primary-color rounded-full" data-aos="zoom-in-right" data-aos-delay="700"></div>
            </div>

            <div className="flex flex-row">
              <p className="text-left basis-1/2">Tailwind Css</p>
              <p className="text-sm text-right text-gray-500 basis-1/2">55%</p>
            </div>
            <div className="h-2 mb-2 bg-gray-800 rounded-full">
              <div className="w-[55%] h-2 bg-primary-color rounded-full" data-aos="zoom-in-right" data-aos-delay="700"></div>
            </div>
          </div>
          
        </div>

        <div>
          <h3
            className="mb-8 text-2xl font-bold text-blue-600 underline"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            Tools & Technologies
          </h3>

          <div className="grid grid-cols-4 gap-5 mx-auto mt-20 sm:grid-cols-4" data-aos="zoom-in" data-aos-delay="700">
            <div className="h-[130px] p-4 bg-gray-800 rounded-md w-28 hover:bg-gray-700 hover:scale-110 hover:duration-500">
              <img src={vscode} alt="" className="" />
              <p className="my-2 text-xs">VS Code</p>
            </div>

            <div className="h-[130px] p-4 bg-gray-800 rounded-md w-28 hover:bg-gray-700 hover:scale-110 hover:duration-500">
              <img src={git} alt="" className="" />
              <p className="my-2 text-xs">Git</p>
            </div>

            <div className="h-[130px] p-4 bg-gray-800 rounded-md w-28 hover:bg-gray-700 hover:scale-110 hover:duration-500">
              <img src={github} alt="" className="" />
              <p className="my-2 text-xs">GitHub</p>
            </div>

            <div className="h-[130px] p-4 bg-gray-800 rounded-md w-28 hover:bg-gray-700 hover:scale-110 hover:duration-500">
              <img src={firebase} alt="" className="" />
              <p className="my-2 text-xs">Firebase</p>
            </div>

            <div className="h-[130px] p-4 bg-gray-800 rounded-md w-28 hover:bg-gray-700 hover:scale-110 hover:duration-500">
              <img src={mssql} alt="" className="" />
              <p className="my-2 text-xs">MSSQL</p>
            </div>

            <div className="h-[130px] p-4 bg-gray-800 rounded-md w-28 hover:bg-gray-700 hover:scale-110 hover:duration-500">
              <img src={astudio} alt="" className="" />
              <p className="my-2 text-xs">Android Studio</p>
            </div>

            <div className="h-[130px] p-4 bg-gray-800 rounded-md w-28 hover:bg-gray-700 hover:scale-110 hover:duration-500">
              <img src={figma} alt="" className="" />
              <p className="my-2 text-xs">Figma</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Skills;

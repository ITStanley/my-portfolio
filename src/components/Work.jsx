import React, { useEffect } from "react";
import proj1 from "../assets/ProjectIcons/proj1.png";
import proj2 from "../assets/ProjectIcons/proj2.png";
import proj3 from "../assets/ProjectIcons/proj3.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <div
      className="text-white max-w-[1200px] mt-10 mx-auto py-6 text-center md:mt-30 md:py-0"
      id="work"
    >
      <h2
        className="mb-5 text-4xl font-bold pt-28 primary-color"
        data-aos="flip-left"
      >
        Work
      </h2>
      <p className="mb-10 text-base text-gray-400 lg:text-xl">
        Check out some of my recent work
      </p>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div
          className="flex items-center justify-center overflow-hidden rounded-md group bg-gradient-to-b to-purple-600 from-blue-600 "
          data-aos="zoom-in"
        >
          <img className="p-0.5 rounded-md" src={proj1} alt="" />

          <div className="absolute inset-0 z-20 flex flex-col justify-center transition-opacity duration-500 ease-in opacity-0 bg-gradient-to-b to-purple-600 from-blue-600 group-hover:opacity-90">
            <span className="text-2xl font-bold tracking-wider text-center text-white">
              PLANTEZA
            </span>
            <span className="p-2 text-xl font-bold text-center text-black">
              This Android App contains a platform for users to find plants,
              connect with plant sellers, and access plant care guides.
            </span>
            <div className="pt-3 text-center">
              <a
                href="https://github.com/ITStanley/Planteza-Android-App.git"
                target="_blank"
              >
                <button className="px-4 py-2 m-2 font-bold text-center text-gray-700 bg-white rounded-lg te0xt-lg">
                  View
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center overflow-hidden rounded-md group bg-gradient-to-b to-purple-600 from-blue-600 "
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img className="p-0.5 rounded-md" src={proj2} alt="" />

          <div className="absolute inset-0 z-20 flex flex-col justify-center transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-90 bg-gradient-to-b to-purple-600 from-blue-600">
            <span className="text-2xl font-bold tracking-wider text-center text-white">
              TRAVEL BUG
            </span>
            <span className="p-2 text-xl font-bold text-center text-black">
              This project is a travel website designed to help users plan and
              explore travel destinations with various features.
            </span>
            <div className="pt-3 text-center">
              <a
                href="https://github.com/ITStanley/Planteza-Android-App.git"
                target="_blank"
              >
                <button className="px-4 py-2 m-2 font-bold text-center text-gray-700 bg-white rounded-lg te0xt-lg">
                  View
                </button>
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex items-center justify-center overflow-hidden rounded-md group bg-gradient-to-b to-purple-600 from-blue-600 "
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img className="p-0.5 rounded-md" src={proj3} alt="" />

          <div className="absolute inset-0 z-20 flex flex-col justify-center transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-90 bg-gradient-to-b to-purple-600 from-blue-600">
            <span className="text-2xl font-bold tracking-wider text-center text-white">
              ARGO
            </span>
            <span className="p-2 text-xl font-bold text-center text-black">
              This project is a React Native bookstore app showcasing the UI
              design for browsing, searching, and purchasing books online.
            </span>
            <div className="pt-3 text-center">
              <a
                href="https://github.com/ITStanley/Planteza-Android-App.git"
                target="_blank"
              >
                <button className="px-4 py-2 m-2 font-bold text-center text-gray-700 bg-white rounded-lg te0xt-lg">
                  View
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;

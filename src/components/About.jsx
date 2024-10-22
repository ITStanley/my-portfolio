import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <div
      className="text-white max-w-[1200px] mx-auto mt-10 py-6 text-center md:mt-30 md:py-0"
      id="about"
    >
      <h2
        className="pt-24 mb-5 text-4xl font-bold primary-color"
        data-aos="flip-left"
      >
        About Me
      </h2>

      <p
        className="text-base lg:text-xl"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        I’m Ishara Stanley, a dedicated software engineering undergraduate at
        The Open University of Sri Lanka. With a strong foundation in mobile and
        web development, I am passionate about building innovative solutions
        that solve real-world problems. My technical expertise includes Java,
        React Native, Firebase, and SQL, alongside experience in frameworks like
        React JS and Tailwind CSS. I’m a quick learner, self-motivated, and
        enjoy working collaboratively in teams. Currently, I am seeking an
        internship to apply my academic knowledge and further enhance my skills
        in software development, contributing to impactful projects in the
        ever-evolving tech industry.
      </p>

      <h3
        className="my-8 text-2xl underline primary-color"
        data-aos="fade-right"
      >
        Education
      </h3>

      <ol class="relative border-s border-gray-200 dark:border-gray-700 w-fit mx-auto">
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            Undergraduate (2021 - Present)
          </h3>
          <time class="block mb-2 text-left text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            The Open University of Sri Lanka
          </time>
          <p class="mb-4 text-base text-left font-normal text-gray-500 dark:text-gray-400">
            Bachelor of Software Engineering Honours
          </p>
        </li>

        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            G.C.E. Advanced Level Examination (2019)
          </h3>
          <time class="block mb-2 text-left  text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Good Shepherd Convent, Kandy
          </time>
          <p class="text-base text-left font-normal text-gray-500 dark:text-gray-400">
            Physical Science - C & 2S | Z-Score - 0.3285
          </p>
        </li>

        <li class="ms-6">
          <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
            <svg
              class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            G.C.E. Ordinary Level Examination (2016)
          </h3>
          <time class="block mb-2 text-left  text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Good Shepherd Convent, Kandy
          </time>
          <p class="text-base text-left font-normal text-gray-500 dark:text-gray-400">
            7A & 2B
          </p>
        </li>
      </ol>
      
    </div>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const upperMarquee = [
    "/logos/html.svg",
    "/logos/css.svg",
    "/logos/javascript.svg",
    "/logos/xml.svg",
    "/logos/java.svg",
    "/logos/c.svg",
    "/logos/python.svg",
    "/logos/sql.svg",
    "/logos/bootstrap.svg",
    "/logos/tailwindcss.svg",
    "/logos/react.svg",
  ];

  return (
    <div className="text-white max-w-[1200px] mx-auto mt-8 flex flex-col justify-start h-[50vh] py-6 text-center md:mt-30 md:py-0" id="about">
      
      <h2 className="mb-10 text-4xl font-bold primary-color" data-aos="flip-left">Skills</h2>

      <div className="flex p-5 overflow-hidden border border-gray-600 md:h-[150px] max-w-[1200px] mx-auto md:flex md:justify-between md:items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {upperMarquee.map((image, index) => {
            return <img src={image} key={index} alt="" className="h-[100px] w-[100px] mr-5" />;
          })}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {upperMarquee.map((image, index) => {
            return <img src={image} key={index} alt="" className="h-[100px] w-[100px] mr-5 " />;
          })}
        </motion.div>
      </div>
      
    </div>
  );
};

export default Skills;
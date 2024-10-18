import React from "react";
import { motion } from "framer-motion";

const Tools = () => {
  const upperMarquee = [
    "/html.svg",
    "/css.svg",
    "/javascript.svg",
    "/xml.svg",
    "/java.svg",
    "/c.svg",
    "/python.svg",
    "/sql.svg",
    "/bootstrap.svg",
    "/tailwindcss.svg",
    "/react.svg",
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-5">
      
      <p className="mb-3 text-4xl font-bold primary-color">Tools </p>

      <div className="flex p-5 overflow-hidden border border-gray-600 md:h-[150px] max-w-[1200px] mx-auto md:flex md:justify-between md:items-center">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0"
        >
          {upperMarquee.map((image, index) => {
            return <img src={image} key={index} alt="" className="h-[100px] w-[100px] mr-5" />;
          })}
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
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

export default Tools;



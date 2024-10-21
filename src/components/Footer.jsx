import React from "react";

const Footer = () => {
  return (
    // <div className="h-[60px] w-full text-center bg-[#01002c] py-5">
    //   <span className="font-bold primary-color">@2024 Ishara Stanley</span>
    // </div>

    <a className="flex relative items-center justify-center lg:w-[99.7%] h-[60px] p-[2px] bg-gradient-to-l from-purple-600 to-blue-600 ">
        <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 blur opacity-100"></div>
        <div class="relative w-full py-4 bg-[#01002c] text-center">
        <span className="font-bold primary-color">@2024 Ishara Stanley</span>
        </div>
    </a>
  );
};

export default Footer;

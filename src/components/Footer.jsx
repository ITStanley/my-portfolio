import React from "react";
import github from "../assets/Icons/github.png";
import linkedin from "../assets/Icons/linkedin.png";
import whatsapp from "../assets/Icons/whatsapp.png";
import mail from "../assets/Icons/gmail.png";

const Footer = () => {
  return (
    // <div className="h-[60px] w-full text-center bg-[#01002c] py-5">
    //   <span className="font-bold primary-color">@2024 Ishara Stanley</span>
    // </div>

    // <div className="flex relative items-center justify-center w-[100%] p-[2px] bg-gradient-to-l from-purple-600 to-blue-600 ">
    //     <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 blur opacity-100"></div>
    //     <div class="relative w-full py-4 bg-[#01002c] text-center">
    //     <span className="font-bold primary-color">@2024 Ishara Stanley</span>
    //     </div>
    // </div>
    <div className="relative h-24 bg-blue-600">
      <div className="absolute  inset-0 z-10 p-5 bg-[#01002c] mx-auto -mb-1 text-center">
        <span className="mb-3 font-bold primary-color">@2024 Ishara Stanley</span>
        
        <div className="flex items-center justify-center w-full gap-3">
          <a
            className="flex items-center w-9 justify-center rounded-full p-[1.5px] bg-gradient-to-b to-purple-600 from-blue-600 "
            href="https://github.com/ITStanley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="relative group cursor-pointer">
              <div class="absolute -inset-1 bg-gradient-to-t from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-1 py-1 rounded-full bg-black">
                <img src={github} alt="" className="h-6" />
              </div>
            </div>
          </a>

          <a
            className="flex items-center w-9  justify-center rounded-full p-[1.5px] bg-gradient-to-b to-purple-600 from-blue-600 "
            href="https://www.linkedin.com/in/ishara-stanley"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="relative group cursor-pointer">
              <div class="absolute -inset-1 bg-gradient-to-t from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-1 py-1 rounded-full bg-black">
                <img src={linkedin} alt="" className="h-6" />
              </div>
            </div>
          </a>

          <a
            className="flex items-center w-9  justify-center rounded-full p-[1.5px] bg-gradient-to-b to-purple-600 from-blue-600 "
            href="https://wa.me/94770680475"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="relative group cursor-pointer">
              <div class="absolute -inset-1 bg-gradient-to-t from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-1 py-1 rounded-full bg-black">
                <img src={whatsapp} alt="" className="h-6" />
              </div>
            </div>
          </a>

          <a
            className="flex items-center w-9 justify-center rounded-full p-[1.5px] bg-gradient-to-b to-purple-600 from-blue-600 "
            href="mailto: isharastanley2000@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="relative group cursor-pointer">
              <div class="absolute -inset-1 bg-gradient-to-t from-purple-600 to-blue-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div class="relative px-1 py-1 rounded-full bg-black">
                <img src={mail} alt="" className="h-6" />
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="absolute z-0 w-full bg-gradient-to-r from-purple-600 to-blue-600 -inset-1 blur"></div>
    </div>
  );
};

export default Footer;

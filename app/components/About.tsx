import React from "react";
import { HiAcademicCap, HiDocument } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between z-10 lg:mx-20 mx-12 font-poppins">

      <div className="flex flex-col justify-center items-start gap-20 lg:w-2/3 text-pink mb-20">
        <div className="flex flex-col items-start  w-full mb-20">
          <div className="flex flex-row gap-4 items-center self-center justify-center mb-8">
            <h1 className="text-4xl font-bold">Education</h1>
            <div className="h-10 w-10 text-2xl  flex items-center justify-center rounded-full bg-pink text-green">
              <HiAcademicCap />
            </div>
          </div>
          <ul className=" list-disc text-2xl leading-relaxed">
            <li>Nottingham Trent University <span className="text-base">&#40; 2018 - 2021 &#41;</span></li>
            <li>BSc Computing</li>
            <li>2.1 final grade</li>
          </ul>
        </div>
        <div className="flex flex-col items-start  w-full mb-20">
          <div className="flex flex-row gap-4 items-center self-center justify-center mb-8">
            <h1 className="text-4xl font-bold">Experience</h1>
            <div className="h-10 w-10 text-2xl  flex items-center justify-center rounded-full bg-pink text-green">
              <MdWork />
            </div>
          </div>
          <ul className=" list-disc text-2xl">
            <li>Web Developer Intern <span className="text-base">at Nottingham Trent University  	&#40; August 2022 - September 2022 &#41;</span></li>
            <li>Assistant Manager <span className="text-base">at Nutri2Go  	&#40; May 2021 - July 2023 &#41;</span></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-6 mb-20">
      <motion.a
            whileHover={{
              rotate: 360,
              scale: 1.1,
              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{ rotate: -20, scale: 0.8 }}
            className="h-32 w-32 text-6xl flex items-center justify-center rounded-full bg-pink text-green cursor-pointer"
            href="https://github.com/Tomato25/"
            target="_blank"
          >
            <HiDocument />
          </motion.a>
          <h1 className="text-xl w-52 text-pink font-poppins text-center">Check out my CV for more info</h1>
      </div>
    </div>
  );
}

export default About;

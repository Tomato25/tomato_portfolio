import React from "react";
import { HiAcademicCap, HiDocument } from "react-icons/hi2";
import { MdWork } from "react-icons/md";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import {
  paragraphVariants,
  documentIconVariants,
} from "../animations/Animations";

function About() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between z-10 lg:mb-20  mt-20  font-poppins w-screen sm:max-w-6xl xl:max-w-screen-2xl lg:px-16 mx-auto">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={paragraphVariants}
        className="flex flex-col justify-center items-start gap-20 lg:w-2/3 text-pink mb-20 lg:pl-32 px-16"
      >
        <motion.div
          variants={paragraphVariants}
          className="flex flex-col items-start  w-full "
        >
          <div className="flex flex-row gap-4 items-center self-center justify-center mb-8">
            <h1 className="lg:text-4xl text-2xl font-bold">Education</h1>
            <div className="h-10 w-10 text-2xl  flex items-center justify-center rounded-full bg-pink text-green">
              <HiAcademicCap />
            </div>
          </div>
          <ul className=" list-disc lg:text-2xl text-lg leading-relaxed text-lightGreen">
            <li>
              Nottingham Trent University{" "}
              <span className="text-base">&#40; 2018 - 2021 &#41;</span>
            </li>
            <li>BSc Computing</li>
            <li>2.1 final grade</li>
          </ul>
        </motion.div>
        <motion.div
          variants={paragraphVariants}
          className="flex flex-col items-start  w-full "
        >
          <div className="flex flex-row gap-4 items-center self-center justify-center mb-8">
            <h1 className="lg:text-4xl text-2xl font-bold">Experience</h1>
            <div className="h-10 w-10 text-2xl  flex items-center justify-center rounded-full bg-pink text-green">
              <MdWork />
            </div>
          </div>
          <ul className=" list-disc lg:text-2xl text-lg text-lightGreen">
            <li>
              Web Developer Intern{" "}
              <span className="text-base">
                at Nottingham Trent University &#40; August 2022 - September
                2022 &#41;
              </span>
            </li>
            <li>
              Assistant Manager{" "}
              <span className="text-base">
                at Nutri2Go &#40; May 2021 - July 2023 &#41;
              </span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
      <motion.div
        variants={documentIconVariants}
        animate={controls}
        initial="hidden"
        className="flex flex-col justify-center items-center gap-6 mb-20"
      >
        <motion.a
          whileHover={{
            rotate: 360,
            scale: 1.1,
            backgroundColor: "#DDACE6",
            transition: { duration: 0.8, type: "spring" },
          }}
          whileTap={{ rotate: -20, scale: 0.8 }}
          className="lg:h-32 lg:w-32 h-24 w-24 lg:text-6xl text-4xl flex items-center justify-center rounded-full bg-lightGreen text-green cursor-pointer"
          href="https://docs.google.com/document/d/1OxSPZbpfKXHea0-dJIh_exQDJVz9ts10Uvasae0d2W8/edit?usp=sharing"
          target="_blank"
        >
          <HiDocument />
        </motion.a>
        <h1 className="lg:text-xl text-md w-52 text-lightGreen font-poppins text-center">
          Check out my CV for more info
        </h1>
      </motion.div>
    </div>
  );
}

export default About;

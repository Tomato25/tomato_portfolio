"use client";
import React from "react";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { FaGithubSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { GiRotaryPhone } from "react-icons/gi";
import { motion } from "framer-motion";
import { socialVariants } from "../animations/svgAnimations";
import logo from "public/Images/Logo.svg";
import Image from "next/image";
import { lettersVariants } from "../animations/textAnimations";
import { sectionTitleVariants } from "../about/aboutAnimations";

function Contact() {
  return (
    <div className="flex flex-col gap-28 mt-20 lg:flex-row items-center justify-center h-auto bg-bg1">
      <div className="lg:w-1/3  flex flex-row  gap-44 justify-between w-screen ">
        <motion.h1
          variants={sectionTitleVariants}
          initial="hidden"
          animate="visible"
          className="text-3xl  md:pl-14 pl-6  md:text-6xl self-center vertical-rl text-shadow-vertical"
        >
          Get in touch
        </motion.h1>
        <div className="text-4xl pr-24 lg:pr-12 w-3/4 lg:w-2/3 flex flex-col justify-center gap-14 md:gap-28 items-center h-full  mb-20 md:mb-0 z-10">
          <div className="flex flex-row justify-center items-center gap-3 w-full ">
            <motion.a
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileTap={{ scale: 0.9 }}
              href="tel:+447598236657"
              target="_blank"
            >
              <h1 className="md:text-2xl text-base transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg ">
                Telephone
              </h1>
            </motion.a>
            <motion.svg
              className="svg-shadow"
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              width="6"
              height="50"
              viewBox="0 0 6 101"
              stroke="#ADE6B9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 0.5V100.5" stroke="#ADE6B9" stroke-width="5" />
            </motion.svg>
            <motion.a
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileTap={{ scale: 0.9 }}
              href="tel:+447598236657"
              target="_blank"
            >
              <GiRotaryPhone className=" transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg " />
            </motion.a>
          </div>
          <div className="flex flex-row justify-center items-center gap-3 w-full">
            <motion.a
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Tomato25/"
              target="_blank"
            >
              <h1 className=" md:text-2xl text-base transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg ">
                LinkedIn
              </h1>
            </motion.a>
            <motion.svg
              className="svg-shadow"
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              width="6"
              height="50"
              viewBox="0 0 6 101"
              stroke="#ADE6B9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 0.5V100.5" stroke="#ADE6B9" stroke-width="5" />
            </motion.svg>
            <motion.a
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileTap={{ scale: 0.9 }}
              href="https://www.linkedin.com/in/hrvoje-tomic/"
              target="_blank"
            >
              <FaLinkedin className=" transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg " />
            </motion.a>
          </div>
          <div className="flex flex-row justify-center items-center gap-3 w-full">
            <motion.a
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Tomato25/"
              target="_blank"
            >
              <h1 className=" md:text-2xl text-base  transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg ">
                Email
              </h1>
            </motion.a>
            <motion.svg
              className="svg-shadow"
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              width="6"
              height="50"
              viewBox="0 0 6 101"
              stroke="#ADE6B9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 0.5V100.5" stroke="#ADE6B9" stroke-width="5" />
            </motion.svg>
            <motion.a
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileTap={{ scale: 0.9 }}
              href="mailto:htomic4@gmail.com"
              target="_blank"
            >
              <SiGmail className=" transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg " />
            </motion.a>
          </div>
          <div className="flex flex-row justify-center items-center gap-3 w-full">
            <motion.a
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileTap={{ scale: 0.9 }}
              href="https://github.com/Tomato25/"
              target="_blank"
            >
              <h1 className="md:text-2xl text-base transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg ">
                Telegram
              </h1>
            </motion.a>
            <motion.svg
              className="svg-shadow"
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              width="6"
              height="50"
              viewBox="0 0 6 101"
              stroke="#ADE6B9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 0.5V100.5" stroke="#ADE6B9" stroke-width="5" />
            </motion.svg>
            <motion.a
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              whileTap={{ scale: 0.9 }}
              href="https://t.me/H_Tomic"
              target="_blank"
            >
              <FaTelegram className=" transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg " />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="w-2/3 h-600 mt-32 mb-32 relative z-0"> 
        <Image
          alt="logo"
          src={logo}
          style={{
            width: "fit-content",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            margin: "0 auto",
            opacity: "0.3",
          }}
        />
        <TagCloud
          style={{
            width: "fit-content",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            margin: "0 auto",
            opacity: "0.",
          }}
          options={(w: Window & typeof globalThis): TagCloudOptions => ({
            radius: Math.min(600, w.innerWidth) / 1.4,
            maxSpeed: "fast",
          })}
          onClickOptions={{ passive: true }}
        >
          {[
            "VSCode",
            "Web designer",
            "TypeScript",
            "Full-stack developer",
            "React",
            "Figma",
            "AdobeXd",
            "CSS",
            "HTML",
            "Next",
            "JavaScript",
            "TailwindCSS",
            "Flutter",
            "Photoshop",
            "Framer Motion",
            "Agile",
            "SCRUM",
          ]}
        </TagCloud>
      </div>
    </div>
  );
}

export default Contact;

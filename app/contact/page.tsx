"use client";
import React from "react";
import { TagCloud, TagCloudOptions } from "@frank-mayer/react-tag-cloud";
import { FaGithubSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import {GiRotaryPhone} from "react-icons/gi";
import { motion } from "framer-motion";
import { socialVariants } from "../animations/svgAnimations";
import logo from "public/Images/Logo.svg"
import Image from "next/image";
import PageWrapper from "../projects/page-wrapper";


function Contact() {
  return (
    <PageWrapper>
    <div className="flex flex-row items-center justify-center h-900 ">
      <h1 className="text-6xl self-center vertical-rl pl-14 ">Get in touch</h1>
      <div className="text-4xl w-1/3 flex flex-col justify-center gap-28 items-center h-full">
        <motion.a
          variants={socialVariants}
          initial="hidden"
          animate="visible"
          whileTap={{ scale: 0.9 }}
          href="https://github.com/Tomato25/"
          target="_blank"
        >
          <GiRotaryPhone className=" transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg " />
        </motion.a>
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
      <div className="w-2/3 h-600 relative">
        <Image alt="logo"  src={logo} style={{
            width: "fit-content",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            margin: "0 auto",
            opacity: "0.3",
          }}/>
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
            radius: Math.min(600, w.innerWidth, w.innerHeight) / 1.4,
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
            "Express.js",
            "MongoDB",
            "MERN",
            "Framer Motion",
            "Agile",
            "SCRUM",
          ]}
        </TagCloud>
      </div>
    </div>
    </PageWrapper>
  );
}

export default Contact;

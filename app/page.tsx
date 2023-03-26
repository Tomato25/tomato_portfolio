"use client";
import { FaGithubSquare, FaLinkedin, FaTelegram } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";
import Particlesbackground from "./components/particles/Particlesbackground";
import { motion } from "framer-motion";
import {
  wordVariants,
  lettersVariants,
  linksVariants,
} from "./animations/textAnimations";
import { socialVariants } from "./animations/svgAnimations";
import { Links } from "@/public/content";



export default function Home() {

  return (
    <main
      className="h-screen w-screen flex flex-col justify-start"
    >
      <Particlesbackground />
      <div className="flex flex-row h-100 justify-between items-center  mx-16 text-4xl mt-4 z-10">
        <div className="flex flex-row h-100 justify-between items-start gap-16 mx-16">
          <motion.h1
            variants={socialVariants}
            initial="hidden"
            animate="visible"
            whileTap={{ scale: 0.9 }}

          >
            <FaGithubSquare className=" transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg " />
          </motion.h1>
        </div>
        <div className="flex flex-row h-100 justify-between items-start gap-16 mx-16 text-2xl">
          <h1>TomiCode</h1>
        </div>
      </div>
      <motion.div
        variants={linksVariants}
        initial="hidden"
        animate="visible"
        className="h-900 w-screen flex flex-row justify-center gap-20 items-center  text-2xl relative mx-auto z-10"
      >
        {Links.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.to}
              className=" transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg "
            >
              <motion.p variants={wordVariants} whileTap={{ scale: 0.9 }}>
                {link.name.split("").map((char, index) => {
                  return (
                    <motion.span
                      key={char + "-" + index}
                      variants={lettersVariants}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </motion.p>
            </Link>
          );
        })}
      </motion.div>
      <div className="flex flex-row h-100 justify-between items-center  mx-16 text-4xl z-10">
        <div className="flex flex-row h-100 justify-between items-center gap-16 mx-16">
          <motion.a
            variants={socialVariants}
            initial="hidden"
            animate="visible"
            whileTap={{ scale: 0.9 }}

            href="https://github.com/Tomato25/"
            target="_blank"
          >
            <FaGithubSquare className=" transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg " />
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
        </div>
        <div className="flex flex-row h-100 justify-between  items-center gap-16 mx-16">
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
      </div>
    </main>
  );
}

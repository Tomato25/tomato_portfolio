"useClient";

import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { GrReactjs } from "react-icons/gr";
import { SiAdobexd, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";import {TbBrandFramerMotion} from "react-icons/tb"
import Image from "next/image";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { socialVariants, techVariants } from "../../animations/svgAnimations";
import { imageVariants, titleVariants } from "../animations";
import { lettersVariants, wordVariants } from "../../animations/textAnimations";
import { chechu } from "public/projectsContent";
import SSRMasonry from "../../components/ImageGrid";
import ChechuBanner from "public/Images/Chechu/ChechuScreen1.png";
import { useChechuContext } from "../contexts/ChechuContext";

export default function Chechu() {
  const { carouselToggle, setCarouselToggle } = useChechuContext();

  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-16 mb-16">
      <LayoutGroup>
        <div className="flex flex-row gap-4 px-4 2xl:flex-nowrap md:flex-wrap lg:gap-20 lg:px-14 justify-between w-screen">
          <motion.h1
            layout
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="text-xl lg:text-5xl self-center vertical-rl text-shadow-vertical"
          >
            {chechu.year.split("").map((char, index) => {
              return (
                <motion.span
                  key={char + "-" + index}
                  variants={lettersVariants}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>

          <AnimatePresence mode="wait">
              <motion.div
                key="Image"
                layout
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                exit={{
                  opacity: 0,
                  y: -300,
                  transition: { duration: 1 },
                }}
                className="flex justify-center items-center"
              >
                <Image
                  src={ChechuBanner}
                  className="w-2/3 rounded-lg svg-shadow"
                  alt="Snaga prirode"
                  placeholder="blur"
                />
              </motion.div>       
          </AnimatePresence>
          <motion.div
            layout
            className="flex flex-col justify-center items-center gap-4 "
          >
            <motion.a
              variants={socialVariants}
              initial="hidden"
              animate="visible"
              href="https://github.com/Tomato25/SnagaPrirode"
              target="_blank"
              className="text-xl lg:text-4xl"
            >
              <FaGithub className=" transform transition-all svg-shadow hover:scale-125 hover:svg-shadow-lg" />
            </motion.a>
          </motion.div>
        </div>
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate="visible"
          layout
          className="flex flex-row justify-center gap-4 items-center"
        >
          <motion.h1
            variants={lettersVariants}
            className="text-4xl text-shadow"
          >
            0
          </motion.h1>
          <motion.svg
            variants={lettersVariants}
            className="svg-shadow"
            width="6"
            height="60"
            viewBox="0 0 6 101"
            stroke="#ADE6B9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 0.5V100.5" stroke="#ADE6B9" stroke-width="5" />
          </motion.svg>

          <motion.h1
            variants={wordVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl text-shadow"
          >
            {chechu.name.split("").map((char, index) => {
              return (
                <motion.span
                  key={char + "-" + index}
                  variants={lettersVariants}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>
        </motion.div>
        <motion.div
          layout
          className="flex flex-row justify-between items-center gap-8  text-xl"
        >
          <motion.div
              variants={techVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                opacity: 1,
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              className="flex flex-col justify-center items-center gap-3 transform transition-all hover:svg-shadow"
            >
              <h1>NextJS</h1>
              <h1>
                <SiNextdotjs />
              </h1>
            </motion.div>
            <motion.div
              variants={techVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                opacity: 1,
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              className="flex flex-col justify-center items-center gap-3 transform transition-all hover:svg-shadow"
            >
              <h1>Typescript</h1>
              <h1>
                <SiTypescript />
              </h1>
            </motion.div>
            <motion.div
              variants={techVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                opacity: 1,
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              className="flex flex-col justify-center items-center gap-3 transform transition-all hover:svg-shadow"
            >
              <h1>TailwindCSS</h1>
              <h1>
                <SiTailwindcss />
              </h1>
            </motion.div>
            <motion.div
              variants={techVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                opacity: 1,
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              className="flex flex-col justify-center items-center gap-3 opacity-40 transform transition-all hover:opacity-100 hover:scale-110 hover:svg-shadow"
            >
              <h1>Framer Motion</h1>
              <h1>
                <TbBrandFramerMotion />
              </h1>
            </motion.div>
            <motion.div
              variants={techVariants}
              initial="hidden"
              animate="visible"
              whileHover={{
                opacity: 1,
                scale: 1.1,
                transition: { duration: 0.1 },
              }}
              className="flex flex-col justify-center items-center gap-3 opacity-40 transform transition-all hover:opacity-100 hover:scale-110 hover:svg-shadow"
            >
              <h1>AdobeXd</h1>
              <h1>
                <SiAdobexd />
              </h1>
            </motion.div>
         
        </motion.div>
      </LayoutGroup>
    </div>
  );
}

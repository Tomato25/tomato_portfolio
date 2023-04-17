"useClient";

import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiExternalLink } from "react-icons/hi";
import { SiAdobexd, SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import {TbBrandFramerMotion} from "react-icons/tb"
import Image from "next/image";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { socialVariants, techVariants } from "../../animations/svgAnimations";
import { imageVariants, titleVariants } from "../animations";
import { lettersVariants, wordVariants } from "../../animations/textAnimations";
import { portfolio } from "public/projectsContent";
import SSRMasonry from "../../components/ImageGrid";
import PortfolioBanner from "public/Images/Portfolio/1.png";
import { usePortfolioContext } from "../contexts/PortfolioContext";
import { TfiMoreAlt } from "react-icons/tfi";

export default function Tomic_code_portfolio() {
  const { carouselToggle, setCarouselToggle } = usePortfolioContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <div className="flex flex-col justify-center items-center gap-8 mt-16 mb-16 bg-slate-200 text-green py-20">
        <LayoutGroup>
          <div className="flex flex-row gap-4 px-4 2xl:flex-nowrap md:flex-wrap lg:gap-20 lg:px-14 justify-between w-screen">
            <motion.h1
              layout
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl lg:text-5xl self-center vertical-rl text-shadow-light"
            >
              {portfolio.year.split("").map((char, index) => {
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
              layout
              key="Image"
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit={{
                opacity: 0,
                transition: { duration: 1 },
              }}
              className="flex justify-center items-center"
            >
              {carouselToggle ? (
                <motion.div
                  onMouseEnter={() => setIsModalOpen(true)}
                  onMouseLeave={() => setIsModalOpen(false)}
                  className="md:w-2/3 w-3/4 flex justify-center items-center relative  svg-shadow hover:scale-105 transform transition-all"
                  onClick={() => setCarouselToggle(!carouselToggle)}
                >
                  <Image
                    src={PortfolioBanner}
                    className="rounded-lg transform transition-all "
                    alt="portfolio images"
                    
                  />
                  {isModalOpen && (
                    <motion.div initial={{opacity:0, scale:0}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className="md:text-2xl text-base rounded-lg  absolute inset-0 bg-gray-800 bg-opacity-70 flex flex-col justify-center items-center text-lightGreen transition-opacity">
                      <h1 className="cursor-pointer ">Check out more</h1>
                      <TfiMoreAlt className="cursor-pointer text-4xl"/>
                    </motion.div>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key="masonry"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{
                    opacity: 0,
                    y: -300,
                    transition: { duration: 1 },
                  }}
                  className="flex justify-center items-center"
                >
                  <SSRMasonry
                    images={portfolio.images}
                    function={setCarouselToggle}
                    toggle={carouselToggle}
                  />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
            <motion.div
              layout
              className="flex flex-col justify-center items-center gap-4 "
            >
               <div className="tooltip tooltip-left tooltip-primary pl-3" data-tip="Check the code on Github">
              <motion.a
                variants={socialVariants}
                initial="hidden"
                animate="visible"
                href="https://github.com/Tomato25/tomato_portfolio"
                target="_blank"
                className="text-2xl lg:text-4xl"
              >
                <FaGithub className=" transform transition-all svg-shadow-light hover:scale-125 " />
              </motion.a>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            layout
            className="flex flex-row justify-center  md:text-4xl text-2xl  gap-4 items-center"
          >
            <motion.h1
              variants={lettersVariants}
              className="md:text-4xl text-2xl text-shadow-light"
            >
              1
            </motion.h1>
            <motion.svg
              variants={lettersVariants}
              className="svg-shadow-light"
              width="6"
              height="60"
              viewBox="0 0 6 101"
              stroke="#003D2B"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 0.5V100.5" stroke="#003D2B" stroke-width="5" />
            </motion.svg>
  
            <motion.h1
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="md:text-4xl text-2xl text-shadow-light"
            >
              {portfolio.name.split("").map((char, index) => {
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
            className="flex flex-row flex-wrap justify-center items-center md:gap-8 gap-4  md:text-xl text-sm w-4/5"
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
              className="flex flex-col justify-center items-center gap-3 transform transition-all hover:svg-shadow-light"
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
              className="flex flex-col justify-center items-center gap-3 transform transition-all hover:svg-shadow-light"
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
              className="flex flex-col justify-center items-center gap-3 transform transition-all hover:svg-shadow-light"
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
              className="flex flex-col justify-center items-center gap-3 opacity-40 transform transition-all hover:opacity-100 hover:scale-110 hover:svg-shadow-light"
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
              className="flex flex-col justify-center items-center gap-3 opacity-40 transform transition-all hover:opacity-100 hover:scale-110 hover:svg-shadow-light"
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
  
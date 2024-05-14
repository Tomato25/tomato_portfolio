"useClient";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaGithub, FaGithubSquare } from "react-icons/fa";
import {TfiMoreAlt} from "react-icons/tfi"
import { HiExternalLink } from "react-icons/hi";
import { GrReactjs } from "react-icons/gr";
import { SiAdobexd, SiCss3 } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import Image from "next/image";
import { LayoutGroup, AnimatePresence } from "framer-motion";
import { socialVariants, techVariants } from "../../animations/svgAnimations";
import { imageVariants, titleVariants } from "../animations";
import { lettersVariants, wordVariants } from "../../animations/textAnimations";
import { snagaPrirode } from "public/projectsContent";
import SSRMasonry from "../../components/ImageGrid";
import SPBanner from "public/Images/SnagaPrirode/screen0.png";
import { useSnagaPrirodeContext } from "../contexts/SnagaPrirodeContext";
import { sectionTitleVariants } from "@/app/about/aboutAnimations";

export default function Snaga_prirode() {
  const { carouselToggle, setCarouselToggle } = useSnagaPrirodeContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center gap-8 md:mt-16 md:mb-16 py-20">
      <LayoutGroup>
        <div className="flex flex-col md:flex-row gap-4 px-4 2xl:flex-nowrap  lg:gap-20 lg:px-14 justify-between w-screen">
          <motion.h1
                      variants={sectionTitleVariants}
            initial="hidden"
            animate="visible"
            layout
            className="invisible md:visible text-2xl lg:text-5xl self-center md:vertical-rl text-shadow-vertical"
          >
            {snagaPrirode.year}
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
                  className="md:w-2/3 w-11/12 flex justify-center items-center relative cursor-pointer"
                  onClick={() => setCarouselToggle(!carouselToggle)}
                >
                  <Image
                    src={SPBanner}
                    className="rounded-lg transform transition-all "
                    alt="Snaga prirode"
                    
                  />
                  <AnimatePresence>
                  {isModalOpen && (
                    <motion.div
                      initial={{ opacity: 0,}}
                      animate={{ opacity: 1,}}
                      transition={{ duration: 0.5 }}
                      exit={{opacity:0}}
                      className="md:text-xl text-base rounded-lg  absolute inset-0 bg-gray-800 bg-opacity-70 flex flex-col justify-center items-center text-lightGreen transition-opacity"
                    >
                      <div  className="h-28 w-28 lg:h-40 lg:w-40  text-base lg:text-xl p-4 flex flex-col items-center justify-center rounded-full bg-lightGreen text-green  text-center ">
                      <h1 className="cursor-pointer whitespace-normal">Check out more</h1>
                      <TfiMoreAlt className="cursor-pointer text-3xl" />
                      
                      </div>
                    </motion.div>
                  )}
                  </AnimatePresence>
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
                    images={snagaPrirode.images}
                    function={setCarouselToggle}
                    toggle={carouselToggle}
                  />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
          <motion.div
            layout
            className="flex md:flex-col flex-row justify-center items-center gap-4 "
          >
            <div
              className="tooltip tooltip-left tooltip-primary pl-3"
              data-tip="Check the code on Github"
            >
              <motion.a
                initial={{ opacity: 0, x: 40 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.5,
                  },
                }}
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8, type: "spring" },
                }}
                whileTap={{ rotate: -20, scale: 0.8 }}
                className="h-16 w-16 flex items-center justify-center rounded-full bg-lightGreen text-green text-4xl cursor-pointer"
                href="https://github.com/Tomato25/SnagaPrirode"
                target="_blank"
              >
                <FaGithubSquare />
              </motion.a>
            </div>
            <div
              className="tooltip tooltip-left tooltip-primary pl-3"
              data-tip="Go to the website"
            >
              <motion.a
                initial={{ opacity: 0, x: 40 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.5,
                  },
                }}
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8, type: "spring" },
                }}
                whileTap={{ rotate: -20, scale: 0.8 }}
                className="h-16 w-16 flex items-center justify-center rounded-full bg-lightGreen text-green text-4xl cursor-pointer"
                href="https://snagaprirode.com.hr"
                target="_blank"
              >
                <HiExternalLink/>
              </motion.a>
            </div>
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
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}        
            className="md:text-3xl text-2xl text-shadow"
          >
            {snagaPrirode.name}
          </motion.h1>
        </motion.div>
        <motion.div
          layout
          className="flex flex-row flex-wrap justify-center items-center md:gap-16 gap-8  md:text-3xl text-xl w-4/5"
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
            <h1>
              <GrReactjs />
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
            <h1>
              <SiCss3 />
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
            <h1>
              <SiAdobexd />
            </h1>
          </motion.div>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
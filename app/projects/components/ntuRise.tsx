"useClient";

import React, { useState } from "react";

import { SiAdobexd, SiBootstrap, SiHtml5 } from "react-icons/si";
import Image from "next/image";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { techVariants } from "../../animations/svgAnimations";
import { imageVariants, titleVariants } from "../animations";
import { lettersVariants, wordVariants } from "../../animations/textAnimations";
import { NTURise } from "public/projectsContent";
import SSRMasonry from "../../components/ImageGrid";
import RiseBanner from "public/Images/NTURise/6.png";
import { useNtuRiseContext } from "../contexts/NtuRiseContext";
import {
  liVariants,
  sectionTitleVariants,
  ulVariants,
} from "@/app/about/aboutAnimations";
import { TfiMoreAlt } from "react-icons/tfi";

export default function NtuRise() {
  const { carouselToggle, setCarouselToggle } = useNtuRiseContext();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectDescription = [
    "Code or preview of the website is not available due to NTU policy and website being available only to NTU students",
    "Creating UI using lists, tables, buttons, images etc.",
    "Using customized Bootstrap 5 elements such as accordions, containers and navBars",
    "Using Bootstrap 5 to develop a fully responsive layout",
    "Using CSS transitions, gradients, pseudo-classes and other more basic styling options",
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-16 mb-16 py-20 bg-slate-200 text-green">
      <LayoutGroup>
        <div className="flex flex-col md:flex-row gap-4 px-4 2xl:flex-nowrap lg:gap-20 lg:px-14 justify-between w-screen">
          <motion.h1
            layout
            variants={sectionTitleVariants}
            initial="hidden"
            animate="visible"
            className="invisible md:visible text-2xl lg:text-5xl self-center md:vertical-rl text-shadow-light"
          >
            {NTURise.year}
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
                  className="w-4/5 flex justify-center items-center relative cursor-pointer"
                  onClick={() => setCarouselToggle(!carouselToggle)}
                >
                  <Image
                    src={RiseBanner}
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
                      <div  className="h-40 w-40 p-4 flex flex-col items-center justify-center rounded-full bg-lightGreen text-green text-xl text-center ">
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
                    images={NTURise.images}
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
          ></motion.div>
        </div>
        <motion.div
          layout
          className="flex flex-row justify-center gap-4 items-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:text-3xl text-2xl text-shadow-light"
          >
            {NTURise.name}
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
            className="flex flex-col justify-center items-center gap-3 transform transition-all"
          >
            <h1>
              <SiHtml5 />
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
            className="flex flex-col justify-center items-center gap-3 opacity-40 transform transition-all hover:opacity-100 hover:scale-110 "
          >
            <h1>
              <SiBootstrap />
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
            className="flex flex-col justify-center items-center gap-3 opacity-40 transform transition-all hover:opacity-100 hover:scale-110"
          >
            <h1>
              <SiAdobexd />
            </h1>
          </motion.div>
        </motion.div>

        <motion.div className="w-screen h-fit md:text-xl text-xs md:p-20 p-8">
          <motion.ul
            className="list-disc pl-10 text-lg  w-full"
            variants={ulVariants}
            initial="hidden"
            animate="visible"
          >
            {projectDescription.map((para, index) => {
              return (
                <motion.li variants={liVariants} key={index} className="mb-3">
                  {para}
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}

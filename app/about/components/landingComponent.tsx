import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProfileCircle from "../components/ProfileCircle";
import IconCircle from "../components/IconCircle";

import {
  paraVariants,
  sectionTitleVariants,
} from "../aboutAnimations";
import { aboutPara } from "@/public/aboutContent";

export default function LandingComponent() {

  return (
    <AnimatePresence>
      <div
        className="lg:grid lg:grid-cols-2 w-screen my-20">
        <div className="flex flex-col mx-auto h-max gap-20 self-center justify-center  items-center w-full">
          <div className="flex flex-row md:gap-24 gap-10 min-w-full lg:pl-14 pl-6 mb-10">
            <motion.h1
              variants={sectionTitleVariants}
              initial="hidden"
              animate="visible"
              className="md:text-6xl text-4xl self-center vertical-rl text-shadow-vertical"
            >
              About
            </motion.h1>
            <motion.div
              variants={paraVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center items-center gap-10 pr-12"
            >
              {aboutPara.map((para, index) => {
                return (
                  <motion.p
                    variants={paraVariants}
                    initial="hidden"
                    animate="visible"
                    key={index}
                    className="md:text-xl text-sm"
                  >
                   {para}
                  </motion.p>
                );
              })}
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1.5 } }}
          className="flex flex-col md:mx-auto justify-start my-20 md:my-40 md:w-1/2 w-screen"
        >
          <ProfileCircle/>
        </motion.div>
        

      </div>

    </AnimatePresence>
  );
}
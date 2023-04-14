import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import {
  lettersVariants,
  subtitleVariants,
  liVariants,
  sectionTitleVariants,
  ulVariants,
} from "../aboutAnimations";

import { Experience } from "@/public/aboutContent";

export default function ExperienceComponent() {
  const experienceSubtitle = "Experience";
  const controls = useAnimation();
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
    if (!isInView) {
      controls.start("hidden");
    }
  }, [controls, isInView]);

  return (
    <div className="bg-white text-green">
      <div className="flex flex-row md:gap-24 gap-4 max-w-full lg:pl-14 pl-6 mb-10 my-28">
        <motion.h1
          ref={ref}
          variants={sectionTitleVariants}
          initial="hidden"
          animate={controls}
          className="md:text-6xl text-4xl self-center vertical-rl text-shadow-vertical-light"
        >
          {experienceSubtitle.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={lettersVariants}>
                {char}
              </motion.span>
            );
          })}
        </motion.h1>
        <div className="flex flex-col items-start gap-16 self-center  w-full mx-auto">
          <div className="flex flex-col justify-center items-start gap-20 md:gap-40 min-w-full">
            {Experience.map((role, index) => {
              return (
                <div className="flex md:flex-row flex-col-reverse justify-between w-full md:pr-14 pr-4">
                  <div className="flex flex-col justify-start items-start">
                    <div className="flex flex-col justify-start items-start gap-4">
                      <span>
                        <motion.h2
                          className="md:text-4xl text-lg  text-shadow-light"
                          variants={subtitleVariants}
                          initial="hidden"
                          ref={ref}
                          animate={controls}
                        >
                          {role.role.split("").map((char, index) => {
                            return (
                              <motion.span
                                key={char + "-" + index}
                                variants={lettersVariants}
                              >
                                {char}
                              </motion.span>
                            );
                          })}
                        </motion.h2>
                        <motion.h2
                          variants={subtitleVariants}
                          viewport={{ once: true }}
                          initial="hidden"
                          ref={ref}
                          animate={controls}
                          className="md:text-lg text-sm text-shadow-light"
                        >
                          {role.name.split("").map((char, index) => {
                            return (
                              <motion.span
                                key={char + "-" + index}
                                variants={lettersVariants}
                              >
                                {char}
                              </motion.span>
                            );
                          })}
                        </motion.h2>
                      </span>

                      <motion.ul
                        variants={ulVariants}
                        initial="hidden"
                        animate={controls}
                        ref={ref}
                        className="list-disc pl-10 md:text-lg text-sm "
                      >
                        {role.description.map((para, index) => {
                          return (
                            <motion.li
                              variants={liVariants}
                              key={index}
                              className="mb-3"
                            >
                              {para}
                            </motion.li>
                          );
                        })}
                      </motion.ul>
                    </div>
                  </div>
                  <motion.h1
                    variants={subtitleVariants}
                    viewport={{ once: true }}
                    initial="hidden"
                    animate={controls}
                    ref={ref}
                    className="md:text-2xl text-lg self-center md:mb-0 mb-8 md:vertical-rl text-shadow-vertical-light"
                  >
                    {role.duration.split("").map((char, index) => {
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
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

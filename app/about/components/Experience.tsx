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
      <div className="flex flex-row  gap-24 min-w-full pl-14  my-28">
        <motion.h1
          ref={ref}
          variants={sectionTitleVariants}
          initial="hidden"
          animate={controls}
          className="text-6xl self-center vertical-rl text-shadow-vertical-light"
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
          <div className="flex flex-col justify-center items-start gap-40 min-w-full">
            {Experience.map((role, index) => {
              return (
                <div className="flex flex-row justify-between w-full pr-14">
                  <div className="flex flex-col justify-start items-start">
                    <div className="flex flex-col justify-start items-start gap-4">
                      <span>
                        <motion.h2
                          className="text-4xl  text-shadow-light"
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
                          className="text-xl  text-shadow-light"
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
                        className="list-disc pl-10 text-lg "
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
                    className="text-2xl self-center vertical-rl text-shadow-vertical-light"
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

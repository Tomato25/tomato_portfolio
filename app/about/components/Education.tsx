import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import {
  lettersVariants,
  subtitleVariants,
  liVariants,
  sectionTitleVariants,
  ulVariants,
} from "../aboutAnimations";
import { Education } from "@/public/aboutContent";

export default function EducationComponent() {
  const educationSubtitle = "Education";
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
    <div className="flex flex-row  gap-24 min-w-full pl-14  my-28">
      <motion.h1
        variants={sectionTitleVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
        className="text-6xl self-center vertical-rl text-shadow-vertical"
      >
        {educationSubtitle.split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={lettersVariants}>
              {char}
            </motion.span>
          );
        })}
      </motion.h1>

      {Education.map((education, index) => {
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
                          {education.university.split("").map((char, index) => {
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
                          {education.course.split("").map((char, index) => {
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
                  {education.description.map((para, index) => {
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
            <motion.h1 variants={subtitleVariants}
                  initial="hidden"
                  animate={controls}
                  ref={ref} className="text-2xl self-center vertical-rl text-shadow-vertical">
              {education.duration.split("").map((char, index) => {
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
  );
}

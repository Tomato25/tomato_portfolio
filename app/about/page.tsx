"use client";
import ProfileCircle from "../components/ProfileCircle";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import {
  paraWordVariants,
  lettersVariants,
  paraVariants,
  subtitleVariants,
} from "../animations/textAnimations";
import { socialVariants } from "../animations/svgAnimations";
import {
  aboutPara,
  Experience,
  Education,
  SoftSkillsCommunication,
  SoftSkillsTime,
} from "@/public/aboutContent";

export default function About() {
  const aboutSubtitle = "About";
  const educationSubtitle = "Education";
  const experienceSubtitle = "Experience";
  const softSkillsSubtitle = "Soft skills";
  const CommunicationSubtitle = "Communication";
  const TPMSubtitle = "Time and Project Management";

  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    if (!inView) {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <main className="flex flex-col  flex-grow  ">
      <div className="grid grid-cols-2 w-screen my-20">
        <div className="flex flex-col mx-auto h-max gap-20 self-center justify-center  items-center w-full">
          <div className="flex flex-row gap-24 min-w-full pl-14 mb-10">
            <motion.h1
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
              className="text-6xl self-center vertical-rl text-shadow-vertical"
            >
              {aboutSubtitle.split("").map((char, index) => {
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
            <motion.div
              variants={paraVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col justify-center items-center gap-10"
            >
              {aboutPara.map((para, index) => {
                return (
                  <motion.p
                    variants={paraWordVariants}
                    key={index}
                    className="text-2xl"
                  >
                    {para.split("").map((char, index) => {
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
                );
              })}
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5 } }}
          className="flex flex-col mx-auto justify-start my-40 w-1/2"
        >
          <ProfileCircle />
        </motion.div>
      </div>

      <div className="bg-white text-green">
        <div className="flex flex-row  gap-24 min-w-full pl-14  my-28">
          <motion.h1
            ref={ref}
            variants={subtitleVariants}
            initial="hidden"
            animate={controls}
            className="text-6xl self-center vertical-rl text-shadow-vertical-light"
          >
            {experienceSubtitle.split("").map((char, index) => {
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
          <div className="flex flex-col items-start gap-16 self-center  w-full mx-auto">
            <div className="flex flex-col justify-center items-start gap-40 min-w-full">
              {Experience.map((role, index) => {
                return (
                  <div className="flex flex-row justify-between w-full pr-14">
                    <div className="flex flex-col justify-start items-start">
                      <div className="flex flex-col justify-start items-start gap-4">
                        <span>
                          <h2 className="text-4xl  text-shadow-light">
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
                          </h2>
                          <h2 className="text-xl  text-shadow-light">
                            {role.name}
                          </h2>
                        </span>

                        <motion.ul
                          variants={paraVariants}
                          initial="hidden"
                          animate={controls}
                          ref={ref}
                          className="list-disc pl-10 text-lg "
                        >
                          {role.description.map((para, index) => {
                            return (
                              <motion.li
                                variants={paraWordVariants}
                                key={index}
                                className="mb-3"
                              >
                                {para.split("").map((char, index) => {
                                  return (
                                    <motion.span
                                      key={char + "-" + index}
                                      variants={lettersVariants}
                                    >
                                      {char}
                                    </motion.span>
                                  );
                                })}
                              </motion.li>
                            );
                          })}
                        </motion.ul>
                      </div>
                    </div>
                    <h1 className="text-2xl self-center vertical-rl text-shadow-vertical-light">
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
                    </h1>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row  gap-24 min-w-full pl-14  my-28">
        <motion.h1
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
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
                    <h2 className="text-4xl text-shadow">
                      {education.university}
                    </h2>
                  </span>

                  <motion.ul
                    variants={paraVariants}
                    initial="hidden"
                    animate="visible"
                    className="list-disc pl-10 text-lg "
                  >
                    {education.description.map((para, index) => {
                      return (
                        <motion.li
                          variants={paraWordVariants}
                          key={index}
                          className="mb-3"
                        >
                          {para.split("").map((char, index) => {
                            return (
                              <motion.span
                                key={char + "-" + index}
                                variants={lettersVariants}
                              >
                                {char}
                              </motion.span>
                            );
                          })}
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </div>
              </div>
              <h1 className="text-2xl self-center vertical-rl text-shadow-vertical">
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
              </h1>
            </div>
          );
        })}
      </div>

      <div className="bg-white text-green">
        <div className="flex flex-row  gap-24 min-w-full pl-14  my-28">
          <h1 className="text-6xl self-center vertical-rl text-shadow-vertical-light">
            {softSkillsSubtitle.split("").map((char, index) => {
              return (
                <motion.span
                  key={char + "-" + index}
                  variants={lettersVariants}
                >
                  {char}
                </motion.span>
              );
            })}
          </h1>
          <div className="flex flex-col items-start gap-16 self-center  w-full mx-auto pr-12">
            <h2 className="text-4xl self-center text-shadow-light">
              {CommunicationSubtitle.split("").map((char, index) => {
                return (
                  <motion.span
                    key={char + "-" + index}
                    variants={lettersVariants}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </h2>
            <div className="flex flex-row justify-center items-start gap-8 min-w-full">
              {SoftSkillsCommunication.map((skill, index) => {
                return (
                  <div className="flex flex-col justify-center items-start gap-4 w-1/2">
                    <h2 className=" text-lg">
                      {skill.setting.split("").map((char, index) => {
                        return (
                          <motion.span
                            key={char + "-" + index}
                            variants={lettersVariants}
                          >
                            {char}
                          </motion.span>
                        );
                      })}
                    </h2>
                    <motion.ul
                      variants={paraVariants}
                      initial="hidden"
                      animate="visible"
                      className="list-disc pl-10 text-lg "
                    >
                      {skill.description.map((para, index) => {
                        return (
                          <motion.li
                            variants={paraWordVariants}
                            key={index}
                            className="mb-3"
                          >
                            {para.split("").map((char, index) => {
                              return (
                                <motion.span
                                  key={char + "-" + index}
                                  variants={lettersVariants}
                                >
                                  {char}
                                </motion.span>
                              );
                            })}
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  </div>
                );
              })}
            </div>

            <h2 className="text-4xl self-center text-shadow-light">
              {TPMSubtitle.split("").map((char, index) => {
                return (
                  <motion.span
                    key={char + "-" + index}
                    variants={lettersVariants}
                  >
                    {char}
                  </motion.span>
                );
              })}
            </h2>
            <div className="flex flex-row justify-start items-start gap-8 min-w-full">
              {SoftSkillsTime.map((skill, index) => {
                return (
                  <div className="flex flex-col justify-center items-start gap-4">
                    <motion.ul
                      variants={paraVariants}
                      initial="hidden"
                      animate="visible"
                      className="list-disc pl-10 text-lg "
                    >
                      {skill.description.map((para, index) => {
                        return (
                          <motion.li
                            variants={paraWordVariants}
                            key={index}
                            className="mb-3"
                          >
                            {para.split("").map((char, index) => {
                              return (
                                <motion.span
                                  key={char + "-" + index}
                                  variants={lettersVariants}
                                >
                                  {char}
                                </motion.span>
                              );
                            })}
                          </motion.li>
                        );
                      })}
                    </motion.ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

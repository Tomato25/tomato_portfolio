"use client";
import ProfileCircle from "../components/ProfileCircle";
import { motion } from "framer-motion";
import {
  paraWordVariants,
  lettersVariants,
  paraVariants,
} from "../animations/textAnimations";
import { socialVariants } from "../animations/svgAnimations";
import { aboutPara, avoJob, ntuJob,ntuUni, commSSwd, commSSjob, tmSS } from "@/public/content";

export default function About() {
  return (
    <main className="flex flex-col  flex-grow  ">
      <div className="grid grid-cols-2 w-screen my-20">
        <div className="flex flex-col mx-auto h-max gap-20 self-center justify-center  items-center w-full">
          <div className="flex flex-row gap-24 min-w-full pl-14 mb-10">
            <h1 className="text-6xl self-center vertical-rl text-shadow-vertical">
              About
            </h1>
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
          <h1 className="text-6xl self-center vertical-rl text-shadow-vertical-light">
            Experience
          </h1>
          <div className="flex flex-col items-start gap-16 self-center  w-full mx-auto">
            <div className="flex flex-col justify-center items-start gap-40 min-w-full">
              <div className="flex flex-row justify-between w-full pr-14">
                <div className="flex flex-col justify-start items-start">
                  <div className="flex flex-col justify-start items-start gap-4">
                    <span>
                      <h2 className="text-4xl  text-shadow-light">
                        Assistant manager
                      </h2>
                      <h2 className="text-xl  text-shadow-light">
                        at Nutri2Go
                      </h2>
                    </span>

                    <motion.ul
                      variants={paraVariants}
                      initial="hidden"
                      animate="visible"

                      className="list-disc pl-10 text-lg "
                    >
                      {avoJob.map((para, index) => {
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
                  2021-present
                </h1>
              </div>

              <div className="flex flex-row justify-between  w-full pr-14">
                <div className="flex flex-col justify-start items-start">
                  <div className="flex flex-col justify-start items-start gap-4">
                    <span>
                      <h2 className="text-4xl text-shadow-light">
                        Web Developer Intern{" "}
                      </h2>
                      <h2 className="text-xl text-shadow-light">
                        at Nottingham Trent University
                      </h2>
                    </span>

                    <motion.ul
                      variants={paraVariants}
                      initial="hidden"
                      animate="visible"
                      className="list-disc pl-10 text-lg "
                    >
                      {ntuJob.map((para, index) => {
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
                  August-September 2022
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row  gap-24 min-w-full pl-14  my-28">
        <h1 className="text-6xl self-center vertical-rl text-shadow-vertical">
          Education
        </h1>
        <div className="flex flex-row justify-between w-full pr-14">
          <div className="flex flex-col justify-start items-start">
            <div className="flex flex-col justify-start items-start gap-4">
              <span>
                <h2 className="text-4xl text-shadow">
                  Nottingham Trent University
                </h2>
              </span>

              <motion.ul
                      variants={paraVariants}
                      initial="hidden"
                      animate="visible"
                      className="list-disc pl-10 text-lg "
                    >
                      {ntuUni.map((para, index) => {
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
            2018 – 2021
          </h1>
        </div>
      </div>

      <div className="bg-white text-green">
        <div className="flex flex-row  gap-24 min-w-full pl-14  my-28">
          <h1 className="text-6xl self-center vertical-rl text-shadow-vertical-light">
            Soft skills
          </h1>
          <div className="flex flex-col items-start gap-16 self-center  w-full mx-auto pr-12">
            <h2 className="text-4xl self-center text-shadow-light">
              Communication
            </h2>
            <div className="flex flex-row justify-center items-start gap-8 min-w-full">
              <div className="flex flex-col justify-center items-start gap-4 w-1/2">
                <h2 className=" text-lg">In a web development setting:</h2>
                <motion.ul
                      variants={paraVariants}
                      initial="hidden"
                      animate="visible"
                      className="list-disc pl-10 text-lg "
                    >
                      {commSSwd.map((para, index) => {
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

              <div className="flex flex-col justify-center items-start gap-4  w-1/2">
                <h2 className=" text-lg">Current assistant manager role:</h2>
                <motion.ul
                      variants={paraVariants}
                      initial="hidden"
                      animate="visible"
                      className="list-disc pl-10 text-lg "
                    >
                      {commSSjob.map((para, index) => {
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

            <h2 className="text-4xl self-center text-shadow-light">
              Time and project management
            </h2>
            <div className="flex flex-row justify-start items-start gap-8 min-w-full">
              <div className="flex flex-col justify-center items-start gap-4">
              <motion.ul
                      variants={paraVariants}
                      initial="hidden"
                      animate="visible"
                      className="list-disc pl-10 text-lg "
                    >
                      {tmSS.map((para, index) => {
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
          </div>
        </div>
      </div>
    </main>
  );
}

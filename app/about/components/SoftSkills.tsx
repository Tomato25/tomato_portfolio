import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { sectionContainerVariants } from "../aboutAnimations";
import { SoftSkillsCommunication, SoftSkillsTime } from "@/public/aboutContent";

export default function SoftSkillsComponent() {
  const CommunicationSubtitle = "Communication";
  const TPMSubtitle = "Time and Project Management";
  const softSkillsSubtitle = "Soft skills";

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
    <div className="bg-slate-200 text-green">
      <motion.div
        ref={ref}
        variants={sectionContainerVariants}
        initial="hidden"
        animate={controls}
        className="flex flex-row  md:gap-24 gap-4 min-w-full lg:pl-14 pl-6 mb-10 my-28"
      >
        <motion.h1 className="md:text-6xl text-4xl self-center vertical-rl text-shadow-vertical-light">
          {softSkillsSubtitle}
        </motion.h1>
        <div className="flex flex-col items-start gap-16 self-center  w-full mx-auto pr-12">
          <motion.h2 className="md:text-4xl text-2xl self-center text-shadow-light">
            {CommunicationSubtitle}
          </motion.h2>
          <div className="flex md:flex-row flex-col justify-center items-start gap-8 min-w-full">
            {SoftSkillsCommunication.map((skill, index) => {
              return (
                <div className="flex flex-col justify-center items-start gap-4 md:w-1/2 w-full">
                  <motion.h2 className=" md:text-2xl text-xl">
                    {skill.setting}
                  </motion.h2>
                  <motion.ul className="list-disc pl-10  md:text-lg text-sm">
                    {skill.description.map((para, index) => {
                      return (
                        <motion.li key={index} className="mb-3">
                          {para}
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </div>
              );
            })}
          </div>

          <motion.h2 className="md:text-4xl text-2xl self-center text-shadow-light">
            {TPMSubtitle}
          </motion.h2>
          <div className="flex flex-row justify-start items-start gap-8 min-w-full">
            {SoftSkillsTime.map((skill, index) => {
              return (
                <div className="flex flex-col justify-center items-start gap-4">
                  <motion.ul className="list-disc pl-10  md:text-lg text-sm">
                    {skill.description.map((para, index) => {
                      return (
                        <motion.li key={index} className="mb-3">
                          {para}
                        </motion.li>
                      );
                    })}
                  </motion.ul>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

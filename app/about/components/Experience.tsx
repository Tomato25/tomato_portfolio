import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import {
  subtitleVariants,
  liVariants,
  sectionTitleVariants,
  ulVariants,
  sectionVariants,
  sectionContainerVariants,
} from "../aboutAnimations";

import { Experience } from "@/public/aboutContent";

export default function ExperienceComponent() {
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
      <div className="flex flex-row md:gap-24 gap-4 max-w-full lg:pl-14 pl-6 mb-10 my-28">
        <motion.h1
          ref={ref}
          variants={sectionTitleVariants}
          initial="hidden"
          animate={controls}
          className="md:text-6xl text-4xl self-center vertical-rl text-shadow-vertical-light"
        >
          Experience
        </motion.h1>
        <div className="flex flex-col items-start gap-16 self-center  w-full mx-auto">
          <motion.div
            variants={sectionContainerVariants}
            animate={controls}
            viewport={{ once: true }}
            ref={ref}
            initial="hidden"
            className="flex flex-col justify-center items-start gap-20 md:gap-40 min-w-full"
          >
            {Experience.map((role, index) => {
              return (
                <motion.div
                  variants={sectionContainerVariants}
                  key={index}
                  className="flex md:flex-row flex-col-reverse justify-between w-full md:pr-14 pr-4"
                >
                  <div className="flex flex-col justify-start items-start">
                    <div className="flex flex-col justify-start items-start gap-4">
                      <span>
                        <motion.h2 className="md:text-4xl text-lg  text-shadow-light">
                          {role.role}
                        </motion.h2>
                        <motion.h2 className="md:text-lg text-sm text-shadow-light">
                          {role.name}
                        </motion.h2>
                      </span>

                      <motion.ul className="list-disc pl-10 md:text-lg text-sm ">
                        {role.description.map((para, index) => {
                          return <motion.li className="mb-3">{para}</motion.li>;
                        })}
                      </motion.ul>
                    </div>
                  </div>
                  <motion.h1 className="md:text-xl text-lg self-center md:mb-0 mb-8 md:vertical-rl text-shadow-vertical-light">
                    {role.duration}
                  </motion.h1>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

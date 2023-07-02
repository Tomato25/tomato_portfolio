import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef } from "react";
import {
  SiPhp,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCsharp,
} from "react-icons/si";
import {
  subtitleVariants,
  liVariants,
  sectionTitleVariants,
  ulVariants,
  sectionContainerVariants,
} from "../aboutAnimations";
import { techVariants } from "../../animations/svgAnimations";
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

  const ECommerceProject = {
    name: "E-commerce project",
    description: [
      "Using all major HTML elements such as buttons, tables, lists, forms, images and anchor tags",
      "Using PHP to communicate with database, display products on master/detail page, authenticate users with different access levels",
      "Updating cart and displaying purchase history and wish list",
      "Using CSS for styling and responsive design (media queries)",
      "Using JS for carousel",
    ],
  };

  const CCDProject = {
    name: "Car comparison dashboard",
    description: [
      "Creating user stories and user journeys",
      "Designing wireframes and mock-ups using AdobeXD",
      "Using charts.js to develop dashboard with charts showing multiple data objects",
      "Data fetched using PHP",
    ],
  };

  const DBProject = {
    name: "Visual C# database application",
    description: [
      "Recording and editing data",
      "Searching the database for information (use of basic SQL queries)",
      "Visualising the data using charts",
      "Using classes / objects / inheritance / polymorphism",
    ],
  };

  return (
    <div className="flex flex-row  md:gap-24 gap-4 min-w-full lg:pl-14 pl-6 mb-10 my-28">
      <motion.h1
        variants={sectionTitleVariants}
        initial="hidden"
        animate={controls}
        ref={ref}
        className="md:text-6xl text-4xl self-center vertical-rl text-shadow-vertical"
      >
        Education
      </motion.h1>

      {Education.map((education, index) => {
        return (
          <motion.div variants={sectionContainerVariants}
          animate={controls}
          viewport={{ once: true }}
          initial="hidden" 
          ref={ref} className="flex md:flex-row flex-col-reverse justify-between w-full md:pr-14 pr-4">
            <div  className="flex flex-col justify-start items-start">
              <div   
                  className="flex flex-col justify-start items-start gap-4 w-full">
                <span>
                  <motion.h2 className="md:text-4xl text-lg  text-shadow-light">
                    {education.university}
                  </motion.h2>
                  <motion.h2 className="md:text-lg text-sm   text-shadow-light">
                    {education.course}
                  </motion.h2>
                </span>

                <motion.ul  className="list-disc pl-10 md:text-lg text-sm">
                  {education.description.map((para, index) => {
                    return (
                      <motion.li
                        variants={liVariants}
                        key={index}
                        className="mb-3 pr-10"
                      >
                        {para}
                      </motion.li>
                    );
                  })}
                </motion.ul>
                <motion.h2
                    variants={sectionContainerVariants}
                    className="md:text-4xl text-2xl self-center text-shadow-light mt-12 pr-12"
                  >
                    Projects
                  </motion.h2>
                <motion.div
                  variants={sectionContainerVariants}
                  animate={controls}
                  viewport={{ once: true }}
                  ref={ref}
                  initial="hidden"
                  className="flex flex-col items-start gap-16 self-center w-full mx-auto pr-12"
                >
                  
                  <div className="flex flex-col justify-center items-start gap-4 w-full">
                    <motion.h2
                      variants={sectionContainerVariants}
                      className=" md:text-2xl text-xl self-center mb-8"
                    >
                      {ECommerceProject.name}
                    </motion.h2>
                    <motion.ul
                      variants={sectionContainerVariants}
                      className="list-disc pl-10 md:text-lg text-sm  w-full"
                    >
                      {ECommerceProject.description.map((para, index) => {
                        return <motion.li className="mb-3">{para}</motion.li>;
                      })}
                      <motion.li
                        variants={sectionContainerVariants}
                        className="md:text-lg text-sm mb-3 flex flex-row justify-center items-center w-full mx-auto md:gap-20 gap-6"
                      >
                        <div className="flex flex-col justify-center items-center gap-3">
                          <h1>HTML</h1>
                          <h1>
                            <SiHtml5 />
                          </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                          <h1>CSS</h1>
                          <h1>
                            <SiCss3 />
                          </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                          <h1>JS</h1>
                          <h1>
                            <SiJavascript />
                          </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                          <h1>MySQL</h1>
                          <h1>
                            <SiMysql />
                          </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                          <h1>PHP</h1>
                          <h1>
                            <SiPhp />
                          </h1>
                        </div>
                      </motion.li>
                    </motion.ul>
                  </div>

                  <div className="flex flex-col justify-center items-start gap-4 w-full">
                    <motion.h2
                      variants={sectionContainerVariants}
                      className=" md:text-2xl text-xl self-center mb-8 text-center"
                    >
                      {CCDProject.name}
                    </motion.h2>
                    <motion.ul
                      variants={sectionContainerVariants}
                      className="list-disc pl-10 md:text-lg text-sm w-full"
                    >
                      {CCDProject.description.map((para, index) => {
                        return (
                          <motion.li key={index} className="mb-3">
                            {para}
                          </motion.li>
                        );
                      })}
                      <motion.li
                        variants={sectionContainerVariants}
                        key={index}
                        className="  md:text-xl text-sm mb-3 flex flex-row justify-center items-center w-full mx-auto md:gap-20 gap-6"
                      >
                        <div className="flex flex-col justify-center items-center gap-3">
                          <h1>HTML</h1>
                          <h1>
                            <SiHtml5 />
                          </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                          <h1>CSS</h1>
                          <h1>
                            <SiCss3 />
                          </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                          <h1>JS</h1>
                          <h1>
                            <SiJavascript />
                          </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                          <h1>MySQL</h1>
                          <h1>
                            <SiMysql />
                          </h1>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-3">
                          <h1>PHP</h1>
                          <h1>
                            <SiPhp />
                          </h1>
                        </div>
                      </motion.li>
                    </motion.ul>
                  </div>

                  <div className="flex flex-col justify-center items-start gap-4 w-full">
                    <motion.h2 className=" md:text-2xl text-lg self-center mb-8 text-center">
                      {DBProject.name}
                    </motion.h2>
                    <motion.ul className="list-disc pl-10 md:text-xl text-sm  w-full ">
                      {DBProject.description.map((para, index) => {
                        return (
                          <motion.li key={index} className="mb-3">
                            {para}
                          </motion.li>
                        );
                      })}
                      <motion.li
                        key={index}
                        className=" md:text-xl text-sm mb-3 flex flex-row justify-center items-center self-center w-full mx-auto d:gap-20 gap-6"
                      >
                        <div className="flex flex-col justify-center items-center gap-3">
                          <h1>C#</h1>
                          <h1>
                            <SiCsharp />
                          </h1>
                        </div>
                      </motion.li>
                    </motion.ul>
                  </div>
                </motion.div>
              </div>
            </div>
            <motion.h1 variants={sectionContainerVariants} className="md:text-2xl text-lg self-center md:vertical-rl md:mb-0 mb-8 text-shadow-vertical">
              {education.duration}
            </motion.h1>
          </motion.div>
        );
      })}
    </div>
  );
}

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
  lettersVariants,
  subtitleVariants,
  liVariants,
  sectionTitleVariants,
  ulVariants,
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
      "Using classes/objects/inheritance/polymorphism",
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
                    className="md:text-lg text-sm   text-shadow-light"
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
                  className="list-disc pl-10 md:text-lg text-sm w-9/12"
                >
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

                <div className="flex flex-col items-start gap-16 self-center  w-11/12 mx-auto pr-12">
                  <motion.h2
                    variants={subtitleVariants}
                    initial="hidden"
                    animate={controls}
                    ref={ref}
                    className="text-4xl self-center text-shadow-light"
                  >
                    {"Projects".split("").map((char, index) => {
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
                  <div className="flex flex-col justify-center items-start gap-4 w-full">
                    <motion.h2
                      variants={subtitleVariants}
                      initial="hidden"
                      animate={controls}
                      ref={ref}
                      className=" text-2xl self-center mb-8"
                    >
                      {ECommerceProject.name.split("").map((char, index) => {
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
                    <motion.ul
                      className="list-disc pl-10 text-lg  w-full"
                      ref={ref}
                      variants={ulVariants}
                      initial="hidden"
                      animate={controls}
                    >
                      {ECommerceProject.description.map((para, index) => {
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
                      <motion.li
                        variants={liVariants}
                        key={index}
                        className=" text-xl mb-3 flex flex-row justify-center items-center w-full mx-auto gap-20"
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
                      variants={subtitleVariants}
                      initial="hidden"
                      animate={controls}
                      ref={ref}
                      className="text-2xl self-center mb-8"
                    >
                      {CCDProject.name.split("").map((char, index) => {
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
                    <motion.ul
                      className="list-disc pl-10 text-lg w-full"
                      ref={ref}
                      variants={ulVariants}
                      initial="hidden"
                      animate={controls}
                    >
                      {CCDProject.description.map((para, index) => {
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
                      <motion.li
                        variants={liVariants}
                        key={index}
                        className=" text-xl mb-3 flex flex-row justify-center items-center w-full mx-auto gap-20"
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
                      variants={subtitleVariants}
                      initial="hidden"
                      animate={controls}
                      ref={ref}
                      className=" text-2xl self-center mb-8"
                    >
                      {DBProject.name.split("").map((char, index) => {
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
                    <motion.ul
                      className="list-disc pl-10 text-lg  w-full"
                      ref={ref}
                      variants={ulVariants}
                      initial="hidden"
                      animate={controls}
                    >
                      {DBProject.description.map((para, index) => {
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
                      <motion.li
                        variants={liVariants}
                        key={index}
                        className=" text-xl mb-3 flex flex-row justify-center items-center self-center w-full mx-auto gap-20"
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
                </div>
              </div>
            </div>
            <motion.h1
              variants={subtitleVariants}
              initial="hidden"
              animate={controls}
              ref={ref}
              className="md:text-2xl text-lg self-center md:vertical-rl text-shadow-vertical"
            >
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

"use client";
import React, { useState } from "react";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  cardTextVariants,
  cardVariants,
  iconContainerVariants,
  iconVariants,
  sectionTitleVariants,
} from "../animations/contactAnimations";
import { useRef } from "react";
import AnimatedTextContact from "./AnimatedTextContact";

function Contact() {
  const h2Refs = useRef<(HTMLHeadingElement | null)[]>([null, null, null, null]); // Initialize with null values
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (index: number) => {
    if (h2Refs.current[index]) {
      const textToCopy = h2Refs.current[index]?.innerText;

      if (textToCopy !== undefined) {
        navigator.clipboard
          .writeText(textToCopy)
        .then(() => {
          setCopiedIndex(index);
          setTimeout(() => {
            setCopiedIndex(null);
          }, 2000); // 2 seconds
        })
        .catch((error) => {
          console.error("Failed to copy text to clipboard:", error);
        });
    }
  }};

  return (
    <div className="flex gap-28 mt-20 flex-row items-center h-full w-screen bg-bg1">
      <motion.h1
        variants={sectionTitleVariants}
        initial="hidden"
        animate="visible"
        className="text-3xl  md:pl-14 pl-6  md:text-6xl self-center vertical-rl text-shadow-vertical"
      >
        Contact
      </motion.h1>
      <div className="flex flex-col gap-36 self-start items-center justify-around w-full px-24">
        <LayoutGroup>
        <motion.div  layout>
      <AnimatedTextContact />
      </motion.div>
        <motion.div
           layout
          variants={iconContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-row justify-evenly gap-16 items-center"
        >
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-lightGreen/90 text-green w-72 h-80 flex flex-col justify-between gap-8 items-center p-8  rounded-3xl"
          >
            <motion.h1 variants={cardTextVariants} className="text-3xl">
              Telegram
            </motion.h1>
            <div
              className="tooltip tooltip-secondary tooltip-bottom cursor-pointer"
              data-tip="Copy"
            >
                   <motion.h2 ref={(el) => (h2Refs.current[0] = el)} onClick={() => copyToClipboard(0)}

                variants={cardTextVariants}
              >
                t.me/H_Tomic
              </motion.h2>
            </div>
            <a href="https://t.me/H_Tomic" target="_blank">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8, type: "spring" },
                }}
                whileTap={{ rotate: -20, scale: 0.8 }}
                className="h-20 w-20 flex items-center justify-center rounded-full text-lightGreen bg-green text-4xl cursor-pointer "
              >
                <FaTelegramPlane />
              </motion.div>
            </a>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-lightGreen/90 text-green w-72 h-80 flex flex-col justify-between gap-8 items-center p-8  rounded-3xl"
          >
            <motion.h1 variants={cardTextVariants} className="text-3xl">
              LinkedIn
            </motion.h1>
            <div
              className="tooltip tooltip-secondary tooltip-bottom cursor-pointer"
              data-tip="Copy"
            >
             <motion.h2 ref={(el) => (h2Refs.current[1] = el)} onClick={() => copyToClipboard(1)}
              className="text-center"
              variants={cardTextVariants}
            >
              linkedin.com/in/hrvoje-tomic/
            </motion.h2></div>
            <a href="https://www.linkedin.com/in/hrvoje-tomic/" target="_blank">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8, type: "spring" },
                }}
                whileTap={{ rotate: -20, scale: 0.8 }}
                className="h-20 w-20 flex items-center justify-center rounded-full text-lightGreen bg-green text-4xl cursor-pointer "
              >
                {" "}
                <FaLinkedin />
              </motion.div>
            </a>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-lightGreen/90 text-green w-72 h-80 flex flex-col justify-between gap-8 items-center p-8  rounded-3xl"
          >
            <motion.h1 variants={cardTextVariants} className="text-3xl">
              Phone
            </motion.h1>
            <div
              className="tooltip tooltip-secondary tooltip-bottom cursor-pointer"
              data-tip="Copy"
            >
             <motion.h2 ref={(el) => (h2Refs.current[2] = el)} onClick={() => copyToClipboard(2)}
              variants={cardTextVariants}
            >
              +4475-9823-6657
            </motion.h2></div>
            <a href="tel:+447598236657">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8, type: "spring" },
                }}
                whileTap={{ rotate: -20, scale: 0.8 }}
                className="h-20 w-20 flex items-center justify-center rounded-full text-lightGreen bg-green text-4xl cursor-pointer "
              >
                <BsFillTelephoneFill />
              </motion.div>
            </a>
          </motion.div>
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="bg-lightGreen/90 text-green w-72 h-80 flex flex-col justify-between gap-8 items-center p-8  rounded-3xl"
          >
            <motion.h1 variants={cardTextVariants} className="text-3xl">
              Email
            </motion.h1>
            <div
              className="tooltip tooltip-secondary tooltip-bottom cursor-pointer"
              data-tip="Copy"
            >
             <motion.h2 ref={(el) => (h2Refs.current[3] = el)} onClick={() => copyToClipboard(3)}
              variants={cardTextVariants}
            >
              htomic4@gmail.com
            </motion.h2></div>
            <a href="mailto:htomic4@gmail.com" target="_blank">
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8, type: "spring" },
                }}
                whileTap={{ rotate: -20, scale: 0.8 }}
                className="h-20 w-20 flex items-center justify-center rounded-full text-lightGreen bg-green text-4xl cursor-pointer "
              >
                <MdEmail />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
        <AnimatePresence>
          {copiedIndex !== null && (
            <motion.div
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 45 }}
              key="1"
              className="w-1/2  alert alert-info"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>Copied to clipboard</span>
            </motion.div>
          )}
        </AnimatePresence>
        </LayoutGroup>
      </div>
    </div>
  );
}

export default Contact;

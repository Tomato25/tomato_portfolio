"use client";
import { FaGithubSquare, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Particlesbackground from "./components/Particlesbackground";
import { LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import {
  NavVariants,
  iconContainerVariants,
  menuVariants,
  menuItemVariants,
} from "./animations/homeAnimations";
import { Links } from "@/public/aboutContent";
import ProfileImg from "@/public/Images/profileImg.jpg";
import AnimatedText from "./components/AnimatedText";
export default function Home() {

  return (
    <main className="h-screen w-screen flex flex-col justify-start ">
      <Particlesbackground />
      <motion.div
          variants={NavVariants}
          initial="hidden"
          animate="visible"
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.8, type: "spring" },
          }}
          whileTap={{ scale: 0.8 }}
          className="z-10 self-center"
        >
          <Image
            src={ProfileImg}
            alt="Profile Image"
            className="rounded-full mt-2 h-16 w-16"
            tabIndex={0}
          />
        </motion.div>
      <LayoutGroup>
      <motion.div layout  className="flex flex-col  justify-center items-center mx-6 lg:mx-16 text-4xl z-10">
      <AnimatedText />
      </motion.div>

      <motion.div
       layout
        variants={menuVariants}
        initial="hidden"
        animate="visible"
        className="h-screen w-screen flex flex-col md:flex-row justify-center gap-10 md:gap-20 items-center text-xl md:text-2xl relative mx-auto z-10"
      >
        {Links.map((link, index) => {
          return (
            <Link key={index} href={link.to}>
              <motion.p
                variants={menuItemVariants}
                whileTap={{ scale: 0.9 }}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
                className="bg-lightGreen text-green p-4 rounded-full md:w-36 md:h-36 w-28 h-28 flex flex-row justify-center items-center"
              >
                {link.name}
              </motion.p>
            </Link>
          );
        })}
      </motion.div>
      </LayoutGroup>
      <div className="h-100 flex gap-6 flex-row justify-evenly md:justify-between items-center  md:mx-16 text-4xl z-10">
        <motion.div
          variants={iconContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-row h-100 justify-between items-center gap-8 md:gap-16 "
        >
          <motion.a
            variants={iconContainerVariants}
            whileHover={{
              rotate: 360,
              scale: 1.1,
              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{ rotate: -20, scale: 0.8 }}
            className="md:h-16 md:w-16 h-12 w-12 md:text-4xl text-3xl  flex items-center justify-center rounded-full bg-lightGreen text-green cursor-pointer"
            href="https://github.com/Tomato25/"
            target="_blank"
          >
            <FaGithubSquare />
          </motion.a>
          <motion.a
            variants={iconContainerVariants}
            whileHover={{
              rotate: 360,
              scale: 1.1,
              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{ rotate: -20, scale: 0.8 }}
            className="md:h-16 md:w-16 h-12 w-12 md:text-4xl text-3xl flex items-center justify-center rounded-full bg-lightGreen text-green  cursor-pointer"
            href="https://www.linkedin.com/in/hrvoje-tomic/"
            target="_blank"
          >
            <FaLinkedin />
          </motion.a>
        </motion.div>
        <motion.div
          variants={iconContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-row h-100 justify-between  items-center  gap-8 md:gap-16"
        >
          <motion.a
            variants={iconContainerVariants}
            whileHover={{
              rotate: 360,
              scale: 1.1,
              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{ rotate: -20, scale: 0.8 }}
            className="md:h-16 md:w-16 h-12 w-12 md:text-4xl text-3xl flex items-center justify-center rounded-full bg-lightGreen text-green cursor-pointer"
            href="mailto:htomic4@gmail.com"
            target="_blank"
          >
            <MdEmail />
          </motion.a>
          <motion.a
            variants={iconContainerVariants}
            whileHover={{
              rotate: 360,
              scale: 1.1,
              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{ rotate: -20, scale: 0.8 }}
            className="md:h-16 md:w-16 h-12 w-12 md:text-4xl text-3xl flex items-center justify-center rounded-full bg-lightGreen text-green  cursor-pointer"
            href="https://t.me/H_Tomic"
            target="_blank"
          >
            <FaTelegramPlane />
          </motion.a>
        </motion.div>
      </div>
    </main>
  );
}

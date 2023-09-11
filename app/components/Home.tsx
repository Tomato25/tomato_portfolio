"use client";
import { FaGithubSquare, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImg from "@/public/Images/profileImg.jpg";
import { iconContainerVariants } from "../animations/homeAnimations";    

function Home() {
  return (
    <div className="min-h-screen z-10 flex flex-col mb-40">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 flex-1 ">
        <div className="flex items-center justify-center lg:w-1/2">
          <p className="text-pink font-poppins md:text-4xl xl:text-5xl  text-3xl lg:text-left text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
            maiores distinctio nam debitis autem deleniti inventore numquam
            tempore modi dolorum.
          </p>
        </div>
        <div className="flex items-center lg:justify-end justify-center w-2/3 lg:h-auto lg:w-1/2">
          <Image
            className="rounded-full"
            src={ProfileImg}
            alt="avatar"
            height={400}
            width={400}
          />
        </div>
      </div>

      <div className=" flex gap-6 flex-row justify-center items-center mb-16 text-4xl z-10">
        <motion.div
          variants={iconContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-row h-100 justify-center items-center gap-8 md:gap-16 "
        >
          <motion.a
            variants={iconContainerVariants}
            whileHover={{
              rotate: 360,
              scale: 1.1,
              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{ rotate: -20, scale: 0.8 }}
            className="md:h-16 md:w-16 h-12 w-12 md:text-4xl text-3xl  flex items-center justify-center rounded-full bg-pink text-green cursor-pointer"
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
            className="md:h-16 md:w-16 h-12 w-12 md:text-4xl text-3xl flex items-center justify-center rounded-full bg-pink text-green  cursor-pointer"
            href="https://www.linkedin.com/in/hrvoje-tomic/"
            target="_blank"
          >
            <FaLinkedin />
          </motion.a>
          
          <motion.a
            variants={iconContainerVariants}
            whileHover={{
              rotate: 360,
              scale: 1.1,
              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{ rotate: -20, scale: 0.8 }}
            className="md:h-16 md:w-16 h-12 w-12 md:text-4xl text-3xl flex items-center justify-center rounded-full bg-pink text-green cursor-pointer"
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
            className="md:h-16 md:w-16 h-12 w-12 md:text-4xl text-3xl flex items-center justify-center rounded-full bg-pink text-green  cursor-pointer"
            href="https://t.me/H_Tomic"
            target="_blank"
          >
            <FaTelegramPlane />
          </motion.a>
        </motion.div>

      </div>
    </div>
  );
}

export default Home;

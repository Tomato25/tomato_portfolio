"use client";
import { FaGithubSquare, FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import Image from "next/image";
import ProfileImg from "@/public/Images/profileImg.jpg";
import { iconContainerVariants } from "../animations/Animations";

function Home() {
  return (
    <div className="min-h-screen z-10 flex flex-col md:mb-16 w-screen sm:max-w-6xl xl:max-w-screen-2xl px-8 mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-16 flex-1 md:mb-12">
        <motion.div initial={{x:-200, opacity:0}} animate={{x:1, opacity:1}} transition={{delay:0.5, duration:0.3}}  className="flex flex-col gap-6 items-center justify-center lg:w-1/2">
          <p className="text-pink font-poppins md:text-2xl xl:text-3xl  text-2xl lg:text-left text-center leading-8">
            Software developer and Computing graduate with freelance and
            internship experience.
          </p>
          <p className="text-pink leading-7 font-poppins md:text-2xl xl:text-3xl  text-2xl lg:text-left text-center">
            Passionate about producing clean and reusable code by utilizing
            modern technologies.
          </p>
          <p className="text-pink leading-7 font-poppins md:text-2xl xl:text-3xl  text-2xl lg:text-left text-center">
            Looking for the opportunity to further develop my skills and
            offering web development services.
          </p>
        </motion.div>
        <motion.div initial={{x:200, opacity:0}} animate={{x:1, opacity:1}} transition={{delay:0.5, duration:0.3}}  className="flex items-center lg:justify-end justify-center w-1/2 lg:h-auto">
          <Image
            className="rounded-full"
            src={ProfileImg}
            alt="avatar"
            height={400}
            width={400}
          />
        </motion.div>
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
              backgroundColor: "#DDACE6",
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
              backgroundColor: "#DDACE6",

              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{ rotate: -20, scale: 0.8 }}
            className="md:h-16 md:w-16 h-12 w-12 md:text-4xl text-3xl flex items-center justify-center rounded-full bg-lightGreen text-green  cursor-pointer"
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
              backgroundColor: "#DDACE6",

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
              backgroundColor: "#DDACE6",

              transition: { duration: 0.8, type: "spring" },
            }}
            whileTap={{ rotate: -20, scale: 0.8 }}
            className="md:h-16 md:w-16 h-12 w-12 md:text-4xl  text-3xl flex items-center justify-center rounded-full bg-lightGreen text-green  cursor-pointer"
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
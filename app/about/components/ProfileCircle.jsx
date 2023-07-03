import React from "react";
import "./ProfileCircle.scss";
import profileImg from "public/Images/profileImg.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact  } from "react-icons/fa";
import {SiAdobexd, SiTypescript, SiJavascript, SiTailwindcss} from "react-icons/si";
import {TbBrandFramerMotion} from "react-icons/tb"
function ProfileCircle() {
  return (
    <div>
      <div className="profileImgContainer">
        <ul className="circle-container">
          <li>
          <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.8, type: "spring" },
                    }}
                    whileTap={{ rotate: -20, scale: 0.8 }}
                    className="h-14 w-14 xl:h-20 xl:w-20 text-2xl  :text-4xl flex items-center justify-center rounded-full bg-lightGreen text-green "
                  >
                    < FaHtml5 />
                  </motion.div>
          </li>
          <li>
          <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.8, type: "spring" },
                    }}
                    whileTap={{ rotate: -20, scale: 0.8 }}
                    className="h-14 w-14 xl:h-20 xl:w-20 text-2xl  :text-4xl flex items-center justify-center rounded-full bg-lightGreen text-green "
                  >
                    <FaCss3Alt />
                  </motion.div>
          </li>
          <li>
          <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.8, type: "spring" },
                    }}
                    whileTap={{ rotate: -20, scale: 0.8 }}
                    className="h-14 w-14 xl:h-20 xl:w-20 text-2xl  :text-4xl flex items-center justify-center rounded-full bg-lightGreen text-green "
                  >
                    <FaReact />
                  </motion.div>
          </li>
          <li>
          <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.8, type: "spring" },
                    }}
                    whileTap={{ rotate: -20, scale: 0.8 }}
                    className="h-14 w-14 xl:h-20 xl:w-20 text-2xl  :text-4xl flex items-center justify-center rounded-full bg-lightGreen text-green "
                  >
                    <SiAdobexd />
                  </motion.div>
          </li>
          <li>
          <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.8, type: "spring" },
                    }}
                    whileTap={{ rotate: -20, scale: 0.8 }}
                    className="h-14 w-14 xl:h-20 xl:w-20 text-2xl  :text-4xl flex items-center justify-center rounded-full bg-lightGreen text-green "
                  >
                    <SiTypescript />
                  </motion.div>
          </li>
          <li>
          <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.8, type: "spring" },
                    }}
                    whileTap={{ rotate: -20, scale: 0.8 }}
                    className="h-14 w-14 xl:h-20 xl:w-20 text-2xl  :text-4xl flex items-center justify-center rounded-full bg-lightGreen text-green "
                  >
                    <SiJavascript />
                  </motion.div>
          </li>
          <li>
          <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.8, type: "spring" },
                    }}
                    whileTap={{ rotate: -20, scale: 0.8 }}
                    className="h-14 w-14 xl:h-20 xl:w-20 text-2xl  :text-4xl flex items-center justify-center rounded-full bg-lightGreen text-green "
                  >
                    <SiTailwindcss />
                  </motion.div>
          </li>
          <li>
          <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.1,
                      transition: { duration: 0.8, type: "spring" },
                    }}
                    whileTap={{ rotate: -20, scale: 0.8 }}
                    className="h-14 w-14 xl:h-20 xl:w-20 text-2xl  :text-4xl flex items-center justify-center rounded-full bg-lightGreen text-green "
                  >
                    <TbBrandFramerMotion />
                  </motion.div>
          </li>
        </ul>

        <Image className="profileImg" src={profileImg} />
      </div>
    </div>
  );
}

export default ProfileCircle;

"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import {
  wordVariants,
  lettersVariants,
  linksVariants,
} from "../animations/textAnimations";
import { socialVariants } from "../animations/svgAnimations";
import { Links } from "@/public/aboutContent";
import Image from "next/image";
import Logo from "public/Images/Logo.svg";


export default function NavBar() {
  return (
    <div className="h-14 flex flex-row justify-between items-center px-14">
      <motion.div
            className="h-full w-14 flex flex-col justify-start items-center transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg"
            variants={socialVariants}
            initial="hidden"
            animate="visible"
            whileTap={{ scale: 0.9 }}
          >
            
            <div className="relative h-full w-full">
            <Link href="/">
              <Image alt="logo" src={Logo} fill />
              </Link>
            </div>
            <Link href="/">
            <h3 className="text-xs whitespace-nowrap	">Tomic codes</h3>
            </Link>

          </motion.div>
      <motion.div
        variants={linksVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-row justify-between items-center gap-8 text-lightGreen text-xl"
      >
               {Links.map((link, index) => {
          return (
            <Link
              key={index}
              href={link.to}
              className=" transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg "
            >
              <motion.p variants={wordVariants} whileTap={{ scale: 0.9 }}>
                {link.name.split("").map((char, index) => {
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
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}

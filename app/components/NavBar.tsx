"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import {
  wordVariants,
  lettersVariants,
  linksVariants,
} from "../animations/textAnimations";
import { socialVariants } from "../animations/svgAnimations";
import { Links } from "@/public/content";

export default function NavBar() {
  return (
    <div className="h-14 flex flex-row justify-between items-center px-14">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M9 7c-3 0 -4 3 -4 5.5c0 3 2 7.5 4 7.5c1.088 -.046 1.679 -.5 3 -.5c1.312 0 1.5 .5 3 .5s4 -3 4 -5c-.028 -.01 -2.472 -.403 -2.5 -3c-.019 -2.17 2.416 -2.954 2.5 -3c-1.023 -1.492 -2.951 -1.963 -3.5 -2c-1.433 -.111 -2.83 1 -3.5 1c-.68 0 -1.9 -1 -3 -1z" />
          <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" />
        </svg>
      </Link>
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

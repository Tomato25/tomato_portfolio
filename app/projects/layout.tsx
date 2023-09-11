"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import {
  lettersVariants,
  linksVariants,
  wordVariants,
} from "../animations/textAnimations";
import { Links } from "@/public/aboutContent";
import { socialVariants } from "../animations/svgAnimations";

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="bg-bg1 flex flex-col min-h-fit">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar flex justify-between bg-bg1">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="lg:flex-1 lg:pl-8 pr-8 lg:pr-0 ">
              <motion.div
                variants={socialVariants}
                initial="hidden"
                animate="visible"
                className="relative rounded-2xl"
                whileTap={{ scale: 0.9 }}
                whileHover={{
                  scale:1.1,
                  backgroundColor: "rgb(173 230 185 0.75)",
                  color: "rgb(0 61 43)",
                  transition: { duration: 0.3 },
                }}
              >
                <Link href="/">
                  <motion.h2 className="rounded-2xl px-2 py-1 text-xl  whitespace-nowrap">
                    Home
                  </motion.h2>
                </Link>
              </motion.div>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal flex flex-row justify-between items-center gap-8 text-lightGreen text-xl pr-8">
                {Links.map((link, index) => {
                  return (
                    <li>
                      <Link key={index} href={link.to}>
                        <motion.p
                          variants={wordVariants}
                          whileTap={{ scale: 0.9 }}
                          whileHover={{
                            scale:1.1,
                            backgroundColor: "rgb(173 230 185 0.75)",
                            color: "rgb(0 61 43)",
                            transition: { duration: 0.3 },
                          }}
                          className="rounded-2xl px-2 py-1"
                        >
                          {link.name}
                        </motion.p>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <motion.ul
            variants={socialVariants}
            initial="hidden"
            animate="visible"
            className="menu w-80 bg-green flex flex-col justify-center items-center gap-24"
          >
            <AnimatePresence>
              {Links.map((link, index) => {
                return (
                  <Link
                    key={index}
                    href={link.to}
                    className=" text-2xl z-10"
                  >
                    <motion.p
                      variants={wordVariants}
                      whileTap={{ scale: 0.9 }}
                      whileHover={{
                        backgroundColor: "rgb(173 230 185 0.75)",
                        color: "rgb(0 61 43)",
                        transition: { duration: 0.3 },
                      }}
                      className="rounded-2xl px-2 py-1"
                      exit={{ opacity: 0, y: -20 }}
                    >
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
            </AnimatePresence>
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

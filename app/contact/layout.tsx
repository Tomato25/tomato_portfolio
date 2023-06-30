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
import Image from "next/image";
import Logo from "public/Images/Logo.svg";
import { usePathname } from "next/navigation";
import MenuParticlesBackground from "../components/MenuParticlesBackground";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();
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
            className="pr-2  transform transition-all svg-shadow hover:scale-110 hover:svg-shadow-lg"
            variants={socialVariants}
            initial="hidden"
            animate="visible"
            whileTap={{ scale: 0.9 }}
          >
            
            <div className="relative h-full w-full">
            <Link href="/">
            <h3 className="text-lg whitespace-nowrap">Tomic Codes</h3>
            </Link>

            </div>

          </motion.div>
          </div>
            <div className="flex-none hidden lg:block">
              <ul
                className="menu menu-horizontal flex flex-row justify-between items-center gap-8 text-lightGreen text-xl pr-8"

              >

                {Links.map((link, index) => {
                  return (
                    <li>
                    <Link
                      key={index}
                      href={link.to}
                      className="hover-underline-animation hover-underline-animation transform transition-all svg-shadow "
                    >
                      <motion.p
                        variants={wordVariants}
                        whileTap={{ scale: 0.9 }}
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
          <motion.ul  variants={socialVariants}
            initial="hidden"
            animate="visible"
           className="menu w-80 bg-green flex flex-col justify-center items-center gap-24">
            <MenuParticlesBackground />
            <AnimatePresence>
          {Links.map((link, index) => {
                  return (
                    <Link
                      key={index}
                      href={link.to}
                      className=" transform transition-all svg-shadow text-2xl z-10"
                    >
                      <motion.p
                        variants={wordVariants}
                        whileTap={{ scale: 0.9 }}
                        exit={{opacity:0, y:-20}}
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

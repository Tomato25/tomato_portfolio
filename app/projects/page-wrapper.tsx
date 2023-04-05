"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode,useEffect } from "react";
import { pageVariants } from "../animations/pageAnimations";
import {usePathname} from "next/navigation"

interface MyProps {
    children?: ReactNode;
    params?: string
 }



export default function  PageWrapper({children} : MyProps) {


    
    const path = usePathname();
    console.log(path)

    useEffect(() => {
        // some browsers (like safari) may require a timeout to delay calling this
        // function after a page has loaded; otherwise, it may not update the position
        window.scrollTo(0, 0);
      }, [path]);

  return (
    <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
    <motion.div variants={pageVariants} initial="hidden" animate="visible" exit={{opacity:1, y: "0%"}}  key={path} >
        {children}
    </motion.div>
    </AnimatePresence>
  )
}

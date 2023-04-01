"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import { pageVariants } from "../animations/pageAnimations";


interface MyProps {
    children?: ReactNode;
    params?: string
 }


export const PageWrapper = ({children} : MyProps) => (

    <>
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}
>
    <motion.div  variants={pageVariants} initial="hidden" animate="visible" exit={{opacity:0, x:-200}}>
        {children}
    </motion.div>
    </AnimatePresence>
    </>
)
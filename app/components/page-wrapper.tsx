"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode,useEffect } from "react";
import { pageVariants } from "../animations/pageAnimations";
import {usePathname} from "next/navigation"
import { duration } from "@mui/material";
import { RecoilRoot } from "recoil";

interface MyProps {
    children?: ReactNode;
    params?: string
 }



export default function  PageWrapper({children} : MyProps) {


    const path = usePathname();

    useEffect(() => {
        // some browsers (like safari) may require a timeout to delay calling this
        // function after a page has loaded; otherwise, it may not update the position
        window.scrollTo(0, 0);
      }, [path]);

  return (
    <motion.div>
      <RecoilRoot>
      <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
        {children}
      </AnimatePresence>
      </RecoilRoot>

    </motion.div>
  )
}

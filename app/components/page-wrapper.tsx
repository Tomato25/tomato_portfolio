"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { RecoilRoot } from "recoil";
import {BounceLoader} from "react-spinners"
import dynamic from "next/dynamic";


interface MyProps {
  children?: ReactNode;
  params?: string;
}

export default function PageWrapper({ children }: MyProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const path = usePathname();

  const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
    ssr: false,
  });

  useEffect(() => {
    // some browsers (like safari) may require a timeout to delay calling this
    // function after a page has loaded; otherwise, it may not update the position
    window.scrollTo(0, 0);
  }, [path]);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <>
      {isHydrated ? (
        <motion.div className="scrollbar-hide">
          <RecoilRoot>
            <AnimatePresence onExitComplete={() => window.scrollTo(0, 0)}>
            <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        showSystemCursor={false}
        innerStyle={{
          backgroundColor: "#ADE6B9",
        }}
        outerStyle={{
          border: "3px solid #ADE6B9",
        }}
        clickables={[  
          'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link',       
           { target: '.custom',
            }         
        ]}
      />
              {children}
            </AnimatePresence>
          </RecoilRoot>
        </motion.div>
      ) : (
        <div className="h-screen w-screen flex justify-center items-center">
          <h2><BounceLoader size={100} color="#DDACE6" /></h2>
        </div>
      )}
    </>
  );
}

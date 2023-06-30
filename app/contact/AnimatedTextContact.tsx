import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { animatedTextVariant } from "../animations/homeAnimations";

const sentences = [
  "sdadsA",
  "Frontend developer",
  "Feel free to browse the website",
];


const AnimatedTextContact = () => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setCurrentSentenceIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % sentences.length;
          if (nextIndex === 0) {
            setIsComplete(true);
          }
          return nextIndex;
        });
      }, 3500);
  
      return () => clearTimeout(timer);
    }, [currentSentenceIndex]);
  
  return (
    <motion.div variants={animatedTextVariant} initial="hidden" animate="visible" className="flex items-center justify-center mt-10">
      <AnimatePresence mode="wait" >
      {!isComplete && (
        <motion.h1
          key={currentSentenceIndex}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration: 0.5 }}
          exit={{ opacity: 0, y: 50 }}
          className="text-2xl font-bold overflow-hidden text-center"
        >
          {sentences[currentSentenceIndex]}
        </motion.h1>
      )}
      </AnimatePresence>
    </motion.div>
  );
};

export default AnimatedTextContact;

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ImagesVariants } from "../projects/animations";
import { wrap } from "popmotion";

interface CarouselProps {
  images: string[];
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
 


export default function Carousel({ images }: CarouselProps) {
  const [[page, direction], setPage] = useState([0, 0]);

  
  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };



  return (
    <div className="carousel w-600 h-600">
      <div className="carousel-item relative w-full flex flex-row justify-center py-10">
        <AnimatePresence  initial={false} custom={direction}><motion.img
         key={page}
         custom={direction}
         variants={ImagesVariants}
         initial="enter"
         animate="center"
         exit="exit"
         transition={{
           x: { type: "linear", duration: 0.5 },
           opacity: { duration: 0.2 }
         }}
         drag="x"
         dragConstraints={{ left: 0, right: 0 }}
         dragElastic={1}
         onDragEnd={(e, { offset, velocity }) => {
           const swipe = swipePower(offset.x, velocity.x);

           
           if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
          src={images[imageIndex]}
          className="h-full rounded-lg shadow-xl shadow-slate-900"
        />
        </AnimatePresence>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={() => paginate(-1)} className="text-4xl text-shadow">
            <svg
              className=" transform transition-all svg-shadow hover:scale-125 hover:svg-shadow-lg"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ADE6B9"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="15 6 9 12 15 18" />
            </svg>
          </button>
          <button onClick={() => paginate(1)} className="text-4xl ">
            <svg
              className=" transform transition-all svg-shadow hover:scale-125 hover:svg-shadow-lg"
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ADE6B9"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 6 15 12 9 18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

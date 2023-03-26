import { useState } from "react";
import Image from "next/image";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextIndex = (currentIndex + 1) % images.length;
  const previousIndex = (currentIndex + images.length - 1) % images.length;

  const nextImage = () => {
    setCurrentIndex(nextIndex);
  };

  const previousImage = () => {
    setCurrentIndex(previousIndex);
  };

  return (
    <div className="carousel w-600 h-600">
      <div className="carousel-item relative w-full flex flex-row justify-center py-10">
        <img
          src={images[currentIndex]}
          className="h-full rounded-lg shadow-xl shadow-slate-900"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={previousImage} className="text-4xl text-shadow">
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
          <button onClick={nextImage} className="text-4xl ">
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

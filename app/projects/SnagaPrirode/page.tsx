"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";

type ImageData = {
  id: number;
  src: string;
};

const images: ImageData[] = [
  { id: 1, src: "/Images/SnagaPrirode/screen01.png" },
  { id: 2, src: "/Images/SnagaPrirode/screen2.png" },
  { id: 3, src: "/Images/SnagaPrirode/screen3.png" },
  { id: 4, src: "/Images/SnagaPrirode/screen4.png" },
  { id: 5, src: "/Images/SnagaPrirode/screen5.png" },
];

export default function SnagaPrirode() {
  const [currentImage, setCurrentImage] = useState<number>(0);

  const prevImage = (): void => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (): void => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="h-screen">
      <div className="relative overflow-hidden h-screen  w-screen">
        <div className="absolute inset-1/2 z-10 flex items-center justify-center h-1/2  w-1/2">
          <Image
            src={images[currentImage].src}
            alt={`Image ${currentImage}`}
            fill={true}
            quality={100}
            
          />
        </div>
        <div className="absolute inset-y-0 left-0 z-10 flex items-center justify-center">
          <button
            className="p-2 text-white bg-black bg-opacity-50 rounded-full focus:outline-none"
            onClick={prevImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 z-10 flex items-center justify-center">
          <button
            className="p-2 text-white bg-black bg-opacity-50 rounded-full focus:outline-none"
            onClick={nextImage}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 z-0 flex items-center justify-center space-x-8">
          {images.map((image: ImageData, index: number) => (
            <div
              key={image.id}
              className={`w-1/2 h-1/2 transform transition-all duration-500 ease-in-out ${
                index === currentImage
                  ? "scale-100"
                  : index < currentImage
                  ? "-translate-x-20 scale-75 opacity-50"
                  : "translate-x-20 scale-75 opacity-50"
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <Image
                src={image.src}
                alt={`Image ${index}`}
                width={500}
                height={500}
                quality={100}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

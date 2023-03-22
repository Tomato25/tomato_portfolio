import { useState } from 'react';
import Image from 'next/image';

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
    <div className="relative w-2/3 h-4/5">
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white rounded-l-lg px-4 py-2 hover:bg-gray-600 focus:outline-none"
        onClick={previousImage}
      >
        Previous
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white rounded-r-lg px-4 py-2 hover:bg-gray-600 focus:outline-none"
        onClick={nextImage}
      > 
        Next
      </button>
      <div className="flex flex-row justify-center items-center">
      
        <div className="w-2/3 ">
          <Image
            className="mx-auto  shadow-large"
            src={images[currentIndex]}
            alt={`Image ${currentIndex}`}
            width={800}
            height={500}
          />    
        </div>
    </div>
    </div>
  );
}
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

    <div className="carousel w-600 h-500">
    <div className="carousel-item relative w-full flex flex-row justify-center py-10">
      <img src={images[currentIndex]} className="h-full rounded-lg shadow-xl shadow-slate-900" />
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button onClick={previousImage} className="text-4xl text-shadow">❮</button> 
        <button onClick={nextImage} className="text-4xl">❯</button>
      </div>
    </div> 
    
    </div>
  );
}
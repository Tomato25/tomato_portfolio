import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { useChechuContext } from "../projects/contexts/ChechuContext";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { gridItemVariants, gridVariants } from "../projects/animations";
import ReactModal from "react-modal";
import { socialVariants } from "../animations/svgAnimations";
import { TfiMoreAlt } from "react-icons/tfi";

interface Image {
  src: string;
  alt: string;
}

interface Props {
  images: Image[];
  function: Function;
  toggle: boolean;
}

export default function SSRMasonry(props: Props) {
  const carouselToggle = props.toggle;
  const setCarouselToggle = props.function;
  const itemData = props.images;

  const [overlayStates, setOverlayStates] = useState(
    Array(itemData.length).fill(false)
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState("");
  const [carouselImages, setCarouselImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = carouselImages.length;

  const handleImageClick = (img: string, images: string[]) => {
    setIsModalOpen(true);
    setEnlargedImage(img);
    setCarouselImages(images);
    setCurrentIndex(images.indexOf(img));
  };

  const handleNextImage = () => {
    const nextIndex = (currentIndex + 1) % totalImages;
    setEnlargedImage(carouselImages[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handlePrevImage = () => {
    const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
    setEnlargedImage(carouselImages[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEnlargedImage("");
    setCarouselImages([]);
    setCurrentIndex(0);
  };

  return (
    <Box
      sx={{ minwidth: 500, minHeight: 393 }}
      className="w-full flex flex-col justify-center"
    >
      <motion.button
        variants={socialVariants}
        initial="hidden"
        animate="visible"
        className="mb-8 mx-auto"
        onClick={() => setCarouselToggle(!carouselToggle)}
      >
        {" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" transform transition-all svg-shadow hover:scale-125 hover:svg-shadow-lg"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#ADE6B9"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </motion.button>
      <Masonry
        columns={3}
        spacing={5}
        defaultHeight={700}
        defaultColumns={3}
        defaultSpacing={10}
        component={motion.div}
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {itemData.map((item: Image, index: number) => (
          <motion.div
            key={index}
            variants={gridItemVariants}
            onMouseEnter={() => {
              const newStates = [...overlayStates];
              newStates[index] = true;
              setOverlayStates(newStates);
            }}
            onMouseLeave={() => {
              const newStates = [...overlayStates];
              newStates[index] = false;
              setOverlayStates(newStates);
            }}
            className="relative"
          >
            <img
              className="rounded-lg transform transition-all svg-shadow hover:scale-105 cursor-pointer"
              src={`${item.src}?w=162&auto=format`}
              srcSet={`${item.src}?w=162&auto=format&dpr=2 2x`}
              alt={item.alt}
              loading="lazy"
              onClick={() =>
                handleImageClick(
                  item.src,
                  itemData.map((i) => i.src)
                )
              }
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />
            {overlayStates[index] && (
              <motion.div
                onClick={() =>
                  handleImageClick(
                    item.src,
                    itemData.map((i) => i.src)
                  )
                }
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-2xl rounded-lg  absolute inset-0 bg-gray-800 bg-opacity-70 flex flex-col justify-center items-center transition-opacity"
              >
                <h1 className="cursor-pointer ">Check out more</h1>
                <TfiMoreAlt className="cursor-pointer text-4xl" />
              </motion.div>
            )}
            <ReactModal
              isOpen={isModalOpen}
              contentLabel="Minimal Modal Example"
              className="Modal"
              overlayClassName="Overlay"
            >
              <motion.div className="flex flex-col justify-between items-center">
                <button
                  className="self-end pr-10 pt-4"
                  onClick={() => closeModal()}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className=" transform transition-all svg-shadow hover:scale-125 hover:svg-shadow-lg"
                    width="44"
                    height="44"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#ADE6B9"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
                <div className="flex flex-row justify-between items-center gap-16">
                  <button onClick={() => handlePrevImage()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" transform transition-all svg-shadow hover:scale-125 hover:svg-shadow-lg"
                      width="44"
                      height="44"
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
                  <img
                    src={enlargedImage}
                    alt={item.alt}
                    style={{ maxWidth: "auto", height: "90vh" }}
                    className="rounded-2xl"
                  />
                  <button onClick={() => handleNextImage()}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" transform transition-all svg-shadow hover:scale-125 hover:svg-shadow-lg"
                      width="44"
                      height="44"
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
              </motion.div>
            </ReactModal>
          </motion.div>
        ))}
      </Masonry>
    </Box>
  );
}

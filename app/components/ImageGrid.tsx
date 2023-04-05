import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import image from "public/Images/SnagaPrirode/screen1.png";
import { useContext } from "../projects/carouselContext";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { gridItemVariants, gridVariants } from "../projects/animations";
import ReactModal from "react-modal";
import { socialVariants } from "../animations/svgAnimations";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const imageUrl = [
  "/Images/SnagaPrirode/screen1.png",
  "/Images/SnagaPrirode/screen2.png",
  "/Images/SnagaPrirode/screen3.png",
];

const itemData = [
  {
    img: "/Images/SnagaPrirode/screen1.png",
    title: "Fern",
  },
  {
    img: "/Images/SnagaPrirode/screen2.png",
    title: "Snacks",
  },
  {
    img: "/Images/SnagaPrirode/screen3.png",
    title: "Mushrooms",
  },
  {
    img: "/Images/SnagaPrirode/screen4.png",
    title: "Tower",
  },
  {
    img: "/Images/SnagaPrirode/screen5.png",
    title: "Sea star",
  },
];

export default function SSRMasonry() {
  const { carouselToggle, setCarouselToggle } = useContext();

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
    <Box sx={{ minwidth: 500, minHeight: 393 }} className="w-full flex flex-col justify-center">
      <motion.button variants={socialVariants} initial="hidden" animate="visible" className="mb-8 mx-auto" onClick={() => setCarouselToggle(!carouselToggle)}>
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
        defaultHeight={500}
        defaultColumns={3}
        defaultSpacing={10}
        component={motion.div}
        variants={gridVariants}
        initial="hidden"
        animate="visible"
      >
        {itemData.map((item, index) => (
          <motion.div key={index} variants={gridItemVariants}>
            <img
              className="rounded-lg"
              src={`${item.img}?w=162&auto=format`}
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={() =>
                handleImageClick(
                  item.img,
                  itemData.map((i) => i.img)
                )
              }
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: "block",
                width: "100%",
              }}
            />

            <ReactModal
              isOpen={isModalOpen}
              contentLabel="Minimal Modal Example"
              className="Modal"
              overlayClassName="Overlay"
            >
              <motion.div className="flex flex-col justify-between items-center" >
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
                    alt={item.title}
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

"use client";

import { modalState } from "@/atoms/projectAtom";
import { motion } from "framer-motion";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useRecoilState } from "recoil";
import { projects } from "@/public/projectsContent";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";
import { HiExternalLink } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

function ProjectModal() {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  const project = projects.find((project) => project.id === modalOpen);

  console.log(project);

  return (
    <>
    <motion.div
      initial={{ opacity: 0, y: 800 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      exit={{ opacity: 0 }}
      className="fixed w-full h-screen left-0 top-0 text-pink flex font-poppins flex-col items-center xl:px-48 justify-start "
    >
      <div className="flex flex-row items-center p-6 w-full justify-between">
        <h1 className="md:text-4xl text-2xl  font-bold italic">
          {project?.name}
        </h1>
        <motion.button
          initial={{ opacity: 0, x: 40 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.8,
            },
          }}
          whileHover={{
            rotate: 360,
            scale: 1.1,
            transition: { duration: 0.8, type: "spring" },
          }}
          whileTap={{ rotate: -20, scale: 0.8 }}
          onClick={() => setModalOpen(null)}
          className="md:h-14 md:w-14 h-10 w-10 flex items-center justify-center rounded-full bg-pink text-green md:text-3xl text-xl cursor-pointer"
        >
          <MdOutlineKeyboardBackspace />
        </motion.button>
      </div>
      <motion.div className="flex flex-col justify-start items-center md:max-w-4xl w-full xl:max-w-full h-full">
      <div className="flex flex-row justify-center items-center gap-6 mb-6">
        <motion.a
                initial={{ opacity: 0, x: 40 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.5,
                  },
                }}
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8, type: "spring" },
                }}
                whileTap={{ rotate: -20, scale: 0.8 }}
                className="md:h-14 md:w-14 h-10 w-10 flex items-center justify-center rounded-full bg-pink text-green md:text-3xl text-xl cursor-pointer"
                href="https://github.com/Tomato25/next-ecommerce"
                target="_blank"
              >
                <FaGithubSquare />
              </motion.a>

              <motion.a
                initial={{ opacity: 0, x: 40 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: {
                    delay: 0.5,
                  },
                }}
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  transition: { duration: 0.8, type: "spring" },
                }}
                whileTap={{ rotate: -20, scale: 0.8 }}
                className="md:h-14 md:w-14 h-10 w-10 flex items-center justify-center rounded-full bg-pink text-green md:text-3xl text-xl cursor-pointer"
                href="https://next-ecommerce-roan-kappa.vercel.app/"
                target="_blank"
              >
                <HiExternalLink/>
              </motion.a>
        </div>
        <Splide
          options={{
            type: "slide",
            gap:"3rem",
            arrows: false,
            pagination: true,
            paginationDirection: "ttb",
            rewind: true,
            autoplay: true,
            pauseOnHover: true,
          }}
          className="flex justify-start items-start max-h-[600px] xl:w-2/3  w-full cursor-pointer"
        >
          {project?.images.map((image, index) => {
            return (
              <SplideSlide
                data-splide-interval="3000"
                className="flex justify-center items-center mb-4"
              >
                <img
                  src={image.src}
                  alt={image.alt}

                />
              </SplideSlide>
            );
          })}
        </Splide>

      

        <div className="flex flex-row justify-center text-3xl gap-6 mt-4 w-1/3">
          {project?.technologies.map((technology, index) => {
            return (
            <div>{technology.icon}</div>
            )
          })}
        </div>
        <div className="flex flex-col justify-start mt-8 items-start font-poppins w-3/4 ">
          <h1 className="text-pink font-semibold text-2xl mb-3">Project Description</h1>
          <p className="text-lightGreen text-lg">{project?.description.map((paragraph) => {
            return (
              <p className="mb-2">{paragraph}</p>
            )
          })}</p>
        </div>
        
      </motion.div>
    </motion.div>
    </>
  );
}

export default ProjectModal;

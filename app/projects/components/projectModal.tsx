"use client";

import { modalState } from "@/atoms/projectAtom";
import { AnimatePresence, motion } from "framer-motion";
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
    <AnimatePresence mode="wait">
    <motion.div
    key={"47"}
     initial={{ opacity: 0}}
     animate={{ opacity: 1 }}
     transition={{ duration: 0.7, ease: "easeInOut" }}
     exit={{ opacity: 0 }}
      className="w-full h-auto left-0 top-0 text-pink flex font-poppins flex-col gap-12 items-center  justify-start mb-28"
    >
      <div className="flex flex-row items-center p-6 w-full justify-between">
        <h1 className="md:text-4xl text-2xl  font-bold italic">
          {project?.name}
        </h1>
        <motion.button
        
          whileHover={{
            rotate: 360,
            scale: 1.1,
            backgroundColor:"#DDACE6",

            transition: { duration: 0.8, type: "spring" },
          }}
          whileTap={{ rotate: -20, scale: 0.8 }}
          onClick={() => setModalOpen(null)}
          className="md:h-14 md:w-14 h-10 w-10 flex items-center justify-center rounded-full bg-lightGreen text-green md:text-3xl text-xl "
        >
          <MdOutlineKeyboardBackspace />
        </motion.button>
      </div>
      <div className="flex flex-col justify-start items-center md:max-w-4xl gap-12 w-full min-h-min xl:max-w-full">
  
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
          className="flex justify-start items-start  xl:w-2/3  w-full custom"
        >
          {project?.images.map((image, index) => {
            return (
              <SplideSlide
                data-splide-interval="3000"
                className="flex justify-center items-center mb-4 overflow-hidden lg:h-[600px] h-[400]"
              >
                <Image
                  src={image.src}
                  height={800}
                  width={1000}
                  	
                  alt={image.alt}
                  className="max-h-max object-fill	"

                />
              </SplideSlide>
            );
          })}
        </Splide>

      

        <div className="flex flex-row justify-center text-3xl gap-8 mt-4 w-1/3">
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
        <div className="flex flex-row justify-center items-center gap-10 mb-6">
        <motion.a
             
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  backgroundColor:"#DDACE6",
                  transition: { duration: 0.8, type: "spring" },
                }}
                whileTap={{ rotate: -20, scale: 0.8 }}
                className="md:h-14 md:w-14 h-10 w-10 flex items-center justify-center rounded-full bg-lightGreen text-green md:text-3xl text-xl "
                href={project?.github}
                target="_blank"
              >
                <FaGithubSquare />
              </motion.a>

              <motion.a
               
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                  backgroundColor:"#DDACE6",
                  transition: { duration: 0.8, type: "spring" },
                }}
                whileTap={{ rotate: -20, scale: 0.8 }}
                className="md:h-14 md:w-14 h-10 w-10 flex items-center justify-center rounded-full bg-lightGreen text-green md:text-3xl text-xl "
                href={project?.link}
                target="_blank"
              >
                <HiExternalLink/>
              </motion.a>
        </div>
      </div>
    </motion.div>
    </AnimatePresence>
  );
}

export default ProjectModal;

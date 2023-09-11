"use client";

import { projects } from "@/public/projectsContent";
import Particlesbackground from "../components/Particlesbackground";
import { AnimatePresence, motion } from "framer-motion";
import {
  leftColItemVariants,
  leftColVariants,
  rightColItemVariants,
  rightColVariants,
} from "./animations";
import ProjectTile from "./components/ProjectTile";
import { modalState } from "@/atoms/projectAtom";
import { useRecoilState } from "recoil";
import ProjectModal from "./components/projectModal";

export default function Projects() {
  const oddElements = projects.filter((_, index) => index % 2 !== 0);
  const evenElements = projects.filter((_, index) => index % 2 === 0);
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  return (
    <>
      <Particlesbackground />
      <div className="z-10  w-screen md:max-w-4xl lg:max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {!modalOpen ? (
            <motion.div className="w-full mb-14 grid grid-cols-1 md:grid-cols-2 gap-4 justify-center mx-auto" key={"54"} exit={{opacity:0}} transition={{duration: 0.5}}>
              <motion.div
                variants={leftColVariants}
                animate="visible"
                initial="hidden"
                className="col-span-1 "
              >
                {oddElements.map((project, index) => (
                  <motion.div
                    variants={leftColItemVariants}
                    className="mb-80"
                    key={index}
                  >
                    <ProjectTile
                      name={project.name}
                      id={project.id}
                      technologies={project.technologies}
                      description={project.description}
                      images={project.images}
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={rightColVariants}
                animate="visible"
                initial="hidden"
                className="col-span-1 mt-80"
              >
                {evenElements.map((project, index) => (
                  <motion.div
                    variants={rightColItemVariants}
                    className="mb-80"
                    key={index}
                  >
                    <ProjectTile
                      name={project.name}
                      id={project.id}
                      technologies={project.technologies}
                      description={project.description}
                      images={project.images}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key={"43"}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectModal />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

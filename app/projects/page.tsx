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
      <div className="z-10 relative min-h-screen">
        <AnimatePresence mode="wait">
          {!modalOpen ? (
            <motion.div className="w-full mb-14 grid grid-cols-1 lg:grid-cols-2 lg:gap-4  justify-center mx-auto" key={"54"} exit={{opacity:0}} transition={{duration: 0.5}}>
              <motion.div
                variants={leftColVariants}
                animate="visible"
                initial="hidden"
                className="col-span-1 "
              >
                {oddElements.map((project, index) => (
                  <motion.div
                    variants={leftColItemVariants}
                    className="lg:mb-80 mb-28"
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
                className="col-span-1 "
              >
                {evenElements.map((project, index) => (
                  <motion.div
                    variants={rightColItemVariants}
                    className="lg:mt-80 mb-28"
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

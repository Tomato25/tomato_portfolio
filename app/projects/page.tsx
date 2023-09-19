"use client";

import { projects } from "@/public/projectsContent";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import {
  leftColItemVariants,
  leftColVariants,
  rightColItemVariants,
  rightColVariants,
} from "./animations";
import ProjectTile from "./components/ProjectTile";
import { modalState } from "@/atoms/projectAtom";
import { useRecoilState } from "recoil";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import ProjectModal from "./components/projectModal";

export default function Projects() {
  const oddElements = projects.filter((_, index) => index % 2 !== 0);
  const evenElements = projects.filter((_, index) => index % 2 === 0);
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  const controls = useAnimation();
  const [ref, inView] = useInView({threshold: 0.3});
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <div className="z-10 relative min-h-screen w-screen sm:max-w-6xl xl:max-w-screen-2xl md:px-16  mt-20 mx-auto">
        <AnimatePresence mode="wait">
          {!modalOpen ? (
            <motion.div
              className="w-full  grid grid-cols-1 lg:grid-cols-2 lg:gap-4  justify-center mx-auto"
              key={"54"}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                ref={ref}
                variants={leftColVariants}
                animate={controls}
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
                      github={project.github}
                      link={project.link}
                      technologies={project.technologies}
                      description={project.description}
                      images={project.images}
                    />
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                variants={rightColVariants}
                animate={controls}
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
                      github={project.github}
                      link={project.link}
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
            >
              <ProjectModal />
            </motion.div>
          )}
          </AnimatePresence>
      </div>
    </>
  );
}

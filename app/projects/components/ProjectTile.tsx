import { modalState } from "@/atoms/projectAtom";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { IconType } from "react-icons";
import { useRecoilState } from "recoil";
import ProjectModal from "./projectModal";

interface ImageType {
  src: string;
  alt: string;
}

interface TechnologyType {
  icon: IconType;
  name: string;
}

interface PropType {
  name: string;
  id: string;
  link: string,
  github: string,
  description: string[];
  images: ImageType[];
  technologies: TechnologyType[];
}

function ProjectTile({
  name,
  id,
  link,
  github,
  description,
  images,
  technologies,
}: PropType) {
  const [modalOpen, setModalOpen] = useRecoilState(modalState);

  function openModal() {
    setModalOpen(id);
  }

  return (

        <>
          <motion.div key={id} exit={{opacity:0}} transition={{duration: 0.5}} className="w-3/4 mx-auto flex flex-col items-center justify-center">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              width={600}
              height={600}
              className="rounded-md custom"
              onClick={() => openModal()}
            />
          </motion.div>
          <h1
            className="text-md text-pink md:text-2xl mt-3 font-bold font-poppins self-start pl-12 custom"
            onClick={() => openModal()}
          >
            {name}
          </h1>
          <p className="px-12 pt-4">{description[0]}</p>
        </>

  );
}

export default ProjectTile;

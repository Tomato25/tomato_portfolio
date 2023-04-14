import * as React from "react";
import { useState } from "react";
import ReactModal from "react-modal";
import { motion } from "framer-motion";

export default function InitialModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ReactModal
      isOpen={isModalOpen}
      contentLabel="Minimal Modal Example"
      className="InitialModal"
      overlayClassName="InitialModalOverlay"
    >
      <motion.div className="flex flex-col justify-between items-center">
        <button className="self-end pr-4 lg:pr-10 pt-4 text-xs" onClick={() => closeModal()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" transform transition-all svg-shadow hover:scale-125"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#003D2B"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <div className="flex flex-col justify-around mt-8 items-center gap-10">
          <h1 className="text-green text-sm  lg:text-xl align-middle mx-auto text-center">
            Website is still under construction!
          </h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-crane"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="#003D2B"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 21h6" />
            <path d="M9 21v-18l-6 6h18" />
            <path d="M9 3l10 6" />
            <path d="M17 9v4a2 2 0 1 1 -2 2" />
          </svg>
        </div>
      </motion.div>
    </ReactModal>
  );
}

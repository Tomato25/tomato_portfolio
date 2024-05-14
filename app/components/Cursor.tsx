"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");


  useEffect(() => {
    const mouseMove = (e: { clientX: number; clientY: number }) => {
      setMousePosition({
        x: e.clientX - 16,
        y: e.clientY - 16,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
        x:mousePosition.x,
        y:mousePosition.y,

    }
  }

  return (
    <motion.div variants={variants} animate={cursorVariant}  className="bg-lightGreen h-6 w-6 rounded-full fixed top-0 left-0 z-20"></motion.div>
  );
}

export default Cursor;

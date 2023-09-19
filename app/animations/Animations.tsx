export const paragraphVariants = {
    hidden: { opacity: 0, x: -200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.5,
      },
    },
  };

  export const documentIconVariants = {
    hidden: { opacity: 0, x: 200 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
      },
    },
  };



export const iconContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delayChildren: 1,
        staggerChildren: 0.5,
      },
    },
  };

export const dotsVariants = {
    hidden: {scale: 0, opacity:0},
    visible: {
        scale:1,
        opacity:1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.05,
      },
    },
}


export const iconContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

export const iconVariants = {
  hidden: {
    opacity: 0, scale: 0, rotate: 45
  },
  visible: {
    opacity: 1,
    scale:1,
    rotate: 0,
    transition: {
      delay:1.2
    },
  },
};


export const cardVariants = {
    hidden: { opacity: 0, scale:0 },
    visible: {
      opacity: 1,
      scale:1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4,
      },
    },
  };

  
export const cardTextVariants = {
    hidden: { opacity: 0, scale:0 },
    visible: {
      opacity: 1,
      scale:1,
    },
  };


  export const sectionTitleVariants = {
    hidden: {opacity:0, x:-30},
    visible: {
        opacity:1,
         x:0,
      transition: {
        delay:0.5
      },
    },
  };
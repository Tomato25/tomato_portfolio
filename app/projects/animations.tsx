export const imageVariants = {
    hidden: {
      opacity: 0,
      x: -300
    },
    visible: {
     x: 0,
      opacity: 1,
      transition: {
        delay:1,
        duration: 0.5,
        x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.3 }
      },
    },
  };
  
  export const ImagesVariants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 2000 : -2000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 2000 : -2000,
        opacity: 0
      };
    }
  };


export const titleVariants = {
      hidden: {},
      visible: {
        transition:{
          staggerChildren:0.3
        }
      }
  }

  
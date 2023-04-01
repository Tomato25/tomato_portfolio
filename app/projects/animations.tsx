export const imageVariants = {
    hidden: {
      opacity: 0,
      y: 300
    },
    visible: {
     y: 0,
      opacity: 1,
      transition: {
        delay:0.5,
        duration: 1,
        y: { type: "spring", stiffness: 300, damping: 30 },
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



  export const gridVariants ={
    hidden:{},
    visible:{
      transition:{
        staggerChildren:0.5
      }
    }
  }
  

  export const gridItemVariants ={
    hidden:{opacity:0},
    visible:{opacity:1,
      transition:{
        duration:1
      }
    }
  }
  
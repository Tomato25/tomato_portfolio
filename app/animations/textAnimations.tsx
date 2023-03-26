
export const linksVariants ={
    hidden: { },
    visible: {
      transition: {
        staggerChildren: 1.2,
      },
    },
}

export const wordVariants = {
    hidden: { },
    visible: {
      transition: {
        delayChildren:1,
        staggerChildren: 0.15,
      },
    },
  };
  
  export const lettersVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration:0.01
      }
    },
  };

  export const paraVariants ={
    hidden: { },
    visible: {
      transition: {
        staggerChildren: 5,
      },
    },
}

export const paraWordVariants = {
    hidden: { },
    visible: {
      transition: {
        delayChildren:1,
        staggerChildren: 0.05,
      },
    },
  };


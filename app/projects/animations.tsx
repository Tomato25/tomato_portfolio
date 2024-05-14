
  export const leftColVariants ={
    hidden:{},
    visible:{
      transition:{
        staggerChildren:0.6
      }
    }
  }
  

  export const leftColItemVariants ={
    hidden:{opacity:0, x:-200},
    visible:{opacity:1, x:0,
      transition:{
        duration:0.5
      }
    }
  }

  export const rightColVariants ={
    hidden:{},
    visible:{
      transition:{
        delayChildren:0.3,
        staggerChildren:0.6
      }
    }
  }
  

  export const  rightColItemVariants ={
    hidden:{opacity:0, x:200},
    visible:{opacity:1, x:0,
      transition:{
        duration:0.5
      }
    }
  }


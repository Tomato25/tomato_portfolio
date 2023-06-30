export const socialVariants = {
    hidden: {
        opacity:0,
        y: 50
    },
    visible: {
        opacity:1,
        y: 0,
        transition:{
            delay:1,
            duration:0.5
        }
    }
}
export const NavVariants = {
    hidden: {
        opacity:0,
        y: -50
    },
    visible: {
        opacity:1,
        y: 0,
        transition:{
            delay:1,
            duration:0.5
        }
    }
}

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

export const menuVariants = {
    hidden: {},
    visible: {
      transition: {
        duration: 1,
        delayChildren: 1,
        staggerChildren: 1,
      },
    },
}
    
export const menuItemVariants = {
        hidden: {
            opacity: 0,
            scale: 0,
            rotate: 35
        },
        visible: {
            opacity: 1,
            scale: 1,
            rotate: 0,
          transition: {
            duration: 0.5,
          },
        },
    }


export const animatedTextVariant = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,

        transition:{
            delay:2,
            delayChildren:1
        }
    }
}
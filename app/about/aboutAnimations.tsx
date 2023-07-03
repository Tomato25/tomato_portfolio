export const sectionTitleVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.5,
    },
  },
};

export const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      staggerChildren: 0.5,
    },
  },
};

export const sectionVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
    },
  },
};

export const paraVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      staggerChildren: 0.5,
    },
  },
};

export const ulVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 4,
      staggerChildren: 1,
    },
  },
};

export const liVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {},
  },
};

export const subtitleVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
};

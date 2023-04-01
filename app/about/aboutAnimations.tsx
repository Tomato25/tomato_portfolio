export const sectionTitleVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};
export const paraVariants = {
  hidden: {},
  visible: {
    transition: {
      delay: 3,
      staggerChildren: 3,
    },
  },
};

export const paraWordVariants = {
  hidden: {},
  visible: {
    transition: {
      delay: 2,
      delayChildren: 1,
      staggerChildren: 0.015,
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
    x: 100,
    transition: {
    },
  },
};

export const subtitleVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.2,
    },
  },
};

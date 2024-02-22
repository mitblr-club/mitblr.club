export const confirmVariants = {
  hidden: {
    x: '100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

export const containerVariants = {
  hidden: (direction: number) => {
    return direction > 0
      ? { x: '100vh', opacity: 0 }
      : {
          scale: 0,
          opacity: 0,
        };
  },

  visible: (direction: number) => {
    return direction > 0
      ? { x: 0, opacity: 1, transition: { duration: 0.4, delay: 0.2 } }
      : {
          scale: 1,
          opacity: 1,
          transition: { duration: 0.4, delay: 0.2 },
        };
  },

  exit: (direction: number) => {
    return direction > 0
      ? { scale: 1.2, opacity: 0, transition: { ease: 'easeInOut' } }
      : {
          x: '100vw',
          opacity: 0,
          transition: { ease: 'easeInOut' },
        };
  },
};

export const firstStepVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },

  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.4, delay: 0.2 },
  },
  exit: {
    scale: 0.75,
    opacity: 0,
    transition: { ease: 'easeInOut' },
  },
};

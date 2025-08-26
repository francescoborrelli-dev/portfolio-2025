export const easing = [0.22, 1, 0.36, 1] as const

export const pageTransition = {
  initial: { opacity: 0, y: 12 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.35, ease: easing }
  },
  exit: { 
    opacity: 0, 
    y: -12,
    transition: { duration: 0.35, ease: easing }
  },
}

export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: easing }
  },
}

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

export const heroText = {
  initial: {
    y: 24,
    opacity: 0,
    clipPath: 'inset(0 0 100% 0)',
  },
  animate: {
    y: 0,
    opacity: 1,
    clipPath: 'inset(0 0 0% 0)',
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: easing }
  },
}

export const slideInFromLeft = {
  initial: { opacity: 0, x: -24 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: easing }
  },
}

export const slideInFromRight = {
  initial: { opacity: 0, x: 24 },
  animate: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: easing }
  },
}

export const hoverLift = {
  scale: 1.02,
  y: -2,
  transition: { duration: 0.2, ease: easing },
}

export const hoverTilt = {
  rotateX: 2,
  rotateY: 2,
  scale: 1.02,
  transition: { duration: 0.2, ease: easing },
}

export const accordionVariants = {
  open: {
    height: 'auto',
    opacity: 1,
    transition: {
      height: { duration: 0.3, ease: easing },
      opacity: { duration: 0.2, delay: 0.1 },
    },
  },
  closed: {
    height: 0,
    opacity: 0,
    transition: {
      height: { duration: 0.3, ease: easing },
      opacity: { duration: 0.2 },
    },
  },
}

export const chevronRotate = {
  open: { 
    rotate: 180,
    transition: { duration: 0.2, ease: easing }
  },
  closed: { 
    rotate: 0,
    transition: { duration: 0.2, ease: easing }
  },
}

// ═══════════════════════════════════════════════════════════════
// ANIMATION SYSTEM - TYPESCRIPT
// Framer Motion variants for consistent motion design
// ═══════════════════════════════════════════════════════════════

import { Variants, Transition } from 'framer-motion'

// ────────────────────────────────────────────────────────────
// TIMING CONSTANTS
// ────────────────────────────────────────────────────────────
export const TIMING = {
  instant: 0,
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
  breath: 3.5,
} as const

// ────────────────────────────────────────────────────────────
// EASING CURVES
// ────────────────────────────────────────────────────────────
export const EASING = {
  smooth: [0.43, 0.13, 0.23, 0.96] as const,
  spring: { type: "spring" as const, stiffness: 100, damping: 15 },
  snappy: [0.4, 0, 0.2, 1] as const,
}

// ────────────────────────────────────────────────────────────
// FADE VARIANTS
// ────────────────────────────────────────────────────────────
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

export const fadeInTransition: Transition = {
  duration: TIMING.slow,
  ease: EASING.smooth,
}

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
}

export const fadeInUpTransition: Transition = {
  duration: TIMING.slow,
  ease: EASING.smooth,
}

export const fadeInDown: Variants = {
  initial: { opacity: 0, y: -20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

// ────────────────────────────────────────────────────────────
// STAGGER CONTAINERS
// ────────────────────────────────────────────────────────────
export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

export const staggerFast: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

export const staggerSlow: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.3,
    },
  },
}

// ────────────────────────────────────────────────────────────
// SCALE VARIANTS
// ────────────────────────────────────────────────────────────
export const scaleIn: Variants = {
  initial: { scale: 0.95, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.95, opacity: 0 },
}

export const scaleInTransition: Transition = {
  duration: TIMING.normal,
  ease: EASING.smooth,
}

// Breathing effect for sacred elements
export const breathe: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 1, 0.5],
  },
}

export const breatheTransition: Transition = {
  duration: TIMING.breath,
  repeat: Infinity,
  ease: "easeInOut",
}

// ────────────────────────────────────────────────────────────
// SLIDE VARIANTS
// ────────────────────────────────────────────────────────────
export const slideInLeft: Variants = {
  initial: { x: -50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
}

export const slideInRight: Variants = {
  initial: { x: 50, opacity: 0 },
  animate: { x: 0, opacity: 1 },
}

export const slideTransition: Transition = {
  duration: TIMING.slow,
  ease: EASING.smooth,
}

// ────────────────────────────────────────────────────────────
// VIEWPORT ANIMATION SETTINGS
// ────────────────────────────────────────────────────────────
export const viewportOptions = {
  once: true,
  amount: 0.3,
  margin: "0px 0px -100px 0px",
}

// ────────────────────────────────────────────────────────────
// HOVER VARIANTS
// ────────────────────────────────────────────────────────────
export const hoverScale: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
}

export const hoverScaleTransition: Transition = {
  duration: TIMING.fast,
  ease: EASING.snappy,
}

export const hoverGlow: Variants = {
  rest: { boxShadow: "0 0 0 0 rgba(162, 185, 212, 0)" },
  hover: { boxShadow: "0 0 20px 0 rgba(162, 185, 212, 0.3)" },
}

export const hoverGlowTransition: Transition = {
  duration: TIMING.fast,
}
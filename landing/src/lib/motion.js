/** Variantes compartidas de Framer Motion para las animaciones de scroll. */

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
}

/** Contenedor que escalona la entrada de sus hijos. */
export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

/** Config estándar para animar al entrar en viewport, una sola vez. */
export const viewportOnce = { once: true, amount: 0.25 }

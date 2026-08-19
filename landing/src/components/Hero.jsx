import { motion } from 'framer-motion'
import { calTriggerProps } from '../lib/cal'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-negro">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/hero.mp4"
        poster="/logo.jpeg"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />

      {/* Overlay para legibilidad del texto sobre el video */}
      <div className="absolute inset-0 bg-negro/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-negro/60 via-transparent to-negro" />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center px-6 py-24 text-center"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.img
          src="/logo.jpeg"
          alt="Digital Impacto"
          className="mb-10 w-40 rounded-2xl shadow-2xl sm:w-52"
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        />

        <motion.h1
          className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
          variants={{
            hidden: { opacity: 0, y: 28 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          Sistemas de Crecimiento Empresarial
        </motion.h1>

        <motion.p
          className="mt-6 max-w-2xl text-lg text-white/80 sm:text-xl"
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
          }}
        >
          Transformamos empresas en marcas que venden
        </motion.p>

        <motion.button
          type="button"
          {...calTriggerProps}
          className="mt-10 rounded-full bg-rojo px-8 py-4 text-base font-bold text-white shadow-xl shadow-rojo/30 transition-colors hover:bg-rojo/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-rojo/50 sm:text-lg"
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.5, ease: 'backOut' },
            },
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Agenda tu llamada de diagnóstico gratuita
        </motion.button>
      </motion.div>
    </section>
  )
}

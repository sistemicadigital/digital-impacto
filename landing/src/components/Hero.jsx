import { motion } from 'framer-motion'
import { calTriggerProps } from '../lib/cal'

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden bg-negro">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src="/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        // metadata en vez de auto: no bloquea la primera pintura en movil
        preload="metadata"
        aria-hidden="true"
      />

      {/* Overlay para legibilidad del texto sobre el video */}
      <div className="absolute inset-0 z-0 bg-negro/70" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-negro/60 via-transparent to-negro" />

      <motion.img
        src="/logo.jpeg"
        alt="Digital Impacto"
        className="absolute left-10 top-10 z-30 w-[50px] rounded-lg shadow-lg"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />

      <motion.div
        className="relative z-10 flex flex-1 flex-col items-center justify-center gap-10 px-6 py-28 text-center"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.picture
          className="z-10 w-full max-w-[500px]"
          variants={{
            hidden: { opacity: 0, scale: 0.92 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <source srcSet="/images/hero-showcase.webp" type="image/webp" />
          <img
            src="/images/hero-showcase.jpg"
            alt="Trabajos de Digital Impacto"
            width="1000"
            height="400"
            className="w-full rounded-2xl shadow-2xl"
          />
        </motion.picture>

        <div className="z-20 flex flex-col items-center">
          <motion.h1
            className="max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
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
        </div>
      </motion.div>
    </section>
  )
}

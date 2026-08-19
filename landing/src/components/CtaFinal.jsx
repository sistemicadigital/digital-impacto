import { motion } from 'framer-motion'
import { calTriggerProps } from '../lib/cal'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function CtaFinal() {
  return (
    <section className="bg-negro px-6 py-24 sm:py-32">
      <motion.div
        className="mx-auto max-w-2xl text-center"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.h2
          className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
          variants={fadeUp}
        >
          ¿Listo para transformar tu marca?
        </motion.h2>

        <motion.button
          type="button"
          {...calTriggerProps}
          className="mt-10 rounded-full bg-rojo px-8 py-4 text-base font-bold text-white shadow-xl shadow-rojo/30 transition-colors hover:bg-rojo/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-rojo/50 sm:text-lg"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Agenda tu llamada de diagnóstico gratuita
        </motion.button>

        <motion.p className="mt-6 text-white/60" variants={fadeUp}>
          100% remoto • Sin costo • 45 minutos
        </motion.p>
      </motion.div>
    </section>
  )
}

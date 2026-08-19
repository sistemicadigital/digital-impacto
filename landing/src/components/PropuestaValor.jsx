import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function PropuestaValor() {
  return (
    <section className="bg-gray-100 px-6 py-24 sm:py-32">
      <motion.div
        className="mx-auto max-w-3xl text-center"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.h2
          className="text-3xl font-black leading-tight tracking-tight text-negro sm:text-4xl lg:text-5xl"
          variants={fadeUp}
        >
          Tu marca debería verse diferente antes de decir que vendes
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-negro/70 sm:text-xl"
          variants={fadeUp}
        >
          Creamos estrategias digitales creativas para marcas que quieren
          destacar
        </motion.p>

        <motion.div
          className="mx-auto mt-10 h-1.5 w-24 rounded-full bg-gradiente-marca"
          variants={fadeUp}
        />
      </motion.div>
    </section>
  )
}

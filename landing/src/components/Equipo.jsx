import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'

export default function Equipo() {
  return (
    <section className="bg-negro px-6 py-24 sm:py-32">
      <motion.img
        src="/images/Equipo-digital-impacto.jpg"
        alt="Equipo de Digital Impacto"
        loading="lazy"
        className="mx-auto w-full max-w-sm rounded-2xl shadow-2xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      />
    </section>
  )
}

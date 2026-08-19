import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function Equipo() {
  return (
    <section className="bg-negro px-6 py-24 sm:py-32">
      <motion.div
        className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2 md:gap-16"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.picture variants={fadeUp} className="mx-auto w-full max-w-sm">
          <source srcSet="/images/Equipo-digital-impacto.webp" type="image/webp" />
          <img
            src="/images/Equipo-digital-impacto.jpg"
            alt="Equipo de Digital Impacto"
            width="768"
            height="1153"
            loading="lazy"
            className="w-full rounded-2xl shadow-2xl"
          />
        </motion.picture>

        <div className="text-center md:text-left">
          <motion.h2
            className="text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl"
            variants={fadeUp}
          >
            Detrás de tu marca hay personas, no una plantilla
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-white/70"
            variants={fadeUp}
          >
            Somos un equipo pequeño, y por eso siempre vas a saber con quién
            estás hablando. La misma gente que te presenta la estrategia es la
            que la ejecuta.
          </motion.p>

          <motion.div
            className="mx-auto mt-8 h-1.5 w-24 rounded-full bg-gradiente-marca md:mx-0"
            variants={fadeUp}
          />
        </div>
      </motion.div>
    </section>
  )
}

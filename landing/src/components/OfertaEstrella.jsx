import { motion } from 'framer-motion'
import { calTriggerProps } from '../lib/cal'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const INCLUYE = [
  'Estrategia digital a la medida de tu negocio',
  'Contenido profesional: imágenes, historias y carruseles',
  'Administración completa de tus redes sociales',
  'Reuniones de seguimiento para revisar resultados',
]

export default function OfertaEstrella() {
  return (
    <section className="bg-gradiente-marca px-6 py-24 sm:py-32">
      <motion.div
        className="mx-auto max-w-3xl text-center text-white"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.p
          className="text-sm font-bold uppercase tracking-[0.2em] text-white/80"
          variants={fadeUp}
        >
          Oferta estrella
        </motion.p>

        <motion.h2
          className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          variants={fadeUp}
        >
          Sistema de Crecimiento Empresarial Mensual
        </motion.h2>

        <motion.p className="mt-8" variants={fadeUp}>
          <span className="text-4xl font-black sm:text-5xl">$1.500.000</span>
          <span className="ml-2 text-lg font-semibold text-white/85">
            COP/mes
          </span>
        </motion.p>

        <motion.ul
          className="mx-auto mt-10 max-w-xl space-y-3 text-left"
          variants={stagger}
        >
          {INCLUYE.map((item) => (
            <motion.li
              key={item}
              className="flex items-start gap-3 rounded-xl bg-white/15 px-5 py-3.5 backdrop-blur-sm"
              variants={fadeUp}
            >
              <svg
                className="mt-0.5 h-5 w-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
              <span className="font-medium">{item}</span>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p className="mt-8 text-white/90" variants={fadeUp}>
          Cancelable tras el primer mes
        </motion.p>

        <motion.button
          type="button"
          {...calTriggerProps}
          className="mt-8 rounded-full bg-white px-8 py-4 text-base font-bold text-negro shadow-xl transition-colors hover:bg-white/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/60 sm:text-lg"
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          Agenda tu diagnóstico gratuito
        </motion.button>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const iconClass = 'h-7 w-7'
const iconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  className: iconClass,
}

const SERVICIOS = [
  {
    titulo: 'Estrategia',
    descripcion: 'Análisis y construcción del camino ideal para tu marca',
    icono: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="4.5" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    titulo: 'Contenido',
    descripcion: 'Imágenes, historias y carruseles profesionales',
    icono: (
      <svg {...iconProps}>
        <rect x="3" y="4" width="18" height="16" rx="2.5" />
        <circle cx="8.5" cy="9.5" r="1.8" />
        <path d="M3 16.5l4.5-4 4 3.5 3.5-3 6 5" />
      </svg>
    ),
  },
  {
    titulo: 'Publicidad y Crecimiento',
    descripcion: 'Gestión de pauta Meta y Google optimizada',
    icono: (
      <svg {...iconProps}>
        <path d="M3 17.5l6-6 4 3.5 7.5-8" />
        <path d="M15.5 7h5.5v5.5" />
        <path d="M3 21h18" />
      </svg>
    ),
  },
  {
    titulo: 'Producción Audiovisual',
    descripcion: 'Fotografía y video publicitario profesional',
    icono: (
      <svg {...iconProps}>
        <rect x="2.5" y="6.5" width="12.5" height="11" rx="2.5" />
        <path d="M15 11l6.5-3.5v9L15 13z" />
      </svg>
    ),
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          className="text-center text-3xl font-black tracking-tight text-negro sm:text-4xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          Lo que hacemos por tu marca
        </motion.h2>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          style={{ perspective: 1200 }}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {SERVICIOS.map((servicio) => (
            <motion.article
              key={servicio.titulo}
              className="group rounded-2xl border border-negro/10 bg-white p-7 shadow-sm"
              variants={fadeUp}
              whileHover={{
                rotateY: 6,
                rotateX: -3,
                y: -6,
                boxShadow: '0 24px 48px -18px rgba(26,24,24,0.35)',
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rojo/10 text-rojo">
                {servicio.icono}
              </div>
              <h3 className="mt-5 text-lg font-bold text-negro">
                {servicio.titulo}
              </h3>
              <p className="mt-2 text-negro/65">{servicio.descripcion}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

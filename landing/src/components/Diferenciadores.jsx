import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const iconProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
  className: 'h-7 w-7',
}

const DIFERENCIADORES = [
  {
    titulo: 'Atención personalizada',
    descripcion:
      'Trabajamos contigo de cerca, no eres un número más en una lista de clientes.',
    icono: (
      <svg {...iconProps}>
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    titulo: 'Resultados reales',
    descripcion:
      'Medimos crecimiento y ventas, no solo la cantidad de publicaciones.',
    icono: (
      <svg {...iconProps}>
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20H2" />
      </svg>
    ),
  },
  {
    titulo: '100% remoto para toda Colombia',
    descripcion: 'Sede en Pereira, trabajando con marcas en todo el país.',
    icono: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a15 15 0 010 18a15 15 0 010-18z" />
      </svg>
    ),
  },
  {
    titulo: 'Garantía de satisfacción',
    descripcion:
      'Si no estás conforme con el trabajo, lo resolvemos. Así de simple.',
    icono: (
      <svg {...iconProps}>
        <path d="M12 3l7.5 3v5.5c0 4.4-3.1 8.3-7.5 9.5c-4.4-1.2-7.5-5.1-7.5-9.5V6z" />
        <path d="M9 12l2 2l4-4" />
      </svg>
    ),
  },
]

export default function Diferenciadores() {
  return (
    <section className="bg-gray-100 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="text-center text-3xl font-black tracking-tight text-negro sm:text-4xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          Por qué trabajar con Digital Impacto
        </motion.h2>

        <motion.div
          className="mt-14 grid gap-6 sm:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {DIFERENCIADORES.map((item) => (
            <motion.div
              key={item.titulo}
              className="flex gap-5 rounded-2xl bg-white p-7 shadow-sm"
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rojo/10 text-rojo">
                {item.icono}
              </div>
              <div>
                <h3 className="text-lg font-bold text-negro">{item.titulo}</h3>
                <p className="mt-1.5 text-negro/65">{item.descripcion}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

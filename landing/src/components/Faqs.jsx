import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '../lib/motion'
import { FAQS } from '../data/faqs'

function Item({ pregunta, respuesta, abierta, onToggle, id }) {
  return (
    <div className="border-b border-negro/10">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={abierta}
          aria-controls={`faq-panel-${id}`}
          id={`faq-boton-${id}`}
          // min-h-[48px] asegura un area de toque comoda en movil
          className="flex min-h-[48px] w-full cursor-pointer items-center justify-between gap-4 py-5 text-left text-base font-semibold text-negro transition-colors hover:text-rojo focus:outline-none focus-visible:text-rojo sm:text-lg"
        >
          <span>{pregunta}</span>
          <motion.svg
            className="h-5 w-5 shrink-0 text-rojo"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            animate={{ rotate: abierta ? 180 : 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <path d="M6 9l6 6 6-6" />
          </motion.svg>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {abierta && (
          <motion.div
            id={`faq-panel-${id}`}
            role="region"
            aria-labelledby={`faq-boton-${id}`}
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <p className="pb-5 pr-8 leading-relaxed text-negro/70">
              {respuesta}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faqs() {
  // Un solo indice: abrir una cierra la anterior.
  const [abierta, setAbierta] = useState(null)

  return (
    <section id="faqs" className="bg-[#f9f9f9] px-6 py-12 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="text-center text-3xl font-black tracking-tight text-negro sm:text-4xl"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          Preguntas Frecuentes
        </motion.h2>

        <motion.div
          className="mt-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {FAQS.map((faq, i) => (
            <Item
              key={faq.pregunta}
              id={i}
              pregunta={faq.pregunta}
              respuesta={faq.respuesta}
              abierta={abierta === i}
              onToggle={() => setAbierta(abierta === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

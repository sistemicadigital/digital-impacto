import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const CAMPOS = [
  { name: 'nombre', label: 'Nombre', type: 'text', autoComplete: 'name' },
  { name: 'telefono', label: 'Teléfono', type: 'tel', autoComplete: 'tel' },
  { name: 'negocio', label: 'Nombre del Negocio', type: 'text' },
  {
    name: 'ciudad',
    label: 'Ciudad',
    type: 'text',
    autoComplete: 'address-level2',
  },
  {
    name: 'email',
    label: 'Correo Electrónico',
    type: 'email',
    autoComplete: 'email',
  },
]

const SERVICIOS = [
  'Estrategia',
  'Contenido',
  'Publicidad',
  'Producción',
  'Sistema Completo',
]

const ESTADO_INICIAL = {
  nombre: '',
  telefono: '',
  negocio: '',
  ciudad: '',
  email: '',
  servicio: '',
}

// text-base fija 16px: por debajo de eso iOS hace zoom al enfocar el campo.
const inputClass =
  'w-full rounded-xl border border-negro/15 bg-white px-4 py-3 text-base text-negro outline-none transition focus:border-rojo focus:ring-2 focus:ring-rojo/25'

export default function FormularioLeads() {
  const [datos, setDatos] = useState(ESTADO_INICIAL)
  const [estado, setEstado] = useState('idle') // idle | enviando | exito | error

  const actualizar = (campo) => (evento) =>
    setDatos((previo) => ({ ...previo, [campo]: evento.target.value }))

  async function enviar(evento) {
    evento.preventDefault()
    setEstado('enviando')

    try {
      const respuesta = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datos),
      })

      if (!respuesta.ok) throw new Error('Error al enviar el formulario')

      window.fbq?.('track', 'Lead')
      setDatos(ESTADO_INICIAL)
      setEstado('exito')
    } catch {
      setEstado('error')
    }
  }

  if (estado === 'exito') {
    return (
      <section id="contacto" className="bg-white px-6 py-24 sm:py-32">
        <motion.div
          className="mx-auto max-w-xl rounded-3xl border border-negro/10 bg-gray-50 p-10 text-center shadow-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: 'backOut' }}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-rojo/10 text-rojo">
            <svg
              className="h-8 w-8"
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
          </div>
          <h2 className="mt-6 text-2xl font-black text-negro sm:text-3xl">
            ¡Recibimos tus datos!
          </h2>
          <p className="mt-3 text-negro/70">
            Un asesor de Digital Impacto se pondrá en contacto contigo muy
            pronto.
          </p>
          <button
            type="button"
            onClick={() => setEstado('idle')}
            className="mt-8 text-sm font-semibold text-rojo underline underline-offset-4"
          >
            Enviar otra solicitud
          </button>
        </motion.div>
      </section>
    )
  }

  return (
    <section id="contacto" className="bg-white px-6 py-24 sm:py-32">
      <motion.div
        className="mx-auto max-w-xl"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.h2
          className="text-center text-3xl font-black tracking-tight text-negro sm:text-4xl"
          variants={fadeUp}
        >
          Cuéntanos sobre tu negocio
        </motion.h2>
        <motion.p
          className="mt-4 text-center text-negro/70"
          variants={fadeUp}
        >
          Déjanos tus datos y te contactamos con una propuesta a tu medida.
        </motion.p>

        <motion.form
          onSubmit={enviar}
          className="mt-10 space-y-5"
          variants={fadeUp}
        >
          {CAMPOS.map((campo) => (
            <div key={campo.name}>
              <label
                htmlFor={campo.name}
                className="mb-1.5 block text-sm font-semibold text-negro"
              >
                {campo.label}
              </label>
              <input
                id={campo.name}
                name={campo.name}
                type={campo.type}
                autoComplete={campo.autoComplete}
                required
                value={datos[campo.name]}
                onChange={actualizar(campo.name)}
                className={inputClass}
              />
            </div>
          ))}

          <div>
            <label
              htmlFor="servicio"
              className="mb-1.5 block text-sm font-semibold text-negro"
            >
              Servicio de Interés
            </label>
            <select
              id="servicio"
              name="servicio"
              required
              value={datos.servicio}
              onChange={actualizar('servicio')}
              className={inputClass}
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              {SERVICIOS.map((servicio) => (
                <option key={servicio} value={servicio}>
                  {servicio}
                </option>
              ))}
            </select>
          </div>

          {estado === 'error' && (
            <p className="rounded-xl bg-rojo/10 px-4 py-3 text-sm font-medium text-rojo">
              No pudimos enviar tus datos. Intenta de nuevo o escríbenos por
              WhatsApp.
            </p>
          )}

          <motion.button
            type="submit"
            disabled={estado === 'enviando'}
            className="w-full rounded-full bg-rojo px-8 py-4 text-base font-bold text-white shadow-lg shadow-rojo/25 transition-colors hover:bg-rojo/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-rojo/40 disabled:cursor-not-allowed disabled:opacity-60"
            whileHover={estado === 'enviando' ? undefined : { scale: 1.02 }}
            whileTap={estado === 'enviando' ? undefined : { scale: 0.98 }}
          >
            {estado === 'enviando' ? 'Enviando…' : 'Quiero mi propuesta'}
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  )
}

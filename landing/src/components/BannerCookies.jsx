import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const CLAVE = 'di-cookies-aceptadas'

export default function BannerCookies() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (localStorage.getItem(CLAVE) !== 'true') setVisible(true)
  }, [])

  function aceptar() {
    localStorage.setItem(CLAVE, 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          // pb extra en móvil: deja libre la esquina del botón de WhatsApp
          className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-negro/95 px-6 pb-24 pt-5 backdrop-blur-sm sm:pb-5"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          exit={{ y: '100%' }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          role="region"
          aria-label="Aviso de cookies"
        >
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="max-w-2xl text-center text-sm text-white/70 sm:text-left">
              Usamos cookies propias y de terceros para medir el rendimiento del
              sitio y mostrarte publicidad relevante. Puedes consultar el detalle
              en nuestra{' '}
              <Link
                to="/politica-de-cookies"
                className="font-semibold text-white underline underline-offset-4"
              >
                política de cookies
              </Link>
              .
            </p>
            <button
              type="button"
              onClick={aceptar}
              className="shrink-0 rounded-full bg-rojo px-7 py-3 text-sm font-bold text-white transition-colors hover:bg-rojo/90 focus:outline-none focus-visible:ring-4 focus-visible:ring-rojo/40"
            >
              Aceptar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

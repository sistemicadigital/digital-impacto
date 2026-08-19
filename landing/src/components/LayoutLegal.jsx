import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function LayoutLegal({ titulo, actualizado, children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = `${titulo} | Digital Impacto`
  }, [titulo])

  return (
    <>
      <header className="border-b border-negro/10 bg-white px-6 py-5">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link to="/">
            <img
              src="/logo.jpeg"
              alt="Digital Impacto"
              className="w-[50px] rounded-lg"
            />
          </Link>
          <Link
            to="/"
            className="text-sm font-semibold text-rojo underline underline-offset-4"
          >
            Volver al inicio
          </Link>
        </div>
      </header>

      <main className="bg-white px-6 py-16 sm:py-20">
        <article className="legal mx-auto max-w-3xl">
          <h1 className="text-3xl font-black tracking-tight text-negro sm:text-4xl">
            {titulo}
          </h1>
          <p className="mt-3 text-sm text-negro/50">
            Última actualización: {actualizado}
          </p>
          {children}
        </article>
      </main>

      <Footer />
    </>
  )
}

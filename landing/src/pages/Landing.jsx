import Hero from '../components/Hero'
import PropuestaValor from '../components/PropuestaValor'
import Servicios from '../components/Servicios'
import OfertaEstrella from '../components/OfertaEstrella'
import Equipo from '../components/Equipo'
import Diferenciadores from '../components/Diferenciadores'
import FormularioLeads from '../components/FormularioLeads'
import CtaFinal from '../components/CtaFinal'
import Footer from '../components/Footer'
import { useCalPopup } from '../lib/cal'

export default function Landing() {
  useCalPopup()

  return (
    <>
      <main>
        <Hero />
        <PropuestaValor />
        <Servicios />
        <OfertaEstrella />
        <Equipo />
        <Diferenciadores />
        <FormularioLeads />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}

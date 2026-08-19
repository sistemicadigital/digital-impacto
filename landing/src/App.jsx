import Hero from './components/Hero'
import PropuestaValor from './components/PropuestaValor'
import Servicios from './components/Servicios'
import OfertaEstrella from './components/OfertaEstrella'
import Diferenciadores from './components/Diferenciadores'
import FormularioLeads from './components/FormularioLeads'
import CtaFinal from './components/CtaFinal'
import BotonWhatsApp from './components/BotonWhatsApp'
import { useCalPopup } from './lib/cal'

export default function App() {
  useCalPopup()

  return (
    <>
      <main>
        <Hero />
        <PropuestaValor />
        <Servicios />
        <OfertaEstrella />
        <Diferenciadores />
        <FormularioLeads />
        <CtaFinal />
      </main>
      <BotonWhatsApp />
    </>
  )
}

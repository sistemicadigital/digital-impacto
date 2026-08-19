import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import TerminosCondiciones from './pages/TerminosCondiciones'
import PoliticaPrivacidad from './pages/PoliticaPrivacidad'
import PoliticaCookies from './pages/PoliticaCookies'
import BotonWhatsApp from './components/BotonWhatsApp'
import BannerCookies from './components/BannerCookies'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/terminos-y-condiciones" element={<TerminosCondiciones />} />
        <Route path="/politica-de-privacidad" element={<PoliticaPrivacidad />} />
        <Route path="/politica-de-cookies" element={<PoliticaCookies />} />
        <Route path="*" element={<Landing />} />
      </Routes>
      <BotonWhatsApp />
      <BannerCookies />
    </BrowserRouter>
  )
}

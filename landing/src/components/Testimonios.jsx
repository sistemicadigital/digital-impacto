import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const EMBED =
  'https://player.cloudinary.com/embed/?cloud_name=ipmphp3x&public_id=Testimonio-digital-impacto&player[showLogo]=false&player[fluid]=true'

export default function Testimonios() {
  return (
    <section className="bg-white px-6 py-12 sm:py-24">
      <motion.div
        className="mx-auto max-w-5xl text-center"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
      >
        <motion.h2
          className="text-3xl font-black tracking-tight text-negro sm:text-4xl"
          variants={fadeUp}
        >
          Clientes que transformaron sus marcas
        </motion.h2>

        {/* El video es vertical (576x1024), de ahí el aspect 9/16 */}
        <motion.div
          className="mx-auto mt-10 w-full max-w-[380px]"
          variants={fadeUp}
        >
          <div className="relative aspect-[9/16] overflow-hidden rounded-2xl bg-negro shadow-2xl">
            <iframe
              src={EMBED}
              title="Testimonio de un cliente de Digital Impacto"
              className="absolute inset-0 h-full w-full border-0"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

import { motion } from 'framer-motion';
import SectionDivider from './ui/SectionDivider';
import FloatingDecorators from './ui/FloatingDecorators';
import pricing from '../data/pricing.json';
import eventInfo from '../data/eventInfo.json';
import links from '../data/links.json';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, ease: 'easeOut' },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

// Center card is highlighted white & elevated; side cards are yellow (per design).
function cardStyle(index, total) {
  const isCenter = index === Math.floor(total / 2);
  return {
    background: isCenter ? '#fff' : '#FFD700',
    transform: isCenter ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isCenter ? '6px 6px 0 #000' : '4px 4px 0 #000',
  };
}

export default function Registration() {
  const phases = pricing.phases;

  return (
    <>
      <section
        id="inscripciones"
        className="relative py-16 overflow-hidden"
        style={{ background: '#F72585' }}
      >
        <FloatingDecorators colors={['#FFD700', '#ffffff', '#33B9E5', '#000', '#FFD700', '#ffffff', '#33B9E5', '#000']} />

        <div className="relative z-10 max-w-6xl mx-auto px-4">

          {/* Heading */}
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="inline-block font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full border-3 border-black mb-4 bg-black text-white">
              INSCRIPCIONES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white text-shadow-neo mb-4">
              ¡Participa con nosotros!
            </h2>
            <p className="font-display text-xl sm:text-2xl text-white/90" style={{ textShadow: '2px 2px 0 #000' }}>
              Inscripciones abiertas a partir del 5 de junio en As Deporte
            </p>
          </motion.div>

          {/* Pricing cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
            className="grid sm:grid-cols-3 gap-4 sm:gap-6 items-center"
          >
            {phases.map((phase, index) => (
              <motion.div
                key={phase.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border-3 border-black p-6 text-center"
                style={cardStyle(index, phases.length)}
              >
                <h3 className="font-display text-xl sm:text-2xl text-black mb-3">{phase.name}</h3>
                <div className="font-display text-4xl sm:text-5xl text-black mb-1">
                  ${phase.price}.00
                </div>
                <p className="text-xs font-bold text-gray-700 mt-2">{phase.validity}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Commission note */}
          {pricing.note && (
            <motion.p {...fadeUp} className="text-center text-white font-bold text-sm mt-6">
              {pricing.note}
            </motion.p>
          )}

          {/* Inscríbete button */}
          <motion.div {...fadeUp} className="flex justify-center mt-8">
            <a
              href={links.registration}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-xl sm:text-2xl text-black px-10 py-4 rounded-full border-3 border-black shadow-neo transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none pulse-badge"
              style={{ background: '#FFD700' }}
            >
              ¡Inscríbete aquí!
            </a>
          </motion.div>

          {/* Tu kit incluye */}
          <div className="mt-14">
            <motion.div {...fadeUp} className="flex justify-center mb-6">
              <span className="font-display text-lg sm:text-xl text-white bg-black px-8 py-3 rounded-full border-3 border-black">
                TU KIT INCLUYE:
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.08 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto"
            >
              {eventInfo.runnerKit.map(({ icon, item, exclusive }) => (
                <motion.div
                  key={item}
                  {...staggerChild}
                  className="flex items-center gap-3 bg-black text-white rounded-full px-5 py-3 border-3 border-black"
                >
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-bold uppercase tracking-wide">
                    {item}{exclusive && '**'}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {eventInfo.runnerKitNote && (
              <motion.p {...fadeUp} className="text-center text-white font-bold text-xs mt-5">
                {eventInfo.runnerKitNote}
              </motion.p>
            )}

            {/* Carta exonerativa */}
            <motion.div {...fadeUp} className="flex justify-center mt-8">
              <a
                href={links.cartaExonerativa}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-lg sm:text-xl text-black bg-white px-10 py-4 rounded-full border-3 border-black shadow-neo transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none"
              >
                Descarga la carta exonerativa
              </a>
            </motion.div>
          </div>
        </div>
      </section>
      <SectionDivider color="#F72585" direction="up" height={60} />
    </>
  );
}

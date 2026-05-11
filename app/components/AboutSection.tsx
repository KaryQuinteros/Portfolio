'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="sobre-mi" style={{ gridColumn: 'span 12', marginTop: '4rem', marginBottom: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 className="title-gradient" style={{ fontSize: '2.2rem', fontWeight: 800, display: 'inline-block' }}>
          Sobre Mí
        </h2>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' as const }}
        className="about-layout"
        style={{ gap: '3rem' }}
      >
       {/* Photo */}
<div className="about-photo">
  <img
    src="/img/imagen_portada.jpg"
    alt="Karina Quinteros"
    style={{ width: '100%', maxWidth: 280, borderRadius: 8, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
    onError={(e) => {
      const img = e.target as HTMLImageElement;
      img.style.display = 'none';
    }}
  />
</div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              'Soy Frontend Developer con enfoque en construir productos digitales funcionales, claros y escalables. Trabajo principalmente con JavaScript, TypeScript, React y Next.js aplicando buenas prácticas de desarrollo, estructura mantenible y atención a la experiencia de usuario.',
              'Tengo experiencia integrando APIs, componentizando UI y coordinando entregas con Git y flujos de colaboración.',
              'Vengo del diseño, lo que me permite entender el producto más allá del código: desempeño atención al rendimiento, consistencia visual y estándares de accesibilidad. Actualmente busco integrarme a un equipo donde pueda aportar valor desde el primer día, asumir nuevos desafíos y seguir creciendo profesionalmente en el ecosistema tech.',
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: 'easeOut' as const }}
                style={{ fontSize: '1.05rem', color: 'var(--text-primary)', lineHeight: 1.8, margin: 0 }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
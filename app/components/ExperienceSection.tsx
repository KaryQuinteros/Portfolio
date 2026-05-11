'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const techPills = ['Vue', 'Laravel', 'PostgreSQL', 'Neon'];
const bullets = [
  'Mantenimiento y evolución de producto en producción.',
  'Desarrollo de nuevas funcionalidades con Vue.js.',
  'Integración con backend en Laravel (PHP) mediante APIs REST.',
  'Gestión de datos en PostgreSQL utilizando Neon.',
  'Implementación de flujos críticos: onboarding, activación de cuentas y progreso.',
  'Mejora de experiencia de usuario mediante estados dinámicos y feedback visual.',
  'Debugging y resolución de incidencias en entorno productivo.',
  'Trabajo colaborativo con Git y flujo en GitHub (Issues, Projects).',
  'Uso de Docker para levantar entorno local de backend y asegurar consistencia de desarrollo.',
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experiencia" style={{ gridColumn: 'span 12', marginTop: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 className="section-title title-gradient" style={{ fontSize: '2.2rem', fontWeight: 800 }}>
          Experiencia
        </h2>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="glass-effect"
        style={{ maxWidth: 800, margin: '0 auto', padding: '3rem' }}
      >
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.5rem' }}>
          <span style={{ color: 'var(--color-salmon)', fontSize: '1.3rem' }}>💼</span>
          <h3 style={{ fontSize: '1.3rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
            Desarrolladora Web — Plataforma Educativa
          </h3>
        </div>

        <div style={{ marginBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <p style={{ color: 'var(--text-secondary)', margin: 0, fontSize: '0.95rem' }}>Campus Mariana Casella</p>
          <p style={{ color: 'var(--color-mint)', fontSize: '0.85rem', margin: 0, fontWeight: 600 }}>
            📅 Feb 2026 – Actualidad
          </p>
        </div>

        <p style={{ color: 'var(--text-primary)', fontWeight: 500, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
          Plataforma de enseñanza de programación con usuarios reales.
        </p>

        {/* Tech pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {techPills.map(tech => (
            <span key={tech} className="tech-pill-glass">{tech}</span>
          ))}
        </div>

        {/* Bullets */}
        <ul style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7, paddingLeft: '1.2rem', margin: 0 }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ marginBottom: i < bullets.length - 1 ? '0.5rem' : 0 }}>{b}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}

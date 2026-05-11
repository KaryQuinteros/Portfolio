'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function LegalModal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(4px)', zIndex: 99999,
          display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          onClick={e => e.stopPropagation()}
          style={{
            background: 'var(--glass-bg)', backdropFilter: 'blur(16px)',
            border: '1px solid rgba(78,205,196,0.3)', borderRadius: 20,
            overflow: 'hidden', maxWidth: 600, width: '100%', padding: '2.5rem',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 className="title-gradient" style={{ fontSize: '1.6rem', fontWeight: 700 }}>{title}</h2>
            <button onClick={onClose} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)', borderRadius: '50%', width: 36, height: 36, cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          </div>
          {children}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <button className="btn-primary-solid" onClick={onClose}>Entendido</button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Footer() {
  const [modal, setModal] = useState<'privacidad' | 'terminos' | null>(null);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <footer style={{ marginTop: '4rem', padding: '2rem 0', borderTop: '1px solid rgba(0,0,0,0.5)', width: '100%' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>

          {/* Left: Logo + links */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
            <button onClick={() => scrollTo('hola')} className="logo-container" style={{ background: 'none', border: 'none', cursor: 'pointer', transform: 'scale(0.9)', transformOrigin: 'left center' }}>
              <span className="logo-bg-text">KQ</span>
              <span className="logo-text">KaryDev</span>
            </button>
            <div style={{ fontSize: '0.85rem', paddingLeft: '1rem', fontWeight: 500, display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <button onClick={() => setModal('privacidad')} className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Outfit', sans-serif" }}>
                Política de privacidad
              </button>
              <span style={{ color: 'var(--text-secondary)', opacity: 0.3 }}>|</span>
              <button onClick={() => setModal('terminos')} className="footer-link" style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Outfit', sans-serif" }}>
                Términos y condiciones
              </button>
            </div>
          </div>

          {/* Center: Social icons */}
          <div style={{ display: 'flex', gap: '1.8rem' }}>
            {[
              { href: 'https://www.linkedin.com/in/karina-quinteros-690953121/', icon: <i className="fab fa-linkedin-in"></i>, label: 'LinkedIn' },
              { href: 'https://github.com/KaryQuinteros', icon: <i className="fab fa-github"></i>, label: 'GitHub' },
              { href: 'mailto:karinaq38@gmail.com', icon: <i className="far fa-envelope"></i>, label: 'Email' },
            ].map(s => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--color-mint)', fontSize: '1.4rem', transition: 'all 0.3s ease', display: 'inline-block', textDecoration: 'none' }}
                onMouseEnter={e => { const el = e.currentTarget; el.style.color = 'var(--color-salmon-soft)'; el.style.transform = 'translateY(-5px) scale(1.1)'; }}
                onMouseLeave={e => { const el = e.currentTarget; el.style.color = 'var(--color-mint)'; el.style.transform = 'translateY(0) scale(1)'; }}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Right: Copyright */}
<div style={{ textAlign: 'center' }}>
  <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 500 }}>
    © 2026 KaryDev. Todos los derechos reservados.
  </span>
</div>
        </div>
      </footer>

      {/* Modals */}
      {modal === 'privacidad' && (
        <LegalModal title="Política de Privacidad" onClose={() => setModal(null)}>
          <p style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            Tu privacidad es importante para mí. Aquí explico cómo recopilo, uso y protejo tus datos personales cuando visitas mi portafolio.
          </p>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
            <li>No comparto tu información con terceros.</li>
            <li>Solo recopilo los datos necesarios para responder tus consultas.</li>
            <li>Puedes solicitar la eliminación de tu mensaje en cualquier momento.</li>
          </ul>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1.5rem' }}>
            Cuando usas el botón de envío rápido por WhatsApp o correo, los datos se manejan a través de sus respectivas plataformas.
          </p>
        </LegalModal>
      )}
      {modal === 'terminos' && (
        <LegalModal title="Términos y Condiciones" onClose={() => setModal(null)}>
          <p style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
            Al usar este sitio web, aceptas los siguientes términos y condiciones:
          </p>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: 1.8, paddingLeft: '1.2rem' }}>
            <li>El contenido es solo informativo y puede cambiar sin previo aviso.</li>
            <li>No nos responsabilizamos por el uso que hagas de la información publicada.</li>
            <li>El diseño y contenido están protegidos por derechos de autor.</li>
          </ul>
        </LegalModal>
      )}
    </>
  );
}

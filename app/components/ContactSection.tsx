'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContactSection() {
  const [contactVal, setContactVal] = useState('');
  const [ideaVal, setIdeaVal] = useState('');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  function sendQuickMessage() {
    if (!ideaVal.trim()) {
      alert('Por favor, cuéntame un poco de tu idea antes de enviar.');
      return;
    }
    let text = '¡Hola Karina! Te escribo desde tu portafolio.%0A%0A';
    text += '*Mi proyecto:* ' + encodeURIComponent(ideaVal) + '%0A';
    if (contactVal) text += '*Mi contacto:* ' + encodeURIComponent(contactVal);
    window.open('https://wa.me/5493547459003?text=' + text, '_blank');
  }

  return (
    <section id="contacto" style={{ gridColumn: 'span 12', marginTop: '4rem', marginBottom: '2rem' }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem' }}
      >
        {/* Left col */}
        <div style={{ flex: 1, minWidth: 280 }}>
          <h2 className="title-gradient" style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '1rem', display: 'inline-block' }}>
            ¡Conectemos!
          </h2>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '2rem' }}>
            ¿Tenés una idea innovadora? Hablemos sobre cómo hacerla realidad. Ya sea para desarrollar un producto desde cero o mejorar uno existente, estoy lista para aportar valor.
          </p>
          <p style={{ color: 'var(--color-mint)', fontWeight: 600, fontSize: '1.25rem', margin: 0 }}>
            Disponible para trabajo remoto y proyectos freelance.
          </p>
        </div>

        {/* Right col: contact form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass-effect"
          style={{ flex: 1, minWidth: 300, padding: '2.5rem',
          background: 'var(--glass-bg-solid)',
  
          }}
        >
          <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>
            Escríbeme un mensaje directo
          </h3>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Nombre y teléfono
            </label>
            <input
              type="text"
              className="contact-input"
              placeholder="Ej: Juan Pérez, 3547..."
              value={contactVal}
              onChange={e => setContactVal(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              ¿En qué te puedo ayudar?
            </label>
            <textarea
              className="contact-input"
              rows={4}
              placeholder="Ej: Necesito una aplicación web para gestionar mi negocio..."
              value={ideaVal}
              onChange={e => setIdeaVal(e.target.value)}
              style={{ resize: 'none' }}
            />
          </div>

          <button
            onClick={sendQuickMessage}
            style={{
              width: '100%', border: 'none', cursor: 'pointer', padding: '1rem', borderRadius: 12,
              fontWeight: 600, fontSize: '1.1rem', display: 'flex', justifyContent: 'center',
              alignItems: 'center', gap: '0.5rem',
              background: 'linear-gradient(135deg, var(--color-mint), var(--color-salmon-soft))', color: 'white', transition: 'all 0.3s ease',
              fontFamily: "'Outfit', sans-serif",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)'; }}
          >
            Enviar por WhatsApp <i className="fab fa-whatsapp" style={{ fontSize: '1.3rem' }}></i>
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

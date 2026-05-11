'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const navLinks = [
  { label: 'Inicio', href: '#hola' },
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Sobre Mí', href: '#sobre-mi' },
  { label: 'Contacto', href: '#contacto' },
];

function scrollTo(href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Navbar() {
  const { isLight, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 9999, padding: '0.8rem 0', background: isLight ? 'rgba(255,255,255,0.6)' : 'rgba(15,20,35,0.6)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(255,255,255,0.03)', transition: 'all 0.3s ease' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        
        {/* Logo */}
        <button onClick={() => scrollTo('#hola')} className="logo-container" style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <span className="logo-bg-text">KQ</span>
          <span className="logo-text">KaryDev</span>
        </button>

        {/* Desktop nav - se oculta en mobile via CSS */}
        <ul className="nav-desktop-list" style={{ display: 'flex', gap: '0.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
          {navLinks.map(link => (
            <li key={link.href}>
              <button className="btn-nav" onClick={() => scrollTo(link.href)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Derecha: tema + hamburguesa */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button className="btn-theme" onClick={toggleTheme} aria-label="Cambiar tema">
           {isLight
  ? <i className="fas fa-moon" style={{ fontSize: '1rem', color: 'var(--text-primary)' }}></i>
  : <i className="fas fa-sun" style={{ fontSize: '1rem', color: 'var(--text-primary)' }}></i>
}
          </button>
          {/* Hamburger - solo visible en mobile via CSS */}
          <button
            onClick={() => setMenuOpen(p => !p)}
            className="nav-hamburger-btn btn-theme"
            aria-label="Menu"
            style={{ fontSize: '1.4rem' }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu desplegable */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: isLight ? 'rgba(255,255,255,0.95)' : 'rgba(15,20,35,0.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
          >
            {navLinks.map(link => (
              <button key={link.href} className="btn-nav" style={{ textAlign: 'left' }} onClick={() => { scrollTo(link.href); setMenuOpen(false); }}>
                {link.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
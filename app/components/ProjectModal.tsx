'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';
import type { Project } from '../data/projects';

type Props = { project: Project | null; onClose: () => void };

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [project]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(4px)', zIndex: 99999,
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center',
            padding: '1rem', overflowY: 'auto',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            onClick={e => e.stopPropagation()}
            style={{
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(78,205,196,0.3)',
              borderRadius: 20,
              overflow: 'hidden',
              maxWidth: 1100,
              width: '100%',
              marginTop: '2rem',
              marginBottom: '2rem',
            }}
          >
            {/* Header */}
            <div style={{
              padding: '2rem 2.5rem',
              borderBottom: '1px solid var(--glass-border)',
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
            }}>
              <div>
                <h2 className="title-gradient" style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  {project.title}
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0 }}>{project.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: 'rgba(255,255,255,0.1)', border: '1px solid var(--glass-border)',
                  color: 'var(--text-primary)', borderRadius: '50%', width: 36, height: 36,
                  cursor: 'pointer', fontSize: '1.1rem', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', flexShrink: 0, marginLeft: '1rem',
                  transition: 'all 0.2s',
                }}
              >
                ✕
              </button>
            </div>

            {/* Body — two cols */}
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>

              {/* Sidebar */}
              <div className="sidebar-left" style={{ flex: '0 0 320px', minWidth: 280, padding: '2rem', borderRight: '1px solid var(--glass-border)' }}>
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', aspectRatio: '16/9', objectFit: 'cover', objectPosition: 'top', borderRadius: 12, marginBottom: '1.5rem', border: '1px solid var(--glass-border)' }}
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                />

                {/* Meta */}
                {project.tipo && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    {project.tipo && <p style={{ marginBottom: 8 }}><strong style={{ color: 'var(--text-primary)' }}>Tipo:</strong> <span style={{ color: 'var(--text-secondary)' }}>{project.tipo}</span></p>}
                    {project.estado && <p style={{ marginBottom: 8 }}><strong style={{ color: 'var(--text-primary)' }}>Estado:</strong> <span style={{ color: 'var(--text-secondary)' }}>{project.estado}</span></p>}
                    {project.stack && <p style={{ marginBottom: 8 }}><strong style={{ color: 'var(--text-primary)' }}>Stack:</strong> <span style={{ color: 'var(--text-secondary)' }}>{project.stack}</span></p>}
                  </div>
                )}

                <hr style={{ borderColor: 'var(--glass-border)', margin: '1.5rem 0' }} />

                {/* Role */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: 1, marginBottom: '0.5rem' }}>Rol</p>
                  <p style={{ color: 'var(--text-primary)', margin: 0 }}>{project.role}</p>
                </div>

                <hr style={{ borderColor: 'var(--glass-border)', margin: '1.5rem 0' }} />

                {/* Technologies */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 className="title-gradient" style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>Tecnologías utilizadas</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {project.technologies.map(t => (
                      <div key={t.name} className="tech-detail-pill">
                        <span className="tech-name">{t.name}</span> — {t.desc}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                {(project.liveUrl || project.repoUrl) && (
                  <a
                    href={project.liveUrl || project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-solid"
                    style={{ width: '100%', justifyContent: 'center', fontSize: '1rem', marginTop: '0.5rem' }}
                  >
                    {project.liveLabel || project.repoLabel}
                  </a>
                )}
              </div>

              {/* Main content */}
              <div style={{ flex: 1, minWidth: 280, padding: '2rem 2.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  {/* Objetivo */}
                  <div className="bento-box-inner">
                    <h3 className="bento-title-inner title-gradient">Objetivo</h3>
                    {project.objetivo.intro && <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{project.objetivo.intro}</p>}
                    {project.objetivo.text && <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>{project.objetivo.text}</p>}
                    {project.objetivo.items && (
                      <ul className="custom-bullet-list">
                        {project.objetivo.items.map(i => <li key={i}>{i}</li>)}
                      </ul>
                    )}
                  </div>

                  {/* Proceso */}
                  <div className="bento-box-inner">
                    <h3 className="bento-title-inner title-gradient">Proceso</h3>
                    {project.proceso.intro && <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem', marginBottom: '1rem' }}>{project.proceso.intro}</p>}
                    {project.proceso.text && <p style={{ color: 'var(--text-primary)', fontSize: '0.9rem' }}>{project.proceso.text}</p>}
                    {project.proceso.items && (
                      <ul className={project.proceso.numbered ? 'custom-numbered-list' : 'custom-bullet-list'}>
                        {project.proceso.items.map(i => <li key={i}>{i}</li>)}
                      </ul>
                    )}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                  {/* Resultados */}
                  <div className="bento-box-inner">
                    <h3 className="bento-title-inner title-gradient">Resultado</h3>
                    <ul className="custom-check-list">
                      {project.resultados.items.map(i => <li key={i}>{i}</li>)}
                    </ul>
                  </div>

                  {/* Responsabilidades */}
                  <div className="bento-box-inner">
                    <h3 className="bento-title-inner title-gradient">Responsabilidades</h3>
                    <ul className="custom-arrow-list">
                      {project.responsabilidades.items.map(i => <li key={i}>{i}</li>)}
                    </ul>
                  </div>
                </div>

                {/* Quote */}
                <div className="quote-box-inner">{project.quote}</div>

                {/* Close */}
                <div style={{ textAlign: 'right', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)', marginTop: '1rem' }}>
                  <button className="btn-primary-solid" onClick={onClose}>Volver</button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

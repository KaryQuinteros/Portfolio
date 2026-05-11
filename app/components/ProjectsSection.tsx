'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import ProjectModal from './ProjectModal';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};
const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <>
      <section id="proyectos" style={{ gridColumn: 'span 12' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="title-gradient" style={{ fontSize: '2.2rem', fontWeight: 800, marginBottom: '0.5rem', display: 'inline-block' }}>
            Mis Proyectos
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: 650, margin: '0 auto' }}>
            Una colección de trabajos donde integro lógica backend y diseño frontend para desarrollar soluciones funcionales, optimizadas y escalables.
          </p>
        </div>

        <motion.div
        className="projects-grid-2col"
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}
        >
          {projects.map(project => (
            <motion.div
              key={project.id}
              variants={item}
              className="project-card"
              onClick={() => setActiveProject(project)}
            >
              {/* Image */}
              <div
                style={{
                  height: 180,
                  background: `url('${project.image}') center/cover no-repeat, linear-gradient(135deg, #1a1a2e, #0f3460)`,
                  borderBottom: '1px solid rgba(255,255,255,0.03)',
                }}
              />
              {/* Content */}
              <div style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '0.5rem', fontWeight: 700 }}>
                  {project.id === 'academia' ? 'Campus Academia Mariana Casella' :
                   project.id === 'portfolio' ? 'Portfolio' :
                   project.id === 'argbroker' ? 'ArgBroker' : 'ProfeSort'}
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, flexGrow: 1 }}>
                  {project.description}
                </p>
              </div>
              {/* Footer */}
              <div style={{
                padding: '1.2rem 1.5rem',
                borderTop: '1px solid var(--glass-border)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              }}>
                <span className="ver-mas">Ver más →</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}

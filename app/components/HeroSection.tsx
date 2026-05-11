'use client';
import { motion } from 'framer-motion';

const skills = [
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', alt: 'HTML5' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', alt: 'CSS3' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', alt: 'JavaScript' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', alt: 'Vue.js' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', alt: 'Tailwind CSS' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg', alt: 'PHP' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', alt: 'Python' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg', alt: 'Docker' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', alt: 'Git' },
  { src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', alt: 'GitHub' },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function HeroSection() {
  return (
    <section
      id="hola"
      style={{
        gridColumn: 'span 12',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '4rem',
        paddingTop: '4rem',
        paddingBottom: '2rem',
      }}
    >
      {/* Left: text */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ flex: 1, minWidth: 300 }}
      >
        <motion.h1
          variants={item}
          style={{
            fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
            fontWeight: 800,
            marginBottom: '0.5rem',
            background: 'linear-gradient(45deg, var(--color-salmon), var(--color-mint))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.2,
          }}
        >
          Karina Quinteros
        </motion.h1>

        <motion.h2
          variants={item}
          style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 600 }}
        >
          Frontend Developer con conocimientos en Backend
        </motion.h2>

        <motion.p
          variants={item}
          style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: 600 }}
        >
          Construyo interfaces web atractivas y funcionales con HTML, CSS, JavaScript y Vue.
          Experiencia en entornos de desarrollo integrales utilizando herramientas como Docker, Python, PHP y bases de datos.
        </motion.p>

        <motion.div variants={item} style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
          <button className="btn-primary-solid" onClick={() => scrollTo('contacto')}>Contáctame</button>
          <button className="btn-primary-solid" onClick={() => scrollTo('proyectos')}>Ver Proyectos</button>
          <a
            className="btn-primary-solid"
            href="https://drive.google.com/file/d/1Re2NxeYL9JZ7gvibJfqeghF75wMgLHxo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV
          </a>
        </motion.div>
      </motion.div>

      {/* Right: floating skills */}
      <motion.div
        className="floating-skills-grid"
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          flex: 1,
          minWidth: 280,
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2rem',
          justifyItems: 'center',
          alignItems: 'center',
        }}
      >
        {skills.map((s, i) => (
          <motion.img
            key={s.alt}
            variants={item}
            src={s.src}
            alt={s.alt}
            title={s.alt}
            className="floating-skill-icon"
            style={{ animationDelay: `${i * 0.3}s` }}
          />
        ))}
      </motion.div>
    </section>
  );
}

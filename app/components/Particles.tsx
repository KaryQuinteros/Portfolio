'use client';
import { useEffect, useRef } from 'react';

const COLORS = ['#4ecdc4', '#ff6b6b', '#a18cd1', '#fbc2eb'];

export default function Particles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';

    for (let i = 0; i < 100; i++) {
      const el = document.createElement('div');
      const size = (Math.random() * 4 + 2) + 'px';
      el.style.cssText = `
        position: fixed;
        border-radius: 50%;
        pointer-events: none;
        width: ${size};
        height: ${size};
        background: ${COLORS[Math.floor(Math.random() * COLORS.length)]};
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: float ${Math.random() * 5 + 5}s infinite ease-in-out;
        animation-delay: ${Math.random() * 8}s;
        z-index: 0;
      `;
      container.appendChild(el);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0 }}
    />
  );
}

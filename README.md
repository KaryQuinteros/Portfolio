# 🌐 KaryDev — Portfolio Personal

> Migración del portfolio personal de HTML/CSS vanilla a **Next.js 15 + Tailwind CSS + Framer Motion**.

---

## 📋 Descripción

Portfolio profesional de **Karina Quinteros**, Frontend Developer con conocimientos en Backend. Diseño glassmorphism con modo claro/oscuro, animaciones fluidas y totalmente responsive.

La versión anterior (`v1-vanilla-premium`) fue construida con HTML, CSS y JavaScript puro. Esta versión mantiene el mismo diseño visual pero con una arquitectura moderna y escalable.

---

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| **Next.js 15** | Framework React con App Router |
| **TypeScript** | Tipado estático |
| **Tailwind CSS v4** | Utilidades CSS |
| **Framer Motion** | Animaciones y transiciones |
| **Font Awesome** | Íconos |
| **Google Fonts** | Tipografías: Outfit, Playfair Display, Great Vibes |

---


---

## ✨ Funcionalidades

- 🌙 Modo claro / oscuro con persistencia en `localStorage`
- 🎨 Diseño glassmorphism con variables CSS centralizadas
- 💫 Partículas animadas en el fondo
- 🎭 Animaciones de entrada con Framer Motion (`useInView`)
- 📱 Totalmente responsive (mobile, tablet, desktop)
- 🖼️ Modales de detalle por proyecto
- 💬 Formulario de contacto directo por WhatsApp
- ⌨️ Cierre de modales con tecla `Escape`

---

## 🎨 Sistema de Diseño

Todos los colores están definidos como variables CSS en `globals.css`, sin ningún valor hardcodeado en los componentes:

```css
--color-mint: #4ecdc4
--color-salmon: #ff6b6b
--color-salmon-soft: #ff7f7f
--accent-gradient: linear-gradient(135deg, #667eea, #764ba2)
```

El modo claro y oscuro se manejan sobreescribiendo las variables en la clase `.light-mode`.

---

## 👤 Autora

Karina Quinteros — Frontend Developer

[![Portfolio](https://img.shields.io/badge/Portfolio-Online-blue?style=for-the-badge)](https://karydev.vercel.app)


---

## 📄 Versiones

| Versión | Branch | Descripción |
|---|---|---|
| v1 | `v1-vanilla-premium` | HTML + CSS + JS vanilla |
| v2 | `main` | Next.js + Tailwind + Framer Motion |

---

*© 2026 KaryDev. Todos los derechos reservados.*

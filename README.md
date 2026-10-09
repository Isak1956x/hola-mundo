# 🚀 Hola Mundo - Despliegue Continuo en la Nube

Una aplicación web moderna interactiva diseñada para demostrar la integración y el despliegue continuo (CI/CD) automático desde un repositorio en **GitHub** hacia **GitHub Pages**.

---

## 🌐 Enlaces del Proyecto

- **Repositorio de GitHub**: [https://github.com/Isak1956x/hola-mundo](https://github.com/Isak1956x/hola-mundo)
- **Página Web en Vivo (GitHub Pages)**: [https://isak1956x.github.io/hola-mundo/](https://isak1956x.github.io/hola-mundo/)

---

## 🛠️ Tecnologías y Arquitectura

- **Frontend**: HTML5 Semántico, CSS3 moderno (Glassmorphism, CSS Variables, Responsive Design), Vanilla JavaScript ES6+.
- **Control de Versiones**: Git & GitHub.
- **Hosting en la Nube**: GitHub Pages CDN con HTTPS automático.
- **CI/CD Pipeline**: GitHub Actions (`.github/workflows/deploy.yml`) para compilar y desplegar con cada `git push` en la rama `main`.

---

## 🔄 Flujo de Automatización

```
[ Edición Local ] ➔ [ git commit & push ] ➔ [ GitHub Actions Pipeline ] ➔ [ Despliegue en GitHub Pages ]
```

Cada cambio realizado en el código y enviado al repositorio dispara automáticamente el workflow de GitHub Actions que actualiza la página en vivo en segundos.

// Saludos y frases en diferentes lenguas
const greetingsData = [
  {
    title: "¡Hola, Mundo!",
    lang: "Español",
    quote: '"El primer paso de todo gran desarrollador comienza con un simple Hola Mundo."'
  },
  {
    title: "Hello, World!",
    lang: "Inglés",
    quote: '"Every line of code is a brushstroke on the canvas of the digital world."'
  },
  {
    title: "Bonjour, le Monde!",
    lang: "Francés",
    quote: '"Le voyage de mille lieues commence par un premier pas."'
  },
  {
    title: "Hallo, Welt!",
    lang: "Alemán",
    quote: '"Der Anfang ist der wichtigste Teil der Arbeit."'
  },
  {
    title: "こんにちは、世界！",
    lang: "Japonés",
    quote: '"千里の道も一歩から (Incluso un viaje de mil millas comienza con un solo paso)."'
  },
  {
    title: "Olá, Mundo!",
    lang: "Portugués",
    quote: '"O futuro pertence àqueles que acreditam na beleza de seus sonhos."'
  },
  {
    title: "Ciao, Mondo!",
    lang: "Italiano",
    quote: '"La semplicità è l\'ultima sofisticazione."'
  },
  {
    title: "你好，世界！",
    lang: "Chino Mandarín",
    quote: '"千里之行，始于足下。"'
  }
];

let currentIndex = 0;

const btnGreet = document.getElementById('btn-greet');
const greetingTitle = document.getElementById('greeting-title');
const langTag = document.getElementById('lang-tag');
const quoteText = document.getElementById('quote-text');
const greetingBox = document.getElementById('greeting-box');
const systemTime = document.getElementById('system-time');

// Actualizar hora del sistema en tiempo real
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const dateString = now.toLocaleDateString([], { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  if (systemTime) {
    systemTime.textContent = `🟢 En línea | ${dateString} ${timeString}`;
  }
}
setInterval(updateClock, 1000);
updateClock();

// Cambiar saludo interactivo
btnGreet.addEventListener('click', (e) => {
  currentIndex = (currentIndex + 1) % greetingsData.length;
  const current = greetingsData[currentIndex];

  // Micro-animación
  greetingBox.classList.add('pulse');
  setTimeout(() => greetingBox.classList.remove('pulse'), 300);

  greetingTitle.innerHTML = `<span class="gradient-text">${current.title}</span>`;
  langTag.textContent = `Idioma: ${current.lang}`;
  quoteText.textContent = current.quote;

  // Efecto confeti
  triggerConfetti();
});

// Canvas Confetti ligero personalizado
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 8 + 4;
    this.speedX = (Math.random() - 0.5) * 8;
    this.speedY = Math.random() * -6 - 4;
    this.gravity = 0.25;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = (Math.random() - 0.5) * 10;
    this.colors = ['#6366f1', '#a855f7', '#ec4899', '#06b6d4', '#10b981', '#f59e0b'];
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.opacity = 1;
    this.decay = Math.random() * 0.015 + 0.01;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY += this.gravity;
    this.rotation += this.rotationSpeed;
    this.opacity -= this.decay;
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.globalAlpha = Math.max(0, this.opacity);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

function triggerConfetti() {
  const startX = window.innerWidth / 2;
  const startY = window.innerHeight / 2.5;

  for (let i = 0; i < 45; i++) {
    particles.push(new Particle(startX, startY));
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles = particles.filter(p => p.opacity > 0);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

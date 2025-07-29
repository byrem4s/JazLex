import { initThreeScene } from './threeScene.js';
import { initializeSwiper } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeSwiper();
  initThreeScene();

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu-link');
  const navItems = document.querySelectorAll('.nav-menu-item');
  const icon = navToggle.querySelector('i');

  // Toggle menú hamburguesa
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });

  // Cerrar menú al hacer click en enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });

  // Abrir/cerrar submenús en modo mobile
  navItems.forEach(item => {
    const submenu = item.querySelector('.submenu-column');

    item.addEventListener('click', (e) => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile && submenu) {
        e.preventDefault(); // Evita redireccionar
        item.classList.toggle('active'); // Clase usada por CSS para abrir submenu
      }
    });
  });

  // Cerrar menú al hacer clic fuera (mobile)
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove('show');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });
});

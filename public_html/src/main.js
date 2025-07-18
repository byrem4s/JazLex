import { initThreeScene } from './threeScene.js';
import { initializeSwiper } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
  initializeSwiper();
  initThreeScene();

  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu-link');
  const icon = navToggle.querySelector('i'); // <i class="fas fa-bars">

  // Submenú único
  const submenu = document.querySelector('.submenu');
  
  // Ocultamos el submenú de inicio
  submenu.style.display = 'none';  // Se mantiene oculto hasta que el mouse pase sobre el menú

  if (navToggle && navMenu && icon) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  }

  // Cierra el menú al hacer clic en cualquier enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });



// Mostrar el submenu al entrar al nav-menu
navMenu.addEventListener('mouseenter', () => {
  submenu.style.display = 'grid';
});

// Ocultar el submenu si salís de ambos: nav-menu y submenu
function hideSubmenuIfOutside(event) {
  if (!navMenu.contains(event.relatedTarget) && !submenu.contains(event.relatedTarget)) {
    submenu.style.display = 'none';
  }
}

navMenu.addEventListener('mouseleave', hideSubmenuIfOutside);
submenu.addEventListener('mouseleave', hideSubmenuIfOutside);

});

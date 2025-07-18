document.addEventListener('DOMContentLoaded', function () {
  const reveals = document.querySelectorAll('.reveal');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu-link');
  const icon = navToggle.querySelector('i'); // <i class="fas fa-bars">

  // Función para abrir/cerrar el menú hamburguesa
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');

    // Cambiar el ícono de hamburguesa a cerrar y viceversa
    if (navMenu.classList.contains('show')) {
      icon.classList.remove('fa-bars');
      icon.classList.add('fa-times');
    } else {
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    }
  });

  // Cierra el menú al hacer clic en cualquier enlace
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      icon.classList.remove('fa-times');
      icon.classList.add('fa-bars');
    });
  });

    window.addEventListener('scroll', () => {
    for (let el of reveals) {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    }
  });

        // Submenú único
  const submenu = document.querySelector('.submenu');
  
  // Ocultamos el submenú de inicio
  submenu.style.display = 'none';  // Se mantiene oculto hasta que el mouse pase sobre el menú

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
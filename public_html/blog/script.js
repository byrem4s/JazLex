document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu-link');
  const icon = navToggle.querySelector('i'); // <i class="fas fa-bars">
  const reveals = document.querySelectorAll('.reveal');


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

  window.mostrarContenido = function(boton) {
    const publicacion = boton.closest('.publicacion');
    const contenido = publicacion.querySelector('.contenido-completo');

    if (contenido.style.display === 'none' || contenido.style.display === '') {
      contenido.style.display = 'block';
      boton.textContent = 'Ver menos';
    } else {
      contenido.style.display = 'none';
      boton.textContent = 'Ver más';
    }
  };

  window.addEventListener('scroll', () => {
    for (let el of reveals) {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    }
  });


});


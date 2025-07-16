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



  document.querySelectorAll('.share-btn').forEach(button => {
  button.addEventListener('click', (event) => {
    const publication = event.target.closest('.publication');
    const postTitle = publication.querySelector('.titleFeed').innerText;
    const postDescription = publication.querySelector('.parrafoFeed').innerText;
    const postImage = getComputedStyle(publication.querySelector('.blogImg')).backgroundImage.slice(5, -2); // Para quitar "url(" y ")"
    const postUrl = window.location.href + "#" + publication.id;  // La URL será la de la página actual + el id de la publicación

    // Mostrar el modal
    const modal = document.getElementById('socialModal');
    modal.style.display = 'block';

    // Actualizar los enlaces de las redes sociales
    document.getElementById('shareFacebook').setAttribute('href', `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}&quote=${encodeURIComponent(postTitle)}`);
    document.getElementById('shareWhatsApp').setAttribute('href', `https://wa.me/?text=${encodeURIComponent(postTitle)}%20${encodeURIComponent(postDescription)}%20${encodeURIComponent(postUrl)}`);
    document.getElementById('shareLinkedIn').setAttribute('href', `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`);
    document.getElementById('shareTwitter').setAttribute('href', `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}%20${encodeURIComponent(postDescription)}`);

    // Cerrar el modal cuando haga clic fuera de él
    window.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });

    // Cerrar el modal al hacer clic en el botón de cerrar
    document.querySelector('.close-btn').addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });
});


 

});


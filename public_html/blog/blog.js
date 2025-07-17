document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu-link');
  const icon = navToggle?.querySelector('i');
  const reveals = document.querySelectorAll('.reveal');

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

  window.mostrarContenido = function (boton) {
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
    reveals.forEach(el => {
      const top = el.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        el.classList.add('active');
      }
    });
  });

  const modal = document.getElementById('socialModal');
  const closeBtn = document.querySelector('.close-btn');

  document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', (event) => {
      const publication = event.target.closest('.publication');

      const titleEl = publication?.querySelector('.titleFeed');
      const descriptionEl = publication?.querySelector('.parrafoFeed');
      const imageEl = publication?.querySelector('.blogImg');

      const postTitle = titleEl?.textContent.trim() || 'Publicación de JazLex';
      const postDescription = descriptionEl?.textContent.trim() || '';
      let postImage = '';

      try {
        if (imageEl && typeof getComputedStyle === 'function') {
          const estilo = getComputedStyle(imageEl);
          const bg = estilo?.backgroundImage;
          postImage = bg && bg.startsWith('url(') ? bg.slice(5, -2) : '';
        }
      } catch (error) {
        console.warn('No se pudo obtener imagen:', error);
      }

      const postUrl = window.location.href + "#" + (publication?.id || '');

      if (modal) {
        modal.style.display = 'block';
      }

      document.getElementById('shareFacebook')?.setAttribute('href',
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(postUrl)}&quote=${encodeURIComponent(postTitle)}`
      );

      document.getElementById('shareWhatsApp')?.setAttribute('href',
        `https://wa.me/?text=${encodeURIComponent(postTitle)}%20${encodeURIComponent(postDescription)}%20${encodeURIComponent(postUrl)}`
      );

      document.getElementById('shareLinkedIn')?.setAttribute('href',
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`
      );

      document.getElementById('shareTwitter')?.setAttribute('href',
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}%20${encodeURIComponent(postDescription)}`
      );
    });
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  closeBtn?.addEventListener('click', () => {
    modal.style.display = 'none';
  });
});

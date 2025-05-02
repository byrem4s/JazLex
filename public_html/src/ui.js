// swiper.js
import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';  // Correcta ruta CSS

export function initializeSwiper() {
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 0, // Sin retraso entre imágenes
      disableOnInteraction: false, // No pausar la animación al interactuar
    },
    speed: 1000, // Velocidad de transición más rápida (ajustado a 1000ms para más fluidez)
    spaceBetween: 10, // Espacio entre las diapositivas
    loopAdditionalSlides: 3, // Añadir más slides para mejorar la fluidez del loop
  });
}

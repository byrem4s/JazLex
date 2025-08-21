const carousel = document.getElementById("carousel");
const slides = Array.from(carousel.children);
const slideWidth = slides[0].offsetWidth + 20; // 20px gap

// 1. Duplicar los primeros y últimos slides
const prependSlides = slides.slice(-3).map(slide => slide.cloneNode(true));
const appendSlides = slides.slice(0, 3).map(slide => slide.cloneNode(true));

prependSlides.forEach(slide => carousel.prepend(slide));
appendSlides.forEach(slide => carousel.append(slide));

let currentIndex = 3; // posición inicial después de prepended
const totalSlides = carousel.children.length;

// 2. Posicionar en el slide "real" inicial
carousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;

// 3. Función de actualización
function updateCarousel(direction) {
  currentIndex += direction;
  carousel.style.transition = "transform 0.4s ease-in-out";
  carousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}

// 4. Corrección después de transición si estamos en clones
carousel.addEventListener("transitionend", () => {
  if (currentIndex >= totalSlides - 3) {
    // saltar visualmente al inicio real
    currentIndex = 3;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  } else if (currentIndex < 3) {
    // saltar visualmente al final real
    currentIndex = totalSlides - 6;
    carousel.style.transition = "none";
    carousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }
});

// 5. Botones
document.getElementById("next").addEventListener("click", () => {
  updateCarousel(1);
});

document.getElementById("prev").addEventListener("click", () => {
  updateCarousel(-1);
});

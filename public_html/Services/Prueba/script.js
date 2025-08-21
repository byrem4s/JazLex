document.addEventListener("DOMContentLoaded"), () => {
    const carousel = document.getElementById("carousel");
    const slides = Array.from(carousel.children);
    const slideWidth = slides[0].offsetWidth + 20; // ancho + gap
    
    // Clonamos primeros y últimos slides para efecto infinito
    const prependSlides = slides.slice(-3).map(slide => slide.cloneNode(true));
    const appendSlides = slides.slice(0, 3).map(slide => slide.cloneNode(true));
    
    prependSlides.forEach(slide => carousel.prepend(slide));
    appendSlides.forEach(slide => carousel.append(slide));
    
    let currentIndex = 3; // posición inicial
    const totalSlides = carousel.children.length;
    carousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    
    /* --- NUEVO: INDICADORES DE CARRUSEL --- */
    const indicatorContainer = document.getElementById("carousel-indicators");
    const realSlidesCount = slides.length; // solo los originales
    
    for (let i = 0; i < realSlidesCount; i++) {
        const indicator = document.createElement("button");
        indicator.addEventListener("click", () => goToSlide(i));
        indicatorContainer.appendChild(indicator);
    }
    const indicators = indicatorContainer.querySelectorAll("button");
    updateIndicators();
    
    /* --- FUNCIONES --- */
    function updateCarousel(direction) {
        currentIndex += direction;
        carousel.style.transition = "transform 0.4s ease-in-out";
        carousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        updateIndicators();
    }
    
    function goToSlide(index) {
        currentIndex = index + 3; // ajustar índice por slides clonados
        carousel.style.transition = "transform 0.4s ease-in-out";
        carousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        updateIndicators();
    }
    
    // Ajuste cuando termina la animación (loop infinito)
    carousel.addEventListener("transitionend", () => {
        if (currentIndex >= totalSlides - 3) {
            currentIndex = 3;
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        } else if (currentIndex < 3) {
            currentIndex = totalSlides - 6;
            carousel.style.transition = "none";
            carousel.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
        }
        updateIndicators();
    });
    
    // Actualiza visual de indicadores
    function updateIndicators() {
        const realIndex = (currentIndex - 3 + realSlidesCount) % realSlidesCount;
        indicators.forEach((btn, idx) => {
            btn.classList.toggle("active", idx === realIndex);
        });
    }
    
    // Botones de navegación
    document.getElementById("next").addEventListener("click", () => {
        updateCarousel(1);
    });
    document.getElementById("prev").addEventListener("click", () => {
        updateCarousel(-1);
    });
}

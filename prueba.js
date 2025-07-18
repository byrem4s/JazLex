const images = Array.from(document.querySelectorAll('.main-image img, .side-image img'));
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener('click', () => openModal(index));
});

function openModal(index) {
  currentIndex = index;
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.classList.add("open");
  modalImg.src = images[currentIndex].getAttribute('data-full');
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.classList.remove("open");
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("modal-img").src = images[currentIndex].getAttribute('data-full');
}

document.addEventListener('keydown', function (e) {
  if (document.getElementById("modal").classList.contains("open")) {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowLeft") changeImage(-1);
    if (e.key === "ArrowRight") changeImage(1);
  }
});

document.getElementById("modal").addEventListener('click', (e) => {
  if (e.target.id === "modal") {
    closeModal();
  }
});

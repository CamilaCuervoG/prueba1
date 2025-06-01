const images = document.querySelectorAll('.carousel-images img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let current = 0;

function showImage(index) {
  images.forEach((img, i) => {
    img.classList.remove('active');
    if (i === index) {
      img.classList.add('active');
    }
  });
}

next.addEventListener('click', () => {
  current = (current + 1) % images.length;
  showImage(current);
});

prev.addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

// Para que inicie con la primera imagen activa
showImage(current);

setInterval(() => {
  current = (current + 1) % images.length;
  showImage(current);
}, 5000);
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.menucontent');

  // Alternar menú al hacer clic en el botón
  hamburger.addEventListener('click', function (event) {
    event.stopPropagation();
    menu.classList.toggle('active');
  });

  // Cerrar el menú si se hace clic fuera de él
  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
      menu.classList.remove('active');
    }
  });
});

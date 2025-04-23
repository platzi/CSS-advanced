// Script para alternar el submenú al hacer clic en un ítem principal
document.querySelectorAll('.has-submenu > a').forEach(item => {
  item.addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el enlace navegue
    const parent = this.parentElement; // Obtiene el <li> padre
    parent.classList.toggle('open'); // Alterna la clase 'open'
  });
});
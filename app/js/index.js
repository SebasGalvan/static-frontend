const menu = document.querySelector('.hamburger');
menu.addEventListener('click', toggleMenu, false);

document.querySelector('.menu-link-inicio').addEventListener('click', hidePanel, false);
document.querySelector('.menu-link-experiencia').addEventListener('click', hidePanel, false);
document.querySelector('.menu-link-educacion').addEventListener('click', hidePanel, false);
document.querySelector('.menu-link-skills').addEventListener('click', hidePanel, false);
document.querySelector('.menu-link-proyectos').addEventListener('click', hidePanel, false);
document.querySelector('.menu-link-contacto').addEventListener('click', hidePanel, false);


function toggleMenu (event) {
  this.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
  event.preventDefault();
}

function hidePanel() {
  menu.classList.toggle('is-active');
  document.querySelector( ".menuppal" ).classList.toggle("is_active");
}
/* FUNCIÓN PARA BOTÓN SECCIÓN */
var enlaces = document.querySelectorAll('.link_nav_section');

enlaces.forEach(function(enlace) {
  enlace.addEventListener('click', function(event) {
    event.preventDefault(); 

    enlaces.forEach(function(enlace) {
      enlace.classList.remove('link_nav_section-active');
    });

    enlace.classList.add('link_nav_section-active');

    var destino = enlace.getAttribute('href');

    document.querySelector(destino).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
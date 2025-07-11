let menuVisible = false;

// Función que oculta o muestra el menu
function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList ="";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    // Ocultar el menu una vez que se selecciona una opción
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Función que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("qgis");
        habilidades[3].classList.add("imageanalysis");
        habilidades[4].classList.add("enginecode");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}

// Detectar el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() {
    efectoHabilidades();
}; 

$(document).ready(function(){
    $('.carousel-container').slick({
        autoplay: true, // Autoplay activado
        autoplaySpeed: 2000, // Velocidad de cambio de imagen en milisegundos
        arrows: false, // Ocultar las flechas de navegación
        dots: true // Mostrar los puntos de navegación
    });
});


let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    // Actualizar el índice del slide actual
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

    // Mover el contenedor a la posición correcta
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.style.transform = `translateX(-${currentSlide * 100}%)`;
}




  const formulario = document.getElementById("formulario");
  const mensaje = document.getElementById("form-mensaje");

  formulario.addEventListener("submit", async function(e) {
    e.preventDefault();
    const data = new FormData(formulario);

    const res = await fetch(formulario.action, {
      method: formulario.method,
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    });

    if (res.ok) {
      formulario.reset();
      mensaje.style.display = "block";
    } else {
      alert("Hubo un error. Intenta nuevamente más tarde.");
    }
  });

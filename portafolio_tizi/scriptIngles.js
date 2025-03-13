let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar'); // Asegúrate de que el selector sea correcto

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections1 = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections1.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
            });

            let linkActivo = document.querySelector('header nav a[href*=' + id + ']');
            if (linkActivo) {
                linkActivo.classList.add('active');
            }
        }
    });

    let header = document.querySelector('header');
    if (header) {
        header.classList.toggle('sticky', window.scrollY > 100);
    }

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Detecta cuando la sección entra en el viewport
const contactSection = document.getElementById('contact');

function isInView() {
    const rect = contactSection.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function handleScroll() {
    if (isInView()) {
        contactSection.classList.add('visible');
    }
}

window.addEventListener('scroll', handleScroll);

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .servicios, .portfolio-box, .contact form', { origin: 'bottom' });

// Animaciones adicionales
ScrollReveal().reveal('.contratarme', { origin: 'left' });
ScrollReveal().reveal('.contratarme-item', { origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });
ScrollReveal().reveal('.shorts', { origin: 'bottom' });
ScrollReveal().reveal('.shorts h2', { origin: 'top' });


document.addEventListener("DOMContentLoaded", function () {
    ScrollReveal().reveal('.habilidades', { 
        origin: 'top', 
        distance: '50px', 
        duration: 1000, 
        delay: 100,  // Reducimos el delay para que no tarde en mostrarse
        reset: true 
    });

    ScrollReveal().reveal('.skill-box', { 
        origin: 'bottom', 
        distance: '50px', 
        duration: 800, 
        delay: 100,  // Bajamos el delay inicial
        interval: 200, // Esto hace que las cajas aparezcan una tras otra
        reset: true 
    });
});

// Animación para el h1 (entra desde la izquierda)
ScrollReveal().reveal('h1', { origin: 'left' });

const typingText = document.getElementById('typing-text');
const text = "Video editor.";
let i = 0;
let isDeleting = false;

function typeWriter() {
    if (isDeleting) {
        typingText.textContent = text.substring(0, i--);
    } else {
        typingText.textContent = text.substring(0, i++);
    }

    if (!isDeleting && i === text.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000);
    } else if (isDeleting && i === 0) {
        isDeleting = false;
    }

    setTimeout(typeWriter, isDeleting ? 100 : 200); // Controla la velocidad de escritura/borrado
}

typeWriter(); // Iniciar la animación



const typingText1 = document.getElementById('typing-text');
const text1 = "Editor de video";
let i1 = 0;
let isDeleting1 = false;

function typeWriter() {
    if (isDeleting) {
        typingText.textContent = text.substring(0, i--);
    } else {
        typingText.textContent = text.substring(0, i++);
    }

    if (!isDeleting && i === text.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000);
    } else if (isDeleting && i === 0) {
        isDeleting = false;
    }

    setTimeout(typeWriter, isDeleting ? 100 : 200); // Controla la velocidad de escritura/borrado
}

typeWriter(); 



document.querySelectorAll('.skill-box').forEach(skillBox => {
    skillBox.addEventListener('mouseenter', () => {
        skillBox.style.transition = 'all 0.4s ease-out'; // Acelera el efecto
    });

    skillBox.addEventListener('mouseleave', () => {
        skillBox.style.transition = 'all 0.3s ease-in'; // Desacelera el efecto
    });
});


window.addEventListener('scroll', function() {
    const section = document.querySelector('.contact');
    const sectionPosition = section.getBoundingClientRect();
    
    if (sectionPosition.top <= window.innerHeight && sectionPosition.bottom >= 0) {
        section.classList.add('show');  // Añadimos la clase 'show' cuando está visible
    }
});




document.addEventListener("DOMContentLoaded", function () {
    const text = document.getElementById("animated-text");

    // Hace que el color de fondo se extienda por todo el texto
    setTimeout(() => {
        text.style.backgroundSize = "100% 100%";
    }, 500);
});





document.addEventListener("DOMContentLoaded", function () {
    const videos = document.querySelectorAll('.shorts-video');
    const overlay = document.getElementById('overlay');

    videos.forEach(video => {
        video.addEventListener('click', function () {
            // Expande el video
            video.classList.add('expanded');
            overlay.style.display = 'flex';
        });
    });

    // Cerrar el video cuando el overlay sea clickeado
    overlay.addEventListener('click', function () {
        const expandedVideo = document.querySelector('.shorts-video.expanded');
        if (expandedVideo) {
            expandedVideo.classList.remove('expanded');
            overlay.style.display = 'none';
        }
    });
});
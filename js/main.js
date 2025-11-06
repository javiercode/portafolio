// main.js - Funcionalidades del portafolio

$(document).ready(function() {
    // Smooth scroll para navegación
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });

    // Animación de elementos al hacer scroll
    function animateOnScroll() {
        $('.c-timeline__item, .c-skill-category, .c-education-item').each(function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            if (elementBottom > viewportTop && elementTop < viewportBottom) {
                $(this).addClass('animate-in');
            }
        });
    }

    // Ejecutar al cargar y al hacer scroll
    animateOnScroll();
    $(window).on('scroll', animateOnScroll);

    // Efecto de escritura en el título
    const title = "Javier Elvis Canqui Llusco";
    let i = 0;
    const titleElement = $('.c-hero__title');
    
    function typeWriter() {
        if (i < title.length) {
            titleElement.text(titleElement.text() + title.charAt(i));
            i++;
            setTimeout(typeWriter, 100);
        }
    }

    // Iniciar efecto de escritura después de 1 segundo
    setTimeout(() => {
        titleElement.text('');
        typeWriter();
    }, 1000);

    // Detectar sistema operativo y navegador
    function detectPlatform() {
        const platform = platform.os.family || 'Unknown OS';
        const browser = platform.name || 'Unknown Browser';
        
        console.log(`Platform: ${platform}, Browser: ${browser}`);
        
        // Puedes usar esta información para personalizar la experiencia
        if (platform.includes('Windows')) {
            $('body').addClass('windows-os');
        } else if (platform.includes('Mac')) {
            $('body').addClass('mac-os');
        } else if (platform.includes('Linux')) {
            $('body').addClass('linux-os');
        }
    }

    // Inicializar detección de plataforma cuando esté disponible
    if (typeof platform !== 'undefined') {
        detectPlatform();
    }

    // Manejar descarga de CV
    window.downloadCV = function() {
        alert('Función de descarga de CV será implementada. Por ahora, contacta a javier.elvis.code@gmail.com');
        // En el futuro, puedes implementar:
        // window.open('assets/documents/cv-javier-canqui.pdf', '_blank');
    };

    // Efectos de hover mejorados
    $('.c-skill').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.1)',
                'box-shadow': '0 4px 15px rgba(59, 113, 255, 0.3)'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'box-shadow': 'none'
            });
        }
    );

    // Navegación activa
    function updateActiveNav() {
        var scrollPosition = $(window).scrollTop();
        
        $('section').each(function() {
            var target = $(this);
            var id = target.attr('id');
            var offset = target.offset().top - 100;
            var height = target.outerHeight();
            
            if (scrollPosition >= offset && scrollPosition < offset + height) {
                $('.c-nav-list__link').removeClass('active');
                $('.c-nav-list__link[href="#' + id + '"]').addClass('active');
            }
        });
    }

    $(window).on('scroll', updateActiveNav);
    updateActiveNav();

    console.log('Portfolio de Javier Canqui cargado correctamente');
});

// Animaciones con Anime.js si está disponible
if (typeof anime !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        // Animación de entrada para el hero
        anime({
            targets: '.c-hero__subtitle',
            translateY: [50, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: 1500,
            easing: 'easeOutExpo'
        });

        anime({
            targets: '.c-hero__description',
            translateY: [30, 0],
            opacity: [0, 1],
            duration: 800,
            delay: 2000,
            easing: 'easeOutExpo'
        });

        anime({
            targets: '.c-hero__links .c-btn',
            translateY: [40, 0],
            opacity: [0, 1],
            duration: 600,
            delay: function(el, i) {
                return 2500 + (i * 200);
            },
            easing: 'easeOutExpo'
        });
    });
}
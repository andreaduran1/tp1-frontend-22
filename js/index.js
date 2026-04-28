const botonIntegrantes = document.querySelector(".index-integrantes-btn");
const listaIntegrantes = document.getElementById("integrantes");

botonIntegrantes.addEventListener("click", function () {
    listaIntegrantes.classList.toggle("activo");
});

// LogoSplash animado
document.addEventListener("DOMContentLoaded", () => {
    const realLogo = document.querySelector(".index-logo");
    if (!realLogo) return;

    // Ocultamos el logo real temporalmente
    realLogo.style.opacity = '0';

    // Bloqueamos el scroll mientras dura la animación
    document.body.style.overflow = 'hidden';

    // Creamos el contenedor del Splash Screen
    const splash = document.createElement('div');
    splash.style.position = 'fixed';
    splash.style.top = '0';
    splash.style.left = '0';
    splash.style.width = '100vw';
    splash.style.height = '100vh';
    splash.style.backgroundColor = 'var(--bordo)';
    splash.style.zIndex = '9999';
    splash.style.display = 'flex';
    splash.style.justifyContent = 'center';
    splash.style.alignItems = 'center';
    splash.style.transition = 'background-color 0.6s ease-in-out, opacity 0.5s';

    // Creamos el logo del Splash Screen
    const splashLogo = document.createElement('img');
    splashLogo.src = realLogo.src; // Usa la misma imagen
    splashLogo.style.height = '250px'; // Más grande para el centro
    splashLogo.style.filter = 'drop-shadow(5px 5px 0px #000)';

    splash.appendChild(splashLogo);
    document.body.appendChild(splash);

    // Animación Pop-in estilo cómic en el centro
    splashLogo.animate([
        { transform: 'scale(0) rotate(-20deg)', opacity: 0 },
        { transform: 'scale(1.2) rotate(10deg)', opacity: 1, offset: 0.6 },
        { transform: 'scale(0.9) rotate(-5deg)', opacity: 1, offset: 0.8 },
        { transform: 'scale(1) rotate(0deg)', opacity: 1 }
    ], {
        duration: 800,
        easing: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)', // easeOutBack
        fill: 'forwards'
    });

    // Esperamos un poco y lo desaparecemos en el medio
    setTimeout(() => {
        // Animamos la salida del logo central (ej. se achica y desaparece)
        const exitAnim = splashLogo.animate([
            { transform: 'scale(1) rotate(0deg)', opacity: 1 },
            { transform: 'scale(0.5) rotate(10deg)', opacity: 0 }
        ], {
            duration: 400,
            easing: 'ease-in',
            fill: 'forwards'
        });

        // Cuando termina de desaparecer, limpiamos y mostramos la página
        exitAnim.onfinish = () => {
            splash.style.opacity = '0'; // Desvanece el fondo bordó
            realLogo.style.opacity = '1'; // Muestra el logo real
            document.body.style.overflow = 'auto'; // Restauramos el scroll

            // Removemos el div del DOM luego del fade out
            setTimeout(() => splash.remove(), 500);
        };
    }, 1500); // 1.5 segundos de pausa en el centro
});
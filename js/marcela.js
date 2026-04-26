// Función para mostrar/ocultar desafío de ingenio en marcela.html
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM cargado');
    const toggleButton = document.getElementById('toggle-info');
    const desafio = document.getElementById('desafio');
    const resultado = document.getElementById('resultado');
    const opcionButtons = document.querySelectorAll('.opcion-btn');

    console.log('Botón:', toggleButton);
    console.log('Div desafio:', desafio);

    if (toggleButton && desafio) {
        toggleButton.addEventListener('click', function() {
            console.log('Botón clickeado');
            if (desafio.style.display === 'none' || desafio.style.display === '') {
                desafio.style.display = 'block';
                toggleButton.textContent = 'Ocultar desafío';
                resultado.style.display = 'none'; // Ocultar resultado anterior
                resultado.textContent = '';
            } else {
                desafio.style.display = 'none';
                toggleButton.textContent = 'Iniciar desafío de ingenio';
            }
        });

        // Event listeners para las opciones
        opcionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const isCorrect = this.getAttribute('data-correct') === 'true';
                if (isCorrect) {
                    resultado.textContent = '¡Correcto! Has acertado.';
                    resultado.style.color = 'green';
                } else {
                    resultado.textContent = 'Incorrecto. Intenta de nuevo.';
                    resultado.style.color = 'red';
                }
                resultado.style.display = 'block';
            });
        });
    } else {
        console.error('Elementos no encontrados');
    }
});
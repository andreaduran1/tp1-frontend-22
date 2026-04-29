document.addEventListener('DOMContentLoaded', () => {
    // 1. Contador de Caracteres
    const textarea = document.getElementById('mensaje');
    const contador = document.getElementById('caracteres');
    
    textarea.addEventListener('input', () => {
        contador.textContent = textarea.value.length;
    });

    // 2. Info de Photoshop en Carrusel
    const items = document.querySelectorAll('.carousel-item-collage');
    const infoBox = document.getElementById('ps-info-box');
    const infoText = document.getElementById('ps-text');

    items.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const descripcion = this.getAttribute('data-ps');
            if (descripcion) {
                infoText.textContent = descripcion;
                infoBox.classList.remove('hidden');
            }
        });
        item.addEventListener('mouseleave', () => infoBox.classList.add('hidden'));
    });

    // 3. Validación de Botón Enviar
    const form = document.querySelector('form');
    const btnEnviar = document.querySelector('.siguiente');

    form.addEventListener('input', () => {
        if (form.checkValidity()) {
            btnEnviar.style.backgroundColor = '#ffff00'; // Resalta en amarillo
            btnEnviar.style.color = '#000';
        }
    });
});
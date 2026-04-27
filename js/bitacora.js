// Función para mostrar/ocultar descripciones en bitacora.html
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.bitacora-toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const descripcion = this.parentElement.nextElementSibling; // El div .descripcion
            if (descripcion.style.display === 'none' || descripcion.style.display === '') {
                descripcion.style.display = 'block';
                this.textContent = '−'; // Cambiar a menos
            } else {
                descripcion.style.display = 'none';
                this.textContent = '+'; // Cambiar a más
            }
        });
    });
});
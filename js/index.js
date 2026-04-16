const botonIntegrantes = document.querySelector(".index-integrantes-btn");
const listaIntegrantes = document.getElementById("integrantes");

botonIntegrantes.addEventListener("click", function () {
    listaIntegrantes.classList.toggle("activo");
});
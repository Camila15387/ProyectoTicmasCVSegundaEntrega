document.getElementById('boton-desplegar').onclick = function () {
    console.log("Se captura el evento click desplegar");
    document.getElementById("habilidad").innerHTML = "Cuento con distinguida capacidad de gestión y análisis, me destaca mi eficiencia en la resolucion de problemas y trabajo en equipo.";
}

document.getElementById('boton-ocultar').addEventListener ('click', function () {
    console.log("Se captura el evento click ocultar");
    document.getElementById("habilidad").style.display = 'none';
});

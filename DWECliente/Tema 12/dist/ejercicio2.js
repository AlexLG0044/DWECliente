"use strict";
// Ejercicio 2 - Funciones tipadas
// Función que calcula la media de dos números
function calcularMedia(num1, num2) {
    return (num1 + num2) / 2;
}
// Función que se ejecuta al pulsar el botón
function ejecutarEjercicio2() {
    console.log("=== EJERCICIO 2: FUNCIONES TIPADAS ===");
    // Llamada correcta
    const media = calcularMedia(8, 6);
    console.log("La media de 8 y 6 es:", media);
    // Llamada incorrecta (comentada porque TypeScript detecta el error)
    // const mediaIncorrecta = calcularMedia("8", 6);
    // Error: El argumento de tipo 'string' no se puede asignar al parámetro de tipo 'number'
    console.log("======================================\n");
}
// Event listener para el botón
document.getElementById("btn-ej2")?.addEventListener("click", ejecutarEjercicio2);

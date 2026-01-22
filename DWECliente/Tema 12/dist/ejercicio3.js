"use strict";
// Ejercicio 3 - Parámetros opcionales
// Función con parámetro opcional
function saludar(nombre) {
    if (nombre) {
        console.log(`Hola, ${nombre}.`);
    }
    else {
        console.log("Hola, invitado.");
    }
}
// Función que se ejecuta al pulsar el botón
function ejecutarEjercicio3() {
    console.log("=== EJERCICIO 3: PARÁMETROS OPCIONALES ===");
    // Llamada con nombre
    saludar("Alex");
    // Llamada sin nombre
    saludar();
    console.log("==========================================\n");
}
// Event listener para el botón
document.getElementById("btn-ej3")?.addEventListener("click", ejecutarEjercicio3);

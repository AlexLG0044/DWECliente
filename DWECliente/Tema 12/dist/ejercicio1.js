"use strict";
// Ejercicio 1 - Tipos básicos
// Declaración de variables con tipos específicos
let nombreAlumno = "Alejandro Laguardia";
let edad = 20;
let estaMatriculado = true;
let notas = [8.5, 7.0, 9.2, 6.8, 8.0];
const centroEducativo = "Davante Medac";
// Función que se ejecuta al pulsar el botón
function ejecutarEjercicio1() {
    console.log("=== EJERCICIO 1: TIPOS BÁSICOS ===");
    console.log("Nombre del alumno:", nombreAlumno);
    console.log("Edad:", edad);
    console.log("¿Está matriculado?:", estaMatriculado);
    console.log("Notas:", notas);
    console.log("Centro educativo:", centroEducativo);
    console.log("================================\n");
}
// Event listener para el botón
document.getElementById("btn-ej1")?.addEventListener("click", ejecutarEjercicio1);

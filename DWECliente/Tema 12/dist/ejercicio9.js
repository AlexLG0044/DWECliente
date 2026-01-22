"use strict";
function toUpperSeguro(valor) {
    if (typeof valor === "string") {
        return valor.toUpperCase();
    }
    else {
        throw new Error("El valor no es un texto");
    }
}

function ejecutarEjercicio9() {
    console.log("=== EJERCICIO 9: USO DE UNKNOWN ===");

    try {
        const resultado1 = toUpperSeguro("A tope");
        console.log("Texto en mayúsculas:", resultado1);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
    }

    try {
        const resultado2 = toUpperSeguro(12345);
        console.log("Resultado:", resultado2);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error capturado:", error.message);
        }
    }

    try {
        const resultado3 = toUpperSeguro(true);
        console.log("Resultado:", resultado3);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error capturado:", error.message);
        }
    }
    console.log("===================================\n");
}

document.getElementById("btn-ej9")?.addEventListener("click", ejecutarEjercicio9);

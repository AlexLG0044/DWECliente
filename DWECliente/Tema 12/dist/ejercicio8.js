"use strict";
function doblarPositivo(n) {
    if (n < 0) {
        throw new Error("El número no puede ser negativo");
    }
    return n * 2;
}

function ejecutarEjercicio8() {
    console.log("=== EJERCICIO 8: MANEJO DE ERRORES ===");

    try {
        const resultado1 = doblarPositivo(5);
        console.log("El doble de 5 es:", resultado1);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
    }

    try {
        const resultado2 = doblarPositivo(-3);
        console.log("El doble de -3 es:", resultado2);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error capturado:", error.message);
        }
    }
    console.log("======================================\n");
}

document.getElementById("btn-ej8")?.addEventListener("click", ejecutarEjercicio8);

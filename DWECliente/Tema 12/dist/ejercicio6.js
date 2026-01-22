"use strict";
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    presentarse() {
        console.log(`Me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

function ejecutarEjercicio6() {
    console.log("=== EJERCICIO 6: CLASES Y ENCAPSULACIÓN ===");

    const persona1 = new Persona("Alex", 21);

    persona1.presentarse();

    console.log("Nombre (propiedad pública):", persona1.nombre);

    // console.log("Edad (propiedad privada):", persona1.edad);

    console.log("===========================================\n");
}

document.getElementById("btn-ej6")?.addEventListener("click", ejecutarEjercicio6);

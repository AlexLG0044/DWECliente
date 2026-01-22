"use strict";
class EmpleadoEmpresa {
    constructor(id, nombre, sueldoMensual) {
        this.id = id;
        this.nombre = nombre;
        this.sueldoMensual = sueldoMensual;
    }
    
    calcularSueldoAnual() {
        return this.sueldoMensual * 12;
    }
}

function ejecutarEjercicio7() {
    console.log("=== EJERCICIO 7: CLASES E INTERFACES ===");

    const empleado1 = new EmpleadoEmpresa(1, "Alejandro Laguardia", 2500);
    console.log(`Empleado: ${empleado1.nombre}`);
    console.log(`Sueldo mensual: ${empleado1.sueldoMensual}€`);
    console.log(`Sueldo anual: ${empleado1.calcularSueldoAnual()}€`);
    console.log("========================================\n");
}

document.getElementById("btn-ej7")?.addEventListener("click", ejecutarEjercicio7);

"use strict";

function ejecutarEjercicio5() {
    console.log("=== EJERCICIO 5: ARRAYS DE INTERFACES ===");

    const productos = [
        { id: 1, nombre: "Portátil", precio: 1399.99 },
        { id: 2, nombre: "Ratón", precio: 25.50 },
        { id: 3, nombre: "Teclado", precio: 65.00 }
    ];

    console.log("Lista de productos:");
    productos.forEach((producto) => {
        console.log(`- ${producto.nombre}: ${producto.precio}€`);
    });

    const precioTotal = productos.reduce((total, producto) => total + producto.precio, 0);
    console.log(`\nPrecio total de todos los productos: ${precioTotal.toFixed(2)}€`);
    console.log("=========================================\n");
}

document.getElementById("btn-ej5")?.addEventListener("click", ejecutarEjercicio5);

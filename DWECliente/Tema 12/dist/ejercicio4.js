"use strict";
// Ejercicio 4 - Interfaces como tipo
// Función que se ejecuta al pulsar el botón
function ejecutarEjercicio4() {
    console.log("=== EJERCICIO 4: INTERFACES COMO TIPO ===");
    // Variable de tipo Producto con objeto correcto
    const producto1 = {
        id: 1,
        nombre: "Televisor",
        precio: 899.99
    };
    console.log("Producto correcto:", producto1);
    // Objeto incorrecto
    // const producto2: Producto = {
    //     id: 2,
    //     nombre: "Teclado"
    //     // Falta la propiedad 'precio'
    // };
    // Error: La propiedad 'precio' no existe en el tipo
    console.log("=========================================\n");
}
// Event listener para el botón
document.getElementById("btn-ej4")?.addEventListener("click", ejecutarEjercicio4);

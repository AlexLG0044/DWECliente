interface Producto {
    id: number;
    nombre: string;
    precio: number;
}


function ejecutarEjercicio4(): void {
    console.log("=== EJERCICIO 4: INTERFACES COMO TIPO ===");
    

    const producto1: Producto = {
        id: 1,
        nombre: "Televisor",
        precio: 899.99
    };
    
    console.log("Producto correcto:", producto1);
    

    // const producto2: Producto = {
    //     id: 2,
    //     nombre: "Teclado"  
    // };
    
    
    console.log("=========================================\n");
}


document.getElementById("btn-ej4")?.addEventListener("click", ejecutarEjercicio4);
function calcularMedia(num1: number, num2: number): number {
    return (num1 + num2) / 2;
}


function ejecutarEjercicio2(): void {
    console.log("=== EJERCICIO 2: FUNCIONES TIPADAS ===");
    

    const media: number = calcularMedia(8, 6);
    console.log("La media de 8 y 6 es:", media);
    

    // const mediaIncorrecta = calcularMedia("8", 6);
    
    
    console.log("======================================\n");
}


document.getElementById("btn-ej2")?.addEventListener("click", ejecutarEjercicio2);
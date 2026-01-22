function saludar(nombre?: string): void {
    if (nombre) {
        console.log(`Hola, ${nombre}.`);
    } else {
        console.log("Hola, invitado.");
    }
}


function ejecutarEjercicio3(): void {
    console.log("=== EJERCICIO 3: PARÁMETROS OPCIONALES ===");
    

    saludar("Alex");
    

    saludar();
    
    console.log("==========================================\n");
}


document.getElementById("btn-ej3")?.addEventListener("click", ejecutarEjercicio3);
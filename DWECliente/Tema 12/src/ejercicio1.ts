let nombreAlumno: string = "Alejandro Laguardia";
let edad: number = 20;
let estaMatriculado: boolean = true;
let notas: number[] = [8.5, 7.0, 9.2, 6.8, 8.0];
const centroEducativo: string = "Davante Medac";


function ejecutarEjercicio1(): void {
    console.log("=== EJERCICIO 1: TIPOS BÁSICOS ===");
    console.log("Nombre del alumno:", nombreAlumno);
    console.log("Edad:", edad);
    console.log("¿Está matriculado?:", estaMatriculado);
    console.log("Notas:", notas);
    console.log("Centro educativo:", centroEducativo);
    console.log("================================\n");
}


document.getElementById("btn-ej1")?.addEventListener("click", ejecutarEjercicio1);
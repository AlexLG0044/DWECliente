interface Alumno {
    id: number;
    nombre: string;
    notas: number[];
}

class AlumnoApp implements Alumno {
    id: number;
    nombre: string;
    notas: number[];
    
    constructor(id: number, nombre: string, notas: number[]) {
        this.id = id;
        this.nombre = nombre;
        this.notas = notas;
    }

    calcularNotaMedia(): number {
        if (this.notas.length === 0) return 0;
        const suma = this.notas.reduce((total, nota) => total + nota, 0);
        return suma / this.notas.length;
    }
    
    obtenerResumen(): string {
        const media = this.calcularNotaMedia();
        return `Alumno: ${this.nombre} (ID: ${this.id}) - Notas: [${this.notas.join(", ")}] - Media: ${media.toFixed(2)}`;
    }
}


function ejecutarEjercicio10(): void {
    console.log("=== EJERCICIO 10: MINI PROYECTO - GESTIÓN DE ALUMNOS ===");
    

    const alumnos: AlumnoApp[] = [
        new AlumnoApp(1, "Juan Verdegay", [8.5, 9.0, 7.5, 8.0]),
        new AlumnoApp(2, "Jordi Marquez", [6.0, 7.0, 6.5, 7.5]),
        new AlumnoApp(3, "Alejandro Laguardia", [9.5, 9.0, 10.0, 9.5])
    ];
    

    console.log("\nResumen de alumnos:");
    console.log("-------------------");
    alumnos.forEach(alumno => {
        console.log(alumno.obtenerResumen());
    });
    

    let sumaTodasNotas = 0;
    let totalNotas = 0;
    
    alumnos.forEach(alumno => {
        alumno.notas.forEach(nota => {
            sumaTodasNotas += nota;
            totalNotas++;
        });
    });
    
    const mediaGlobal = totalNotas > 0 ? sumaTodasNotas / totalNotas : 0;
    
    console.log("\n-------------------");
    console.log(`Media global de todos los alumnos: ${mediaGlobal.toFixed(2)}`);
    console.log("========================================================\n");
}

document.getElementById("btn-ej10")?.addEventListener("click", ejecutarEjercicio10);
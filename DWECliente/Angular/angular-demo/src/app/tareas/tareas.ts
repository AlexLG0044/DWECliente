import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarea {
  id: number;
  texto: string;
  completada: boolean;
}

@Component({
  selector: 'app-tareas',
  imports: [CommonModule, FormsModule],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas implements OnInit {
  tareas: Tarea[] = [];
  nuevaTarea: string = '';
  proximoId: number = 1;

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      const tareasParsed = JSON.parse(tareasGuardadas);
      this.tareas = tareasParsed;
      if (tareasParsed.length > 0) {
        this.proximoId = Math.max(...tareasParsed.map((t: Tarea) => t.id)) + 1;
      }
    }
  }

  guardarTareas(): void {
    localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }

  agregarTarea(): void {
    if (this.nuevaTarea.trim()) {
      const tarea: Tarea = {
        id: this.proximoId++,
        texto: this.nuevaTarea.trim(),
        completada: false
      };
      this.tareas.push(tarea);
      this.nuevaTarea = '';
      this.guardarTareas();
    }
  }

  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(t => t.id !== id);
    this.guardarTareas();
  }

  toggleTarea(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
      this.guardarTareas();
    }
  }

  get contadorTareas(): number {
    return this.tareas.length;
  }

  get contadorCompletadas(): number {
    return this.tareas.filter(t => t.completada).length;
  }
}

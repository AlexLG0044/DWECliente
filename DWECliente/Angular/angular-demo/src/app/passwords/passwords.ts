import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-passwords',
  imports: [CommonModule, FormsModule],
  templateUrl: './passwords.html',
  styleUrl: './passwords.css',
})
export class Passwords {

  longitud: number = 12;
  incluirMayusculas: boolean = true;
  incluirMinusculas: boolean = true;
  incluirNumeros: boolean = true;
  incluirSimbolos: boolean = false;

  contrasena: string = '';
  copiada: boolean = false;


  private mayusculas: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  private minusculas: string = 'abcdefghijklmnopqrstuvwxyz';
  private numeros: string = '0123456789';
  private simbolos: string = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  generarContrasena(): void {
    let caracteres: string = '';

    if (this.incluirMayusculas) caracteres += this.mayusculas;
    if (this.incluirMinusculas) caracteres += this.minusculas;
    if (this.incluirNumeros) caracteres += this.numeros;
    if (this.incluirSimbolos) caracteres += this.simbolos;

    if (caracteres.length === 0) {
      alert('Debes seleccionar al menos una opción');
      return;
    }

    this.contrasena = '';
    for (let i = 0; i < this.longitud; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      this.contrasena += caracteres[indice];
    }

    this.copiada = false;
  }

  copiarAlPortapapeles(): void {
    if (this.contrasena) {
      navigator.clipboard.writeText(this.contrasena).then(() => {
        this.copiada = true;
        setTimeout(() => {
          this.copiada = false;
        }, 2000);
      }).catch(() => {
        alert('Error al copiar al portapapeles');
      });
    }
  }
}

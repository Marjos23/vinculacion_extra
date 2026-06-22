import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  // Corregido: todo junto para que TypeScript no chille
  private cantidadFormularios: number = 0;

  obtenerCantidad() {
    return this.cantidadFormularios;
  }

  agregarFormulario() {
    this.cantidadFormularios++;
  }

  limpiarFormularios() {
    this.cantidadFormularios = 0;
  }
}
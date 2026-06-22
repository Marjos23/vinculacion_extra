import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink, CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent implements OnInit, OnDestroy {
  cargando: boolean = false;
  mensajeExito: boolean = false;
  textoExito: string = '';
  
  enviando: boolean = false;
  cantidadListos: number = 0;

  // NUEVA VARIABLE: Guarda si el usuario tiene internet o no
  isOnline: boolean = true;

  constructor(private storage: StorageService) {}

  ngOnInit() {
    this.cantidadListos = this.storage.obtenerCantidad();

    // 1. Revisar el estado inicial del internet al cargar la app
    this.isOnline = navigator.onLine;

    // 2. Escuchar en tiempo real si el internet regresa o se corta
    window.addEventListener('online', this.actualizarEstadoRed);
    window.addEventListener('offline', this.actualizarEstadoRed);
  }

  ngOnDestroy() {
    // Buena práctica: limpiar los escuchadores cuando se salga de la pantalla
    window.removeEventListener('online', this.actualizarEstadoRed);
    window.removeEventListener('offline', this.actualizarEstadoRed);
  }

  // Función de flecha para que Angular no pierda el control de las variables
  actualizarEstadoRed = () => {
    this.isOnline = navigator.onLine;
  };

  sincronizarFormularios() {
    // Si no hay internet, no permitimos sincronizar formularios nuevos
    if (!this.isOnline) {
      alert('No puedes descargar formularios nuevos sin conexión a internet.');
      return;
    }

    this.cargando = true;
    this.mensajeExito = false;

    setTimeout(() => {
      this.cargando = false;
      this.textoExito = 'Se descargaron 2 formularios nuevos en blanco.';
      this.mensajeExito = true;
    }, 2500);
  }

  enviarFormulariosAlServidor() {
    if (this.cantidadListos === 0) return;

    // Si no hay internet, avisamos que se quedan guardados localmente
    if (!this.isOnline) {
      alert('¡Estás offline! Los datos se mantendrán seguros en tu celular hasta que recuperes conexión.');
      return;
    }

    this.enviando = true;

    setTimeout(() => {
      this.enviando = false;
      this.storage.limpiarFormularios();
      this.cantidadListos = 0;
      
      this.textoExito = '¡Todos los formularios se subieron al servidor con éxito!';
      this.mensajeExito = true;
    }, 3000);
  }
}
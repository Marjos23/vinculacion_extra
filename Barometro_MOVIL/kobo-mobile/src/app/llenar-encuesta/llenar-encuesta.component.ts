import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router'; // <-- Importamos ActivatedRoute
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-llenar-encuesta',
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './llenar-encuesta.component.html',
  styleUrl: './llenar-encuesta.component.css'
})
export class LlenarEncuestaComponent implements OnInit {
  // Aquí guardaremos el ID de la encuesta seleccionada (1 o 2)
  encuestaId: string | null = null;

  // Estructura para guardar las respuestas de la Encuesta 1 (Comunitaria)
  respuestasComunidad = {
    nombreEncuestado: '',
    edad: null,
    sector: '',
    observaciones: ''
  };

  // NUEVA: Estructura para las respuestas de la Encuesta 2 (Agrícola)
  respuestasAgricola = {
    nombreProductor: '',
    tipoCultivo: '',
    hectareas: null,
    usaRiego: ''
  };

  constructor(
    private router: Router, 
    private route: ActivatedRoute, // Inyectamos para leer la URL
    private storage: StorageService
  ) {}

  ngOnInit() {
    // Capturamos el parámetro 'id' que configuramos en las rutas (/llenar/:id)
    this.encuestaId = this.route.snapshot.paramMap.get('id');
  }

  guardarFormulario() {
    this.storage.agregarFormulario();
    alert('¡Formulario guardado con éxito en la memoria local!');
    this.router.navigate(['/']);
  }
}
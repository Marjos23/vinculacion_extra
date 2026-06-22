import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // <-- Importante para los botones

@Component({
  selector: 'app-lista-encuestas',
  imports: [RouterLink], // <-- Agregamos RouterLink aquí
  templateUrl: './lista-encuestas.component.html',
  styleUrl: './lista-encuestas.component.css'
})
export class ListaEncuestasComponent {

}
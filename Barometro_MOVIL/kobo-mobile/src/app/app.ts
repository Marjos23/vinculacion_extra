import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink], // <-- Asegúrate de que estos dos estén aquí
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'kobo-mobile';
}

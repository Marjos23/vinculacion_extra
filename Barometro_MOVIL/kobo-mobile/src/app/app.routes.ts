import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListaEncuestasComponent } from './lista-encuestas/lista-encuestas.component';
import { LlenarEncuestaComponent } from './llenar-encuesta/llenar-encuesta.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // <-- Ahora el menú carga aquí
  { path: 'lista', component: ListaEncuestasComponent },
  { path: 'llenar/:id', component: LlenarEncuestaComponent }
];
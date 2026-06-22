import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListaEncuestasComponent } from './lista-encuestas/lista-encuestas.component';
import { LlenarEncuestaComponent } from './llenar-encuesta/llenar-encuesta.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: InicioComponent, canActivate: [authGuard] },
  { path: 'lista', component: ListaEncuestasComponent, canActivate: [authGuard] },
  { path: 'llenar/:id', component: LlenarEncuestaComponent, canActivate: [authGuard] }
];

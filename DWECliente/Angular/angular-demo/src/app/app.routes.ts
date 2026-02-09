import { Routes } from '@angular/router';
import { Tareas } from './tareas/tareas';
import { Passwords } from './passwords/passwords';
export const routes: Routes = [
  {
    path: 'tareas', component: Tareas
  },
  {
    path: 'passwords', component: Passwords
  },
  {
    path: '', component: Tareas
  }
];

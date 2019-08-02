import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PacientesComponent} from './pacientes/pacientes.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FeedbackComponent} from './feedback/feedback.component';


const routes: Routes = [
  {
    path: 'home',
    component: PacientesComponent
  },
  {
    path: '',
    component: PacientesComponent,
    pathMatch: 'full'
  },
  {
    path: 'pacientes',
    component: PacientesComponent
  },
  {
    path: 'feedback',
    component: FeedbackComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

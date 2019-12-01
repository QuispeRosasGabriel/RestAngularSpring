import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatosComponent } from './components/platos/platos.component';
import { FormComponent } from './components/form/form.component';


const routes: Routes = [
  { path: '', redirectTo: '/platos', pathMatch: 'full' },
  { path: 'platos', component: PlatosComponent },
  { path: 'formulario', component: FormComponent },
  { path: 'formulario/:id', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

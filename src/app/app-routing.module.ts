import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlatosComponent } from './components/platos/platos.component';


const routes: Routes = [
  { path: '', redirectTo: '/platos', pathMatch: 'full' },
  { path: 'platos', component: PlatosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

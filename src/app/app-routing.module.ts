import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from "./components/inicio/inicio.component";
import {ResultadoComponent} from "./components/resultado/resultado.component";

const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'resultado/:valor', component: ResultadoComponent}, // :valor (vale cualquiera) le pasamos un valor dinamico
  {path: '**', redirectTo: ''} // ultima redirecion por defecto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

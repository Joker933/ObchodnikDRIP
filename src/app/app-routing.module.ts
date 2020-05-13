import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProduktyComponent} from './produkty/produkty.component';
import {DomovComponent} from './domov/domov.component';
import {ProduktInfoComponent} from './produkt-info/produkt-info.component';



const routes: Routes = [
  {path: 'domov', component: DomovComponent},
  {path: 'produkty', component: ProduktyComponent},
  {path: 'produkt-info', component: ProduktInfoComponent},
  {path: '', redirectTo: '/domov', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
